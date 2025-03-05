import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

// Own modules
import authRouter from "@router/auth";
import onboardingRouter from "@router/onboarding";

const app: Express = express();
app.use(express.json());
const corsOptions = {
    origin: `${process.env.FRONTEND_URL}`,
    optionsSuccessStatus: 200,
    credentials: true,
}
app.use(cors(corsOptions));

// Initial entry point
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server is running right now.');
});

// Authorization routes
app.use("/auth", authRouter);
app.use("/onboarding", onboardingRouter);



const port = process.env.PORT;
app.listen(port, () => {
    console.log(`[server]: server is running http://localhost:${port}`);
});