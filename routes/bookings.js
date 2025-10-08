import express from "express";
import { totalBookingsCount } from "../controllers/bookings.js";
import { getAllBookings } from "../controllers/bookings.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//GET ALL USER BOOKINGSCOUNT
router.get("/count", verifyAdmin, totalBookingsCount);

//GET ALL BOOKINGLOG
router.get("/", verifyAdmin, getAllBookings);

export default router;
