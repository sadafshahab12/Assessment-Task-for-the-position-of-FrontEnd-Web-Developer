import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/UserModel.js";
import transporter from "../config/nodemailer.js";

export const register = async (req, res) => {
  const { name, email, password, techStack, linkedinUrl, githubUrl } = req.body;

  if (
    !name ||
    !email ||
    !password ||
    !techStack ||
    !linkedinUrl ||
    !githubUrl
  ) {
    return res.json({ success: false, message: "Missing Details" }); //stope function execution
  }

  try {
    //create user account and store in database
    const existingUser = await userModel.findOne({ email }); // if user exist with this email
    if (existingUser) {
      return res.json({ success: false, message: "User already exist." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({
      name,
      email,
      password: hashedPassword,
      techStack,
      linkedinUrl,
      githubUrl,
    });
    await user.save();

    //generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });
    // added token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === " production" ? "none" : "strict",
      maxAge: 2 * 24 * 60 * 60 * 1000,
    });
    //local env we use strict in same site // when deploy in live server we add none
    //maxAge = cookie expiry time in milliseconds
    //sendinf email for welcome
    const mailOptions = {
      from: process.env.SENDER_MAIL,
      to: email,
      subject: "Welcome to Connect Dev.",
      text: `Hi ${name} , Welcome to Connect Dev. Your account has been created with email id: ${email}`,
    };
    await transporter.sendMail(mailOptions);
    return res.json({ success: true, message: "User created  Successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({
      success: false,
      message: "Email and password are required",
    });
  }

  //when email and password have
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "Invalid Email" });
    }
    const isValidPassword = await bcrypt.compare(password, user.password); //first req.body password , second stored in mongodb
    if (!isValidPassword) {
      return res.json({ success: false, message: "Invalid Password" });
    }

    // password match ? // generate token // execute
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 2 * 24 * 60 * 60 * 1000,
    });

    return res.json({ success: true, message: "User Logged in  Successfully" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });
    return res.json({ success: true, message: "Logged Out!" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
