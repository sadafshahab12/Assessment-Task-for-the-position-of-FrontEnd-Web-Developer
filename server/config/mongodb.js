import mongoose from "mongoose";

const connectDb = async () => {
  mongoose.connection.on("connected", () => {
    console.log("connected to db successfully");
  });
  await mongoose.connect(`${process.env.MONGO_URI}/auth`);
};

export default connectDb;
