import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  isSeller: false,
  seller: null,
  sellers: [],
  error: null,
};

const sellerSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {
    LoadSellerRequest: (state) => {
      state.isLoading = true;
    },
    LoadSellerSuccess: (state, action) => {
      state.isSeller = true;
      state.isLoading = false;
      state.seller = action.payload;
      sessionStorage.setItem("seller", JSON.stringify(action.payload));
      sessionStorage.setItem("isSeller", true);
    },
    LoadSellerFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isSeller = false;
    },
    getAllSellersRequest: (state) => {
      state.isLoading = true;
    },
    getAllSellersSuccess: (state, action) => {
      state.isLoading = false;
      state.sellers = action.payload;
    },
    getAllSellerFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  },
});

// Export actions and reducer
export const {
  LoadSellerRequest,
  LoadSellerSuccess,
  LoadSellerFail,
  getAllSellersRequest,
  getAllSellersSuccess,
  getAllSellerFailed,
  clearErrors,
} = sellerSlice.actions;

export default sellerSlice.reducer;
