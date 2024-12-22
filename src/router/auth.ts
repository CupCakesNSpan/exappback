import express, { Request, Response, NextFunction, Router } from "express";
import { getPublicKey } from "src/controllers/authController";

const authRouter: Router = express.Router();

authRouter.get('/public-key', getPublicKey, (req: Request, res: Response) => {

    res.json({ message: "success", /* Add public key here to send back */ });
});

export default authRouter;