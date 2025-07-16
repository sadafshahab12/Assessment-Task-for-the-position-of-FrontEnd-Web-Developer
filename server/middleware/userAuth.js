import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const userAuth = async (req, res, next) => {
  try {
    let token = null;

    // Extract from Authorization header if present and properly formatted
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    } else if (req.cookies.token) {
      // Or fallback to cookies
      token = req.cookies.token;
    }

    // If token is still not found
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access denied. No token provided.",
      });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Defensive check for decoded id
    if (!decoded?.id) {
      return res.status(403).json({
        success: false,
        message: "Invalid token. User ID not found.",
      });
    }

    // Attach user info to request
    req.user = { id: decoded.id };

    // Move to next middleware
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message:
        error.name === "TokenExpiredError"
          ? "Session expired. Please log in again."
          : "Invalid token. Authorization failed.",
    });
  }
};

export default userAuth;
