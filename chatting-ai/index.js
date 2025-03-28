import express from 'express';
import http from 'http'; // Corrected import
import { Server } from 'socket.io'; // Added correct import
import cors from 'cors';
import path from 'path';
import { connectUsingMongoose } from './src/config/mongooseConfig.js';
import AuthRouter from './src/features/auth/auth.routes.js';
import roomRouter from './src/features/tutor/tutor.routes.js';
import handleSocketEvents from './src/config/socket.js';
import chatRouter from './src/features/chats/chats.routes.js';
// import { handleSocketEvents } from './src/socketEvents.js'; // Ensure this function exists

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CORS middleware
app.use(
    cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
    })
);

// Socket.io initialization
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true
    }
});

// Handle socket connections
handleSocketEvents(io);


// Routes
app.use('/api/user', AuthRouter);
app.use('/api/room', roomRouter);
app.use('/api/chats', chatRouter);


// Start server after connecting to DB
(async () => {
    try {
        await connectUsingMongoose(); // Wait for DB connection
        console.log("✅ Database connected successfully!");

        // Start the server **only after** the database connection is established
        server.listen(PORT, '0.0.0.0', () => { 
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("❌ Error starting the server:", error);
        process.exit(1); // Exit the process if startup fails
    }
})();

