import express from "express";
import Order from "../models/Order.js";

const router = express.Router();
router.post("/orders", async (req, res) => {
  try {
    console.log("📦 Incoming order:", req.body); // ADD THIS

    const order = new Order(req.body);
    await order.save();

    res.status(201).json(order);
  } catch (err) {
    console.error("❌ Order save failed:", err); // ADD THIS
    res.status(500).json({ error: err.message });
  }
});

router.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * @route   GET /api/orders/user/:email
 * @desc    Get orders for a specific user
 */
router.get("/orders/user/:email", async (req, res) => {
  try {
    const orders = await Order.find({
      userEmail: req.params.email,
    }).sort({ createdAt: -1 });

    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
