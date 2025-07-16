import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/UserModel.js";
import transporter from "../config/nodemailer.js";
import dotenv from "dotenv";

dotenv.config();

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
  maxAge: 2 * 24 * 60 * 60 * 1000, // 2 days
};

// REGISTER
export const register = async (req, res) => {
  const { name, email, password, techStack, linkedinUrl, githubUrl } = req.body;

  if (!name || !email || !password || !techStack || !linkedinUrl || !githubUrl) {
    return res.status(400).json({ success: false, message: "Missing required fields." });
  }

  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
      techStack,
      linkedinUrl,
      githubUrl,
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "2d" });
    res.cookie("token", token, COOKIE_OPTIONS);

    const mailOptions = {
      from: process.env.SENDER_MAIL,
      to: email,
      subject: "You're In! Let’s Build Something Brilliant Together.",
      text: `
Hi ${name},

Welcome to Connect Dev — we're absolutely thrilled to have you on board!

Your account has been successfully created with the email: ${email}.

Here’s what you can do next:
• Explore your dashboard
• Start connecting with other developers
• Join exclusive community channels

If you have any questions, feel free to reach out. We’re always here to help.

Let’s build something meaningful together.

Warm regards,  
The Connect Dev Team
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(201).json({ success: true, message: "User registered successfully." });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// LOGIN
export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and password are required." });
  }

  try {
    const user = await userModel.findOne({ email });
    if (!user) return res.status(401).json({ success: false, message: "Invalid email." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ success: false, message: "Invalid password." });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "2d" });
    res.cookie("token", token, COOKIE_OPTIONS);

    return res.status(200).json({ success: true, message: "Login successful." });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// LOGOUT
export const logout = async (req, res) => {
  try {
    res.clearCookie("token", COOKIE_OPTIONS);
    return res.status(200).json({ success: true, message: "Logged out successfully." });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// SEND VERIFY OTP
export const sendVerifyOTP = async (req, res) => {
  try {
    const { userId } = req.body;
    console.log(object)

    const user = await userModel.findById(userId);
    if (!user) return res.status(404).json({ success: false, message: "User not found." });

    if (user.isAccountVerified) {
      return res.status(400).json({ success: false, message: "Account already verified." });
    }

    const verificationOtp = String(Math.floor(100000 + Math.random() * 900000));
    user.verifyOtp = verificationOtp;
    user.verifyOtpExpireAt = Date.now() + 12 * 60 * 60 * 1000; // 12 hours
    await user.save();

    const mailOptions = {
      from: process.env.SENDER_MAIL,
      to: user.email,
      subject: "🔐 Verify Your Connect Dev Account – OTP Inside",
      text: `
Hi ${user.name},

You're almost there! To complete your registration with Connect Dev, please verify your email address.

Your One-Time Password (OTP) is: ${verificationOtp}

🔒 This OTP is valid for the next 12 hours.  
If you did not request this, please ignore this message.

Let’s keep your account safe and secure.

— The Connect Dev Team
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: "Verification OTP sent to email." });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// VERIFY EMAIL
export const verifyEmail = async (req, res) => {
  const { userId, verificationOtp } = req.body;

  if (!userId || !verificationOtp) {
    return res.status(400).json({ success: false, message: "Invalid request." });
  }

  try {
    const user = await userModel.findById(userId);
    if (!user) return res.status(404).json({ success: false, message: "User not found." });

    if (!user.verifyOtp || user.verifyOtp !== verificationOtp) {
      return res.status(400).json({ success: false, message: "Invalid OTP." });
    }

    if (user.verifyOtpExpireAt < Date.now()) {
      return res.status(400).json({ success: false, message: "OTP expired." });
    }

    user.isAccountVerified = true;
    user.verifyOtp = "";
    user.verifyOtpExpireAt = 0;
    await user.save();

    return res.status(200).json({ success: true, message: "Email verified successfully." });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// IS AUTHENTICATED
export const isAuthenticated = async (req, res) => {
  try {
    return res.status(200).json({ success: true, message: "User is authenticated." });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
