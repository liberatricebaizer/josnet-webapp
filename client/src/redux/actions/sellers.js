// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { server } from "../../server";

// // Async thunk for getting all sellers
// export const getAllSellers = createAsyncThunk(
//   "sellers/getAllSellers",
//   async () => {
//     const { data } = await axios.get(`${server}/shop/admin-all-sellers`, {
//       withCredentials: true,
//     });
//     return data.sellers;
//   }
// );

// // Create the slice
// const sellersSlice = createSlice({
//   name: "sellers",
//   initialState: {
//     sellers: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     // You can add additional reducers here if needed
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getAllSellers.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(getAllSellers.fulfilled, (state, action) => {
//         state.loading = false;
//         state.sellers = action.payload;
//       })
//       .addCase(getAllSellers.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message; // Optionally capture error message
//       });
//   },
// });

// // Export the reducer
// export default sellersSlice.reducer;

import axios from "axios";
// import { server } from "../../server";
import {
  LoadSellerRequest,
  LoadSellerSuccess,
  LoadSellerFail,
  getAllSellersRequest,
  getAllSellersSuccess,
  getAllSellerFailed,
} from "../reducers/seller"; // Adjust the import path as necessary

// Get all sellers --- admin
export const getAllSellers = () => async (dispatch) => {
  try {
    dispatch(getAllSellersRequest());

    const { data } = await axios.get(`${process.env.REACT_APP_SERVER_DOMIN}/shop/admin-all-sellers`, {
      withCredentials: true,
    });

    dispatch(getAllSellersSuccess(data.sellers));
  } catch (error) {
    dispatch(
      getAllSellerFailed(
        error.response ? error.response.data.message : "Error fetching sellers"
      )
    );
  }
};

// Example action for loading seller
export const loadSeller = () => async (dispatch) => {
  try {
    dispatch(LoadSellerRequest());

    const { data } = await axios.get(`${process.env.REACT_APP_SERVER_DOMIN}/shop/getSeller`, {
      withCredentials: true,
    });
    console.log(data);
    dispatch(LoadSellerSuccess(data)); // Ensure data.seller contains shopId
  } catch (error) {
    dispatch(
      LoadSellerFail(
        error.response ? error.response.data.message : "Error loading seller"
      )
    );
  }
};
