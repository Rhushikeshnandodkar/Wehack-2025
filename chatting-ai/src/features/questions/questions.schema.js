import { mongoose } from "mongoose";


const questionSchema = new mongoose.Schema({
    question: { type: String, required: true },
    difficulty: { type: Number },
    options: { type: [String], required: true },
    correctAnswer: { type: String,  },
    roomID: { type: String, required: true },
});

export const questionModel = mongoose.model("Question", questionSchema);