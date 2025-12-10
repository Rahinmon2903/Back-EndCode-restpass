import express from "express"
import { login, Register } from "../Controller/authController.js";


const userRouter=express.Router();

userRouter.post("/register",Register)

userRouter.post("/login",login)

export default userRouter;