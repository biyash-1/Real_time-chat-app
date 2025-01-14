import express from 'express';

import dotenv from "dotenv";
import connectdb from "./dbcon.js";
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";
import cors from "cors"
import cookieParser from "cookie-parser";
import path from 'path';
// Middleware

import {app, server} from "./socket.js";
dotenv.config();
const _dirname = path.resolve();
connectdb();
app.use(express.json({ limit: "10mb" })); 

app.use(cors({
  origin: ['http://localhost:3000','https://real-time-chat-app-bay.vercel.app'],
  credentials: true,
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
}))

// Parse incoming JSON requests
app.use(cookieParser());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Corrected `app.use` for routing
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);



// Start server
const PORT = 3001; // Define the port
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
