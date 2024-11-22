const express = require("express");
const mongoose = require("mongoose");
const app = require("./app");
// const cloudinary = require("cloudinary");
const dotenv = require("dotenv");
const cors = require("cors");

// CORS configuration
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

// Load environment variables from .env file
if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({
    path: "config/.env",
  });
}

// Connect to MongoDB
const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      // Removed deprecated options
    })
    .then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
      process.exit(1); // Exit if connection fails
    });
};

// Order schema
// const orderSchema = new mongoose.Schema({
//   status: String,
//   estimatedDelivery: String,
//   address: String,
//   trackingHistory: [
//     {
//       date: String,
//       status: String,
//       location: String,
//     },
//   ],
// });

// const Orders = mongoose.model("Order", orderSchema);

// Middleware to parse JSON
// const app = express();
app.use(express.json());

// Connect to the database
connectDatabase();

// Cloudinary configuration
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// Order tracking route
// app.get("/api/order-tracking/:orderId", async (req, res) => {
//   try {
//     const order = await Orders.findById(req.params.orderId);
//     if (!order) {
//       return res.status(404).json({ message: "Order not found" });
//     }
//     res.json(order);
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// Create server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

// Handling uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server for handling uncaught exception`);
  process.exit(1);
});

// Unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server for ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
