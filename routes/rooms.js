import express from "express";
import {
  updateRoomAvailability,
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getRooms,
} from "../controllers/room.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//CREAT
router.post("/:hotelid", verifyAdmin, createRoom);
//UPDATE Room
router.put("/:id", updateRoom);

router.put("/availability/:id", updateRoomAvailability);

//DELETE ROOM
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//"/:id/:hotelid",
//GET USER
router.get("/:id", verifyUser, getRoom);

//GET ALL USER
router.get("/", verifyAdmin, getRooms);

export default router;
