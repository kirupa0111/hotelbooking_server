import BookedHotel from "../models/BookedHotel.js";

export const getAllBookings = async (req, res, next) => {
  try {
    const rooms = await BookedHotel.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};

export const totalBookingsCount = async (req, res, next) => {
  try {
    // router.get("/count", async (req, res) => {
    //   try {
    const count = await BookedHotel.countDocuments();
    res.status(200).json({ count });
    console.log(count);
  } catch (err) {
    next(err);
  }
};
