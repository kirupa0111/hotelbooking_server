import mongoose from "mongoose";

const BookedHotelSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  hotelname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },

  photos: {
    type: [String],
  },
  roomNumber: [
    {
      number: Number,
    },
  ],
  Paymentmethod: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Hotel", HotelSchema);
