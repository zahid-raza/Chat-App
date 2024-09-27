const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in the environment variables");
    }

    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:");
    console.error(`Error message: ${error.message}`);
    console.error(`Full error: ${error}`);
    console.error(`Error stack: ${error.stack}`);
    process.exit(1);
  }
};

module.exports = connectDB;
