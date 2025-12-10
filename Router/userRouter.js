import express from "express"
import { forgotPassword, login, Register, resetPassword } from "../Controller/authController.js";


const userRouter=express.Router();

userRouter.post("/register",Register)

userRouter.post("/login",login)
userRouter.post("/forgot-password",forgotPassword)
userRouter.post("/reset-password/:id/:token",resetPassword)


export default userRouter;