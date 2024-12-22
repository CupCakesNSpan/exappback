"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("src/controllers/authController");
const authRouter = express_1.default.Router();
authRouter.get('/public-key', authController_1.getPublicKey, (req, res) => {
    res.json({ message: "success", /* Add public key here to send back */ });
});
exports.default = authRouter;
