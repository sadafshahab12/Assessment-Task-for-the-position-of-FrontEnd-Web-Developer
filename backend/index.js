import express from "express";
import { connectMongoDB } from "./db/connectDb.js";
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api/auth", );
app.listen(PORT, () => {
  connectMongoDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
