import { tutorModel } from "../features/tutor/tutor.schema.js";
import { MessageModel } from "../features/chats/chats.schema.js";
import { lstm } from "../utils/lstm.js";

const handleSocketEvents = (io) => {
    io.on("connection", (socket) => {
        console.log(`user connected ${socket.id}`)

        socket.on('join_room', async ({ roomId }) => {
            console.log('room id is', roomId)
            const roomData = await checkRommExists(roomId)
            const roomMessages = await fetchRoomMessages(roomId)
            console.log(roomMessages)
            socket.emit('room_joined', roomMessages)
        })

        socket.on("send_message", async (data) => {
            try {
                console.log('recived message is here is', data)

                const { roomid, sender, comment } = data;
                // console.log(roomid)
                const result = await lstm(comment);
                console.log("result", result.tag)
                // const prediction = result.results[0].probability;
                // console.log("prediction", prediction);

                const room = await tutorModel.findOne({ roomID: roomid })
                // console.log(room)
                const message = new MessageModel({
                    roomID: roomid,
                    sender,
                    comment: comment,
                    prediction: result.tag,
                });
                // console.log(message)
                await message.save();
                room.messages.push(message._id);
                await room.save();

                io.to(roomid).emit("received_message", message);
            } catch (err) {
                console.log(err)
            }
            io.emit("received_message", data)
        })
        socket.on('disconnect', () => {
            console.log("user disconnected")
        })
    })

};

export default handleSocketEvents;

const checkRommExists = async (roomId) => {
    try {
        const room = await tutorModel.findOne({ roomId })
        return room
    } catch (err) {
        console.log(err)
    }
}
const fetchRoomMessages = async (roomID) => {
    try {
        const messages = await MessageModel.find({ roomID }).sort({ createdAt: 1 });
        return messages;
    } catch (err) {
        console.error("Error fetching room messages:", err);
        return [];
    }
};