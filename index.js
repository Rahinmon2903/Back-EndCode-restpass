import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./database/dbConfig.js";
import userRouter from "./Router/userRouter.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());


app.use(
  cors({
    origin: [
      "https://restpass-front-end.vercel.app",
      "https://restpass-front-jrfmc1laf-rahin-mon-ss-projects.vercel.app",
      "https://restpass-front-q131twzjk-rahin-mon-ss-projects.vercel.app",
      "http://localhost:5173"  
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Database connection
dbConnect();


app.get("/", (req, res) => {
  res.status(200).send("Welcome to my API");
});

// API routes
app.use("/api/auth", userRouter);



app.listen(port, () => {
  console.log("server started on port", port);
});
