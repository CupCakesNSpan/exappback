"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
// Own modules
const auth_1 = __importDefault(require("./router/auth"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const corsOptions = {
    origin: `${process.env.FRONTEND_URL}`,
    optionsSuccessStatus: 200,
    credentials: true,
};
app.use((0, cors_1.default)(corsOptions));
// Initial entry point
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server is running right now.');
});
// Authorization routes
app.use("/auth", auth_1.default);
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`[server]: server is running http://localhost:${port}`);
});
