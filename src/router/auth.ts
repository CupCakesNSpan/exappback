import express, { Request, Response, NextFunction, Router } from "express";

const authRouter: Router = express.Router();

authRouter.get('/public-key-csrf');

export default authRouter;