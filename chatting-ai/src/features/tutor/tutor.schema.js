import mongoose from "mongoose";

const tutorSchema = new mongoose.Schema({
    roomID: { type: String, },
    className: { type: String, },
    subject: { type: String, },
    description: { type: String, },
    startDate: { type: Date, },
    endDate: { type: Date, },
    duration: { type: Number, },
    authId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    parsedContent: {
        type: String,
    },
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],


},
    { timestamps: true }
);

export const tutorModel = mongoose.model("room", tutorSchema);