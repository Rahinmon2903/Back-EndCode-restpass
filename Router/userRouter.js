import express from "express"
import { forgotPassword, login, Register } from "../Controller/authController.js";


const userRouter=express.Router();

userRouter.post("/register",Register)

userRouter.post("/login",login)
userRouter.post("/forgot-password",forgotPassword)


export default userRouter;