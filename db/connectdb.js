const mongoose = require("mongoose");
require('dotenv').config()
const connectDB = async (db) => {
  try {
    await mongoose.connect(db);
    console.log("Database connected successfully...");
  } catch (error) {
    throw new Error("Error connecting to the database:", error);
  }
};

module.exports = connectDB;
