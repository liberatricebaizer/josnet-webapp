import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NavBar from "./layout/NavBar";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  EventsPage,
  FAQPage,
  ProductsPage,
  SellerActivationPage,
  BestSellingPage,
  ProductDetailsPage,
  ProfilePage,
  OrderDetailsPage,
  TrackOrderPage,
  UserInbox,
} from "./routes/Routes";
import Home from "./screens/Home";
// import Login from "./screens/Login";
// import SignUp from "./screens/SignUp";
import SingleProduct from "./screens/SingleProduct";
import Favorite from "./screens/Favorite";
import Cart from "./screens/Cart";
import NotFound from "./screens/NotFound";
import Women from "./screens/Women";
import Men from "./screens/Men";
import Wedding from "./screens/Wedding";
import ShoesAndBags from "./screens/ShoesAndBags";
import HomeProduct from "./screens/HomeProduct";
import Hobbies from "./screens/Hobbies";
import Electronics from "./screens/Electronics";
import Kids from "./screens/Kids";
import Sports from "./screens/Sports";
import BeautyHair from "./screens/BeautyHair";
import Computer from "./screens/Computer";
import Phones from "./screens/Phones";
import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext"; // Import FavoritesProvider
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderTracking from "./screens/OrderTracking";
import AboutUs from "./screens/AboutUs";
import ContactUs from "./screens/ContactUs";
import ProtectedRoute from "./routes/ProtectedRoute";
function App() {
  return (
    // <BrowserRouter>
    <CartProvider>
      <FavoritesProvider>
        {/* <NavBar /> */}
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<LoginPage />} />
          <Route path="/Sign-Up" element={<SignupPage />} />
          <Route
            path="/activation/:activation_token"
            element={<ActivationPage />}
          />
          <Route
            path="/seller/activation/:activation_token"
            element={<SellerActivationPage />}
          />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/best-selling" element={<BestSellingPage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/inbox"
            element={
              <ProtectedRoute>
                <UserInbox />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/order/:id"
            element={
              <ProtectedRoute>
                <OrderDetailsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/track/order/:id"
            element={
              <ProtectedRoute>
                <TrackOrderPage />
              </ProtectedRoute>
            }
          />
          <Route path="/Favorite" element={<Favorite />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/movie/:id" element={<SingleProduct />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/shoesAndBags" element={<ShoesAndBags />} />
          <Route path="/homeProduct" element={<HomeProduct />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/beautyHair" element={<BeautyHair />} />
          <Route path="/computer" element={<Computer />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </FavoritesProvider>
    </CartProvider>
    // </BrowserRouter>
  );
}

export default App;
