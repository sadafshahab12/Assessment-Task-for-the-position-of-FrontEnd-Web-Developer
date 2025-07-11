import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDb from "./config/mongoDb.js";
import authRouter from "./routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;
connectDb();
app.use(express.json()); //request parse with json
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
  })
);
//api endpoints
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/auth", authRouter);
app.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`);
});
