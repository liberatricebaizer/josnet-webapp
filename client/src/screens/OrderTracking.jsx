// src/pages/OrderTracking.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const OrderTracking = () => {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState(null);
  const [error, setError] = useState("");

  const fetchOrder = async () => {
    try {
      const response = await axios.get(`/api/order-tracking/${orderId}`);
      setOrder(response.data);
      setError("");
    } catch (err) {
      setError("Order not found");
      setOrder(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">
          Track Your Order
        </h2>

        <input
          type="text"
          placeholder="Enter your Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          className="border border-gray-300 p-2 w-full rounded-md mb-4"
        />

        <button
          onClick={fetchOrder}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Track Order
        </button>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        {order && (
          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Order Details
            </h3>
            <p>
              <strong>Order ID:</strong> {order._id}
            </p>
            <p>
              <strong>Status:</strong> {order.status}
            </p>
            <p>
              <strong>Estimated Delivery:</strong> {order.estimatedDelivery}
            </p>
            <p>
              <strong>Address:</strong> {order.address}
            </p>

            <h4 className="text-md font-semibold text-gray-700 mt-4">
              Tracking History
            </h4>
            <ul className="space-y-2">
              {order.trackingHistory.map((item, index) => (
                <li
                  key={index}
                  className="border border-gray-300 rounded-md p-2"
                >
                  <p>
                    <strong>Date:</strong> {item.date}
                  </p>
                  <p>
                    <strong>Status:</strong> {item.status}
                  </p>
                  <p>
                    <strong>Location:</strong> {item.location}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderTracking;
