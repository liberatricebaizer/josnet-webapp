import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "aos";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; // Import CartProvider
import { Provider } from "react-redux";
import store from "./redux/store.js";
// import { createStore } from "redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* Wrap App with CartProvider */}
    <Provider store={store}>
      <CartProvider>

        <App />

      </CartProvider>
    </Provider>
  </BrowserRouter>
);
