import mongoose from "mongoose";
import { env } from "@/utils/env";

type connectionObject = {
  isConnected?: boolean;
};

const connection: connectionObject = {};

export async function dbConnect() {
  if (connection.isConnected) {
    console.log("already connected to DB");
    return;
  }

  try {
    const db = await mongoose.connect(env.MONGODB_URI);
    connection.isConnected = db.connection.readyState === 1;
    console.log("DB connection successful");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error("DB connection failed", error);
  }
}
