import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NavBar from "./layout/NavBar";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  EventsPage,
  FAQPage,
  CheckoutPage,
  PaymentPage,
  OrderSuccessPage,
  ProductsPage,
  SellerActivationPage,
  BestSellingPage,
  ProductDetailsPage,
  ProfilePage,
  OrderDetailsPage,
  TrackOrderPage,
  UserInbox,
  ShopLoginPage,
  ShopCreatePage,
} from "./routes/Routes";
import {
  ShopDashboardPage,
  ShopCreateProduct,
  ShopAllProducts,
  ShopCreateEvents,
  ShopAllEvents,
  ShopAllCoupouns,
  ShopPreviewPage,
  ShopAllOrders,
  ShopOrderDetails,
  ShopAllRefunds,
  ShopSettingsPage,
  ShopWithDrawMoneyPage,
  ShopInboxPage,
  ShopHomePage,
} from "./routes/ShopRoutes";
import {
  AdminDashboardPage,
  AdminDashboardUsers,
  AdminDashboardSellers,
  AdminDashboardOrders,
  AdminDashboardProducts,
  AdminDashboardEvents,
  AdminDashboardWithdraw,
} from "./routes/AdminRoutes";
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
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import SellerProtectedRoute from "./routes/SellerProtectedRoute.jsx";
import ProtectedAdminRoute from "./routes/ProtectedAdminRoute.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAllProducts } from "./redux/actions/product";
import { getAllEvents } from "./redux/actions/event";
import axios from "axios";
import { server } from "./server";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { loadSeller, loadUser } from "./redux/actions/user";
import Store from "./redux/store";
function App() {
  const [stripeApikey, setStripeApiKey] = useState("");

  async function getStripeApikey() {
    const { data } = await axios.get(`${server}/payment/stripeapikey`);
    setStripeApiKey(data.stripeApikey);
  }
  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
    Store.dispatch(getAllProducts());
    Store.dispatch(getAllEvents());
    getStripeApikey();
  }, []);
  return (
    // <BrowserRouter>
    <CartProvider>
      <FavoritesProvider>
        {/* <NavBar /> */}
        <ToastContainer />
        {stripeApikey && (
          <Elements stripe={loadStripe(stripeApikey)}>
            <Routes>
              <Route
                path="/payment"
                element={
                  <ProtectedRoute>
                    <PaymentPage />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Elements>
        )}
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
            path="/checkout"
            element={
              <ProtectedRoute>
                <CheckoutPage />
              </ProtectedRoute>
            }
          />

          <Route path="/order/success" element={<OrderSuccessPage />} />
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
          <Route path="/shop/preview/:id" element={<ShopPreviewPage />} />
          {/* shop Routes */}
          <Route path="/shop-create" element={<ShopCreatePage />} />
          <Route path="/shop-login" element={<ShopLoginPage />} />
          <Route
            path="/shop/:id"
            element={
              <SellerProtectedRoute>
                <ShopHomePage />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <SellerProtectedRoute>
                <ShopSettingsPage />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <SellerProtectedRoute>
                <ShopDashboardPage />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-create-product"
            element={
              <SellerProtectedRoute>
                <ShopCreateProduct />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-orders"
            element={
              <SellerProtectedRoute>
                <ShopAllOrders />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-refunds"
            element={
              <SellerProtectedRoute>
                <ShopAllRefunds />
              </SellerProtectedRoute>
            }
          />

          <Route
            path="/order/:id"
            element={
              <SellerProtectedRoute>
                <ShopOrderDetails />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-products"
            element={
              <SellerProtectedRoute>
                <ShopAllProducts />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-create-event"
            element={
              <SellerProtectedRoute>
                <ShopCreateEvents />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-events"
            element={
              <SellerProtectedRoute>
                <ShopAllEvents />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-coupouns"
            element={
              <SellerProtectedRoute>
                <ShopAllCoupouns />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-withdraw-money"
            element={
              <SellerProtectedRoute>
                <ShopWithDrawMoneyPage />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-messages"
            element={
              <SellerProtectedRoute>
                <ShopInboxPage />
              </SellerProtectedRoute>
            }
          />
          {/* Admin Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedAdminRoute>
                <AdminDashboardPage />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/admin-users"
            element={
              <ProtectedAdminRoute>
                <AdminDashboardUsers />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/admin-sellers"
            element={
              <ProtectedAdminRoute>
                <AdminDashboardSellers />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/admin-orders"
            element={
              <ProtectedAdminRoute>
                <AdminDashboardOrders />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/admin-products"
            element={
              <ProtectedAdminRoute>
                <AdminDashboardProducts />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/admin-events"
            element={
              <ProtectedAdminRoute>
                <AdminDashboardEvents />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/admin-withdraw-request"
            element={
              <ProtectedAdminRoute>
                <AdminDashboardWithdraw />
              </ProtectedAdminRoute>
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
