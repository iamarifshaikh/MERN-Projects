import mongoose from "mongoose";

const TodoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    complete: {
        type: Boolean,
        default: false
    },
    timestamps: {
        type: String,
        default: Date.now(),
    }
});

export const Todo = mongoose.model("todo", TodoSchema);