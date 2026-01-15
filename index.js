const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const orderRoutes = require("./routes/orderRoutes");
app.use("/api/orders", orderRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Canteen Backend is Running!");
});

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Error:", err));

// Port
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});

