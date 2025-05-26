import Razorpay from "razorpay";
// import { razorpay } from "../utils/payment.js";
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

const razorpay = new Razorpay({
  key_id: "rzp_test_d4P8UEi6kaJGfV",
  key_secret: "cWyVJkwEWXJQlUAOKJOhfI6B",
});

export const createorder = async (req, res) => {
  const { amount, currency } = req.body;

  const options = {
    amount: amount,
    currency: currency || "INR",
  };
  // console.log(options);
  try {
    const order = await razorpay.orders.create(options);
    console.log("Order created successfully", order);
    res.status(200).json(order);
  } catch (error) {
    console.error("Error while creating Razorpay order:", error);
    res
      .status(500)
      .json({ error: "Failed to create Razorpay order", details: error });
  }
};

export const verifypayment = async (req, res) => {
  console.log("verifypayment", req.body);
  const { order_id, payment_id, razorpay_signature } = req.body;
  const body = order_id + "|" + payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;
  console.log("isAuthentic", isAuthentic);
  if (isAuthentic) {
    res.status(200).json({ message: "payment verified successfully" });
  } else {
    res.status(400).json({ message: "invaild payment signature" });
  }
};
