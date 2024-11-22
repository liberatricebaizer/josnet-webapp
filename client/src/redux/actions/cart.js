import { addToCart, removeFromCart } from "../reducers/cart"; // Adjust the path as necessary

// Add to cart
export const addToCartAction = (data) => async (dispatch, getState) => {
  dispatch(addToCart(data)); // Use the action creator from the slice

  // Update local storage
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
  return data;
};

// Remove from cart
export const removeFromCartAction = (data) => async (dispatch, getState) => {
  dispatch(removeFromCart(data._id)); // Use the action creator from the slice

  // Update local storage
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
  return data;
};
