import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

// Own modules
import authRouter from "./router/auth";

const app = express();
app.use(express.json());

app.use("/auth", authRouter);

const port = process.env.PORT;


app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server is running right now.');
});

app.listen(port, () => {
    console.log(`[server]: server is running http://localhost:${port}`);
});