import express from "express";
import {
  getHotelCount,
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
  bookedHotel,
  checkBooked,
} from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";
const router = express.Router();

// get total hotel count
router.get("/count", verifyAdmin, getHotelCount);

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET

router.get("/find/:id", getHotel);
//GET ALL

router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

//BookedHotels
router.post("/bookedHotel", bookedHotel);

router.post("/checkBooked", checkBooked);

export default router;
