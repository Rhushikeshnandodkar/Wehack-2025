import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const url = process.env.DB_URL;

export const connectUsingMongoose = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 10000, // 10 seconds
            bufferCommands: false, // ⬅️ Ensures queries don't execute before connection
        });

        console.log("✅ MongoDB Connected:", mongoose.connection.readyState);

        mongoose.connection.on("error", (err) => {
            console.error("❌ MongoDB Connection Error:", err);
        });

        mongoose.connection.on("disconnected", () => {
            console.warn("⚠️ MongoDB Disconnected. Retrying...");
            setTimeout(connectUsingMongoose, 5000); // Retry after 5 seconds
        });

    } catch (err) {
        console.log("❌ Error while connecting to MongoDB:", err);
        process.exit(1); // Exit process if connection fails
    }
};

