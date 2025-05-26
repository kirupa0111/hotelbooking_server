import express from "express";
import { getAllBookings } from "../controllers/bookings.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//GET ALL BOOKINGLOG
router.get("/", verifyAdmin, getAllBookings);

export default router;
