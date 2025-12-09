import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./database/dbConfig.js";
import userRouter from "./Router/userRouter.js";


dotenv.config();

const app=express();

const port=process.env.PORT

app.use(express.json());
app.use(cors());
dbConnect();

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to my API")


})

app.use("/api/auth",userRouter);

app.listen(port,()=>{
    console.log("server started");
    
})


