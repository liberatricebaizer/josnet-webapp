import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user"; // Corrected import
import cartReducer from "./reducers/cart"; // Ensure this is correct
import wishlistReducer from "./reducers/wishlist"; // Ensure this is correct
import seller from "./reducers/seller";
import productReducer from "./reducers/product";
import eventReducer from "./reducers/event";

const Store = configureStore({
  reducer: {
    user: userReducer,
    seller: seller,
    products: productReducer,
    events: eventReducer, // This should match the slice name
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default Store;
