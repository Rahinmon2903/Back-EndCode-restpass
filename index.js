import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./database/dbConfig.js";


dotenv.config();

const port=process.env.PORT

app.use(express.json());
app.use(cors());
dbConnect();

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to my API")
})

app.listen(port,()=>{
    console.log("server started");
    
})


