import { Schema, models, model } from "mongoose";

const userSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export const User = models.User || model("User", userSchema);
