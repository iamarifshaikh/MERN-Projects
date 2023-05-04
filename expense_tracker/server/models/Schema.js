import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, "Please add the detail of a transaction"]
    },
    amount: {
        type: Number,
        required: [true, "Please add a transaction amount"]
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

export default mongoose.model("Transaction", Schema);