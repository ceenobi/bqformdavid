import mongoose from "mongoose";

const connectDB = async (url) => {
  const connection = await mongoose.connect(url, {
    dbName: "BQQ",
  });
};

export default connectDB;
