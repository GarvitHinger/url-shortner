import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    // Encryption will be added afterwards
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);


