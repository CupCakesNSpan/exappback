import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server is running right now.');
});

app.listen(port, () => {
    console.log(`[server]: server is running http://localhost:${port}`);
});