import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDb from "./config/mongoDb.js";

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

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`);
});
