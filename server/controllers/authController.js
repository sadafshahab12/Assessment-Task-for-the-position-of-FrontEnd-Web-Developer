import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/UserModel.js";

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

    const token = jwt.sign({id : user._id }, )
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
