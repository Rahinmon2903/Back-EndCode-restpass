import express from "express"
import { Register } from "../Controller/authController.js";


const userRouter=express.Router();

userRouter.post("/register",Register)

export default userRouter;