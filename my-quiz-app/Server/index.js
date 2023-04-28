import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './Router/route.js';
import connect from './Configuration/connection.js' 

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('common'));
app.use(cors());
app.use(express.json());
config();


app.use("/", router);

app.get('/', (req, res) => {
    try {
        res.json("Get Request")
    } catch (error) {
        res.json(error);
    }
});

connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server is connected and running on http://localhost:${port}`);
        });
    } catch (error) {
        console.log("Cannot connected to mongodb server")
    }
}).catch(error => {
    console.log("Invalid Database Connection !")
});