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

app.use(cors());

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
