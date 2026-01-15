const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Canteen Backend is Running!");
});

// ===== MONGODB MODEL =====
const orderSchema = new mongoose.Schema(
  {
    userEmail: String,
    items: Array,
    total: Number,
    token: Number,
    prepTime: Number,
    canteenId: Number,
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

// ===== ROUTES =====

// Create order
app.post("/api/orders", async (req, res) => {
  try {
    console.log("📦 Incoming order:", req.body);

    const order = new Order(req.body);
    const saved = await order.save();

    res.status(201).json(saved);
  } catch (err) {
    console.error("❌ Order save failed:", err);
    res.status(500).json({ error: err.message });
  }
});

// Get all orders
app.get("/api/orders", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ===== MONGODB CONNECTION =====
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// ===== START SERVER =====
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log("🚀 Server running on port", PORT);
});

