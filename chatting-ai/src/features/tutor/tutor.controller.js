import { fileURLToPath } from "url";
import { tutorModel } from "./tutor.schema.js";
import path from "path";
import fs from "fs";
// import pdfParse from "pdf-parse";
import mammoth from "mammoth";
import { pdfExtractor } from "../../utils/pdfExtractor.js";

const __filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(__filename);

const generateRoomID = () => {
    return Math.random().toString(36).substring(2, 10);
}

export const getRooms = async (req, res) => {
    try {
        const rooms = await tutorModel.find();
        res.status(200).json(rooms);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const getRoomsByUserID = async (req, res) => {
    try {
        const userId = req.userID;
        const rooms = await tutorModel.find({ authId: userId });
        res.status(200).json(rooms);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const getRoomByID = async (req, res) => {
    try {
        const { roomID } = req.params;
        const room = await tutorModel.findOne({ roomID });
        res.status(200).json(room);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createRoom = async (req, res, next) => {
    try {
        const userId = req.userID;
        const { className, subject, startDate, duration, description } = req.body;
        const roomID = generateRoomID();

        console.log("create-room", req.body);

        const existingRoom = await tutorModel.findOne({ className });
        if (existingRoom) {
            return res.status(400).json({ error: "Room already exists" });
        }

        const startDateObj = new Date(startDate);
        const endDate = new Date(startDateObj.getTime() + duration * 60000);

        let passedContent = ""; // ✅ Corrected variable name

        // ✅ Check if a file was uploaded
        if (req.file) {
            try {
                // ✅ Use buffer from multer instead of reading from disk
                const result = await mammoth.extractRawText({ buffer: req.file.buffer });
                passedContent = result.value.trim();
            } catch (docxError) {
                console.error("Error parsing .docx file:", docxError);
                return res.status(500).json({ error: "Failed to parse .docx content" });
            }
        }

        console.log("Extracted Content:", passedContent);
        const response = await pdfExtractor(passedContent);
        console.log("Response: ", response);
        const modelContent = response.class_summary.content;
        console.log("Model Content:", modelContent);

        const data = {
            roomID,
            className,
            subject,
            description,
            startDate: startDateObj,
            endDate,
            duration,
            authId: userId,
            parsedContent: modelContent// ✅ Store extracted text
        };

        console.log(data)

        const newRoom = new tutorModel(data);
        const savedRoom = await newRoom.save();

        res.status(201).json(savedRoom);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};