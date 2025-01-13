import User from "../model/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import {v2 as cloudinary} from "cloudinary";

import dotenv from "dotenv";
import { log, profile } from "console";
dotenv.config();


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


// Signup User
 export const signupUser = async (req, res) => {
    try {
        const { username, email, password, imageUrl } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            profilePicture: imageUrl,
        });

        // Save the new user to the database
        await newUser.save();

        // Create a JWT token
        const token = jwt.sign(
            { id: newUser._id, username: newUser.username },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        // Set the token in an HttpOnly cookie
        res.cookie("token", token, {
            httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
            secure: process.env.NODE_ENV === "production", // Ensures cookies are sent over HTTPS in production
            sameSite: "None", // Protects against CSRF
            maxAge: 3600000, // 1 hour in milliseconds
        });

        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

// Login User
 export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Check if the password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Create a JWT token
        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        // Set the token in an HttpOnly cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: 'None',
            maxAge: 3600000, // 1 hour in milliseconds
        });

        res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                profilePicture: user.profilePicture,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

// Logout User
 export const logoutUser = async (req, res) => {
    try {
        console.log("logout user called");
       
        res.cookie("token", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 0, // Expire immediately
        });
      
        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
export const checkAuth = async (req, res) => {
    try {
      const token = req.cookies.token;
     
      if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
      }
  
      const verified = jwt.verify(token, process.env.JWT_SECRET);
  
      // Fetch user from the database with profilePicture
      const user = await User.findById(verified.id).select('username email profilePicture');
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
    
  
      res.status(200).json({ message: "Authenticated", user });
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: "Invalid or expired token" });
    }
  };
  

 export const updateProfile = async (req, res) => {
  try { 
    const {profilepic} = req.body;
    console.log("profilepic is",profilepic);
    
    
    const userId = req.user.id;
    console.log("user id is",userId);
    if(!profilepic){
        return res.status(400).json({message:"Please provide a profile picture"});
    }
    const uploadResponse = await cloudinary.uploader.upload(profilepic);
    const updatedUser = await User.findByIdAndUpdate(userId,{ profilePicture:uploadResponse.secure_url}, {new: true});
    res.status(200).json(updatedUser);
    console.log("updated user image  is",updatedUser.profilepic);

  }
  catch(error){
      console.log("error in profile picture",error);
  }
}


export default { signupUser, loginUser, logoutUser ,updateProfile,checkAuth};
