import User from "../Model/userSchema.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import sendEmail from "../Utils/mailer.js";


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

//LOGIN

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email" });
        }

        // 2. Compare password
        const comparePassword = await bcrypt.compare(password, user.password);
        if (!comparePassword) {
            return res.status(401).json({ message: "Invalid  password" });
        }

        // 3. Create token
        const token = jwt.sign(
            { _id: user._id },
            process.env.SECRET_KEY,
            { expiresIn: "1h" }
        );

        // 4. Send token to frontend
        return res.status(200).json({
            message: "User logged in successfully",
            token: token
        });

    } catch (error) {
        return res.status(500).json({ message: "Error in user logging" });
    }


};


export const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        // 1. Check user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email" });
        }

        // 2. Create token
        const token = jwt.sign(
            { _id: user._id },
            process.env.SECRET_KEY,
            { expiresIn: "1d" }
        );

        // 3. Send email
        await sendEmail(
            user.email,
            "Reset Your Password",
            `Use the link below to reset your password: http://localhost:5173/reset-password/${user._id}/${token}`
        );

        // 4. success Response
        return res.status(200).json({ message: "Email sent successfully" });

    } catch (error) {
        // 5. error Response
        return res.status(500).json({ message: "Error in sending email" });
    }
};

export const resetPassword = async (req, res) => {
    //we are getting it from the url so we use params
  const { id, token } = req.params;
  const { password } = req.body;

  try {
    // 1. Check user
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    // 2. ensure token belongs to this user
    if (decoded._id !== id) {
      return res.status(401).json({ message: "Invalid token for this user" });
    }
  // 3. hash password
    const hashPassword = await bcrypt.hash(password, 10);


// 4. update password
    await User.findByIdAndUpdate(
      id,
      { password: hashPassword },
      { new: true }
    );
    // 5. send success response  
    return res.status(200).json({ message: "Password reset successfully" });

  } catch (error) {
    // 6. send error response
    return res.status(500).json({ message: "Error in reset password" });
  }
};
