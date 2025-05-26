import mongoose from "mongoose";

const OrderModelSchema = new mongoose.Schema({
  order_id: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});
export default mongoose.model("OrderModel", OrderModelSchema);
