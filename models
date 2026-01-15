import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    token: {
      type: Number,
      required: true,
    },
    prepTime: {
      type: Number,
      required: true,
    },
    canteenId: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
