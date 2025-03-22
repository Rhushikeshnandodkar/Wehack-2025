import express from 'express';
import { getChats, addMessage, getChatCosineScore } from './chats.controller.js';
import jwtAuth from '../../middleware/jwt.middleware.js';

const chatRouter = express.Router();

chatRouter.get("/:roomid", jwtAuth, getChats);

chatRouter.get("/cosine/:roomid", getChatCosineScore);

chatRouter.post("/", addMessage);

export default chatRouter;