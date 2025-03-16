import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("connection Successfully", conn.connection.host);
  } catch (error) {
    console.log("Server die", error.message);
  }
};
