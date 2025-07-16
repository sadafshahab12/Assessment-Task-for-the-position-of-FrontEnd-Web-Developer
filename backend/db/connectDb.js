import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connectMongoDB = async () => {
  try {
    const connectdb = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb Connected ${connectdb.connection.host}`);
  } catch (error) {
    console.log(`Error to mongo db connection : ${error.message}`);
    process.exit(1);
  }
};
