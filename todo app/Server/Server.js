import express from "express";
import connectDB from "./config/db.js";
import todo from './routes/todo.js'
import cors from 'cors';
const app = express();

connectDB();

app.use(express.json({ extended: false }));
app.use(cors({ origin: true, credentials: true }))
app.get("/", (req, res) => res.send("Hello From Express"));

app.use('/todo', todo);
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on PORT:${port}`);
});