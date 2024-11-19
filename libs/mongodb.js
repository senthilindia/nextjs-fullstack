import mongoose from "mongoose";

let isConnected = false;

const connectMongoDB = async () => {
  if (isConnected) {
    return;
  }

  try {
    const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
    // mongodb+srv://senthilindia17:<db_password>@devcluster.hr4jg.mongodb.net/?retryWrites=true&w=majority&appName=devcluster
    const connectionString = `mongodb+srv://senthilindia17:${password}@devcluster.hr4jg.mongodb.net/?retryWrites=true&w=majority&appName=devcluster`; // clustore url
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

export default connectMongoDB;