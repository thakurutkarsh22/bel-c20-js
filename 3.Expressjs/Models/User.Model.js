const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true, // why this is bad - bloom filter to determine if the username is already taken
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: {
      type: String,
      trim: true,
      required: true,
      enum: ["male", "female", "others"],
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      trim: true,
    },
    hobbies: {
      type: [String],
      default: [],
    },
    role: {
      type: String,
      enum: ["admin", "manager", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("User", userSchema);
// User - this is actual MONGO DB COLLECTION NAME

module.exports = UserModel;