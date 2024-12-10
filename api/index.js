// import express from "express";
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoute");

dotenv.config();

const MONGO_URL = process.env.MONGO;

const app = express();
app.use(express.json());

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000 !!");
});

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// middleware pour gerer les erreurs .
app.use((err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
