import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';

const app = express();

app.use(morgan('common'))
app.use(cors());
app.use(express.json());
config();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    try {
        res.json("Get Request")
    } catch (error) {
        res.json(error);
    }
})

app.listen(port, () => {
    console.log(`Server is connected and running on http://localhost:${port}`);
});