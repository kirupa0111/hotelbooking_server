import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import bookingsRoute from "./routes/bookings.js";
import usersRoute from "./routes/users.js";
import cookieParser from "cookie-parser";
import createOrderRoute from "./routes/createorder.js";
import cors from "cors";
import Razorpay from "razorpay";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongodb");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("mongodb connected");
});

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);
app.use("/api/payment", createOrderRoute);
app.use("/api/bookings", bookingsRoute);

app.use((err, req, res, next) => {
  console.log("hi i am middleware");
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8000, () => {
  connect();
  console.log("connected to backend .");
});
