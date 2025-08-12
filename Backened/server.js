import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { ConnectDB } from "./DB/ConnectDB.js";

import Authroute from "./Routes/Authroute.js";

dotenv.config();

const app = express();

// ✅ CORS fix for cookies
app.use(cors({
    origin: "http://localhost:5173", // frontend dev server URL
    credentials: true
}));

const PORT = process.env.PORT || 5000;

app.use(express.json()); 
app.use(cookieParser());

// Routes
app.use("/api/auth", Authroute);

app.listen(PORT, () => {
    ConnectDB();
    console.log("Server is running on port:", PORT);
});
