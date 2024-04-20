import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  //to Avoid database choking
  if (connection.isConnected) {
    console.log("Already connected with database");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI! || "", {});
    console.log("Here data of db", db);
    connection.isConnected = db.connections[0].readyState;
    console.log("New Db connected successfully");
  } catch (error) {
    console.log("Database connection failed", error);
    process.exit(1);
  }
}
export default dbConnect;
