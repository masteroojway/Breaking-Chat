import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";

const app = express();
const server = http.createServer(app);

app.use(express.json({limit: "4mb"}));
app.use(cors({credentials: true}));
app.use("/api/status", (req, res) => (res.send("server working")));

await connectDB();

const portnum = process.env.portnum || 3000;
server.listen(portnum, ()=> console.log(`server number: ${portnum}`)); 