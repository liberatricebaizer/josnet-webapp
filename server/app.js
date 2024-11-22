const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser"); // Ensure this line is present
const cors = require("cors");

// CORS configuration
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

// Body parser middleware with limits
app.use(express.json({ limit: "10mb" })); // Set limit for JSON payloads
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" })); // Set limit for URL-encoded payloads

app.use(cookieParser());

// Test route
app.use("/test", (req, res) => {
  res.send("Hello world!");
});

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

// Import routes
const user = require("./controller/user");
const shop = require("./controller/shop");
const product = require("./controller/product");
const event = require("./controller/event");
const coupon = require("./controller/coupounCode");
const payment = require("./controller/payment");
const order = require("./controller/order");
const conversation = require("./controller/conversation");
const message = require("./controller/message");
const withdraw = require("./controller/withdraw");

// Route handlers
app.use("/api/v2/user", user);
app.use("/api/v2/conversation", conversation);
app.use("/api/v2/message", message);
app.use("/api/v2/order", order);
app.use("/api/v2/shop", shop);
app.use("/api/v2/product", product);
app.use("/api/v2/event", event);
app.use("/api/v2/coupon", coupon);
app.use("/api/v2/payment", payment);
app.use("/api/v2/withdraw", withdraw);

// Error handling middleware
app.use(ErrorHandler);

module.exports = app;
