import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
  getUsersCount,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//GET ALL USER COUNT
router.get("/count", verifyAdmin, getUsersCount);

//UPDATE USER
router.put("/:id", verifyUser, updateUser);

//DELETE USER
router.delete("/:id", verifyUser, deleteUser);

//GET USER BY ID
router.get("/:id", verifyUser, getUser);

//GET ALL USERS
router.get("/", verifyAdmin, getUsers);

export default router;
