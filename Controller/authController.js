import User from "../Model/userSchema.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


//register

export const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. Check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 2. Hash password
    const hashPassword = await bcrypt.hash(password, 10);

    // 3. Create new user
    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });

    await newUser.save();

    // 4. Sending success response
    return res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
    //5. Sending error response
    return res.status(500).json({ message: "Error in user registration" });
  }
};
