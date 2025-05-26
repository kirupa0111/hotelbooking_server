import mongoose from "mongoose";

const BookedHotelSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  hotelId: {
    type: String,
    required: true,
  },

  paymentId: {
    type: String,
    required: true,
  },
  roomIds: {
    type: [String],
    required: true,
  },
  checkIn: {
    type: Date,
    required: true,
  },
  checkOut: {
    type: Date,
    required: true,
  },
  hotelId: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  // type: {
  //   type: String,
  //   required: true,
  // },
  hotelname: {
    type: String,
    required: true,
  },
  // address: {
  //   type: String,
  //   required: true,
  // },

  // photos: {
  //   type: [String],
  // },

  paymentStatus: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

export default mongoose.model("BookedHotel", BookedHotelSchema);
