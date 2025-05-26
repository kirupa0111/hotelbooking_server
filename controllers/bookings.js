import BookedHotel from "../models/BookedHotel.js";

export const getAllBookings = async (req, res, next) => {
  try {
    const rooms = await BookedHotel.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};
