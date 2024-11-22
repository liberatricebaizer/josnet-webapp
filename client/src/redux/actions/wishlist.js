import { addToWishlist, removeFromWishlist } from "../reducers/wishlist"; // Adjust the path as necessary

// Add to wishlist
export const addToWishlistAsync = (data) => async (dispatch, getState) => {
  dispatch(addToWishlist(data)); // Use the action from the slice

  localStorage.setItem(
    "wishlistItems",
    JSON.stringify(getState().wishlist.wishlist)
  );
  return data;
};

// Remove from wishlist
export const removeFromWishlistAsync = (data) => async (dispatch, getState) => {
  dispatch(removeFromWishlist(data._id)); // Use the action from the slice

  localStorage.setItem(
    "wishlistItems",
    JSON.stringify(getState().wishlist.wishlist)
  );
  return data;
};
