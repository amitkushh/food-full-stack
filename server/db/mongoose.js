import mongoose from "mongoose";
import { config } from "../conf/config.js";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database connected sucsessfully");
    });

    mongoose.connection.on("error", (err) => {
      console.log("error to connect database:", err);
    });

    await mongoose.connect(config.MONGODB_URL);
  } catch (error) {
    console.log("error to connect database");
    process.exit(1);
  }
};

export default connectDB;
