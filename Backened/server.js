import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { ConnectDB } from "./DB/ConnectDB.js";
 
import Authroute from "./Routes/Authroute.js"


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // ✅ Parse incoming JSON
app.use(cookieParser());
app.use("/api/auth",Authroute)

app.listen(PORT, () =>{
    ConnectDB();
    console.log("server is running on port:",PORT);
});