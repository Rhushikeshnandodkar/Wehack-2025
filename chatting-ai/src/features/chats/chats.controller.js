import { tutorModel } from "../tutor/tutor.schema.js";
import { lstm } from "../../utils/lstm.js";
import { MessageModel } from "./chats.schema.js";
import { cosineSimilarity } from "../../utils/cosineSimilarity.js";


export const getChats = async (req, res) => {
    try {
        const { roomid } = req.params;

        const room = await tutorModel.findOne({ roomID: roomid }).populate("messages");
        if (!room) {
            return res.status(404).json({ error: "Room not found" });
        }

        res.status(200).json(room);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const getChatCosineScore = async (req, res) => {
    try {
        const { roomid } = req.params;

        // const content = await 

        const room = await tutorModel.findOne({ roomID: roomid });
        if (!room) {
            return res.status(404).json({ error: "Room not found" });
        }

        const content = room.parsedContent;

        const messagesData = await tutorModel.findOne({ roomID: roomid }).populate("messages");
        if (!messagesData || !messagesData.messages) {
            return res.status(404).json({ error: "Messages not found" });
        }

        const filterNotSpamMessages = messagesData.messages.filter((message) => message.prediction !== "Spam");
        // console.log("filterNotSpamMessages", filterNotSpamMessages);

        const notSpamMessages = filterNotSpamMessages.map((message) => message.comment);
        // console.log("notSpamMessages", notSpamMessages);

        const result = await cosineSimilarity(content, notSpamMessages);
        // console.log("result", result.results);


        // console.log("room", room);
        res.status(200).json(result.results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const addMessage = async (req, res) => {
    try {
        const { roomid, sender, chat } = req.body;

        const result = await lstm(chat);
        const comment = result.results[0].comment;
        const prediction = result.results[0].prediction;

        const room = await tutorModel.findOne({ roomID: roomid });
        if (!room) {
            return res.status(200).json({ error: "Room does not exist" }); // Return here to stop execution
        }

        const message = new MessageModel({ roomID: roomid, sender, comment: chat, prediction });
        await message.save();
        console.log("message", message);

        room.messages.push(message._id);
        await room.save();

        res.status(201).json(message);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};