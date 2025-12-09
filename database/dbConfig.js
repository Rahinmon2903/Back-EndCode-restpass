import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnect=async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("database connected");
        
        
    } catch (error) {
        console.log("error in database connection");
        
    }
    
}

export default dbConnect;


