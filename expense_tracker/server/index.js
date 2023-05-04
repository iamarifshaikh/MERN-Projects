import express from 'express';
import dotenv from "dotenv";
import router from './routes/transaction.js';
import connect from './database/database.js';
import morgan from 'morgan';
import colors from "colors";

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(express.json());
app.use("/", router);

app.get("/", (req, res) => {
    res.send("Welcome to the server of an expense tracker app !");
});

const PORT = process.env.PORT || 5000; 

connect().then(() => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on PORT:${PORT}`.blue.bold);
        });
    } catch (error) {
        console.log("Connection MongoDB Server Is Failed !".red.bold);
    };
}); 