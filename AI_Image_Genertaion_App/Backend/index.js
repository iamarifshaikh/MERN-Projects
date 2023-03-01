import express  from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import AiRoutes from './Database/Routes/AiRoutes.js';
import PostRoutes from './Database/Routes/PostRoutes.js';

import connectDB from "./Database/connect.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit:'50mb'}));

app.use('api/v1/post', PostRoutes);
app.use('api/v1/ai', AiRoutes);

app.get('/', async (req, res) => {
    res.send('Hello From AI');
});

const startServer = async () => {
try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080,() => console.log("Server has started on port http://localhost:8080"))
} catch (error) {
    console.log(error)
}
}
// ZXNSFvA2jALVegBZ
startServer();