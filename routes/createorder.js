import express from "express";
import { createorder, verifypayment } from "../controllers/createorder.js";
const router = express.Router();
router.route("/createorder").post(createorder);
router.route("/verifypayment").post(verifypayment);

export default router;
