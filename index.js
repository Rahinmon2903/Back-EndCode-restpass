import express from "express";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config();

const port=process.env.PORT

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to my API")
})

app.listen(port,()=>{
    console.log("server started");
    
})


