import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../../server";

// Async thunk for getting all sellers
export const getAllSellers = createAsyncThunk(
  "sellers/getAllSellers",
  async () => {
    const { data } = await axios.get(`${server}/shop/admin-all-sellers`, {
      withCredentials: true,
    });
    return data.sellers;
  }
);

// Create the slice
const sellersSlice = createSlice({
  name: "sellers",
  initialState: {
    sellers: [],
    loading: false,
    error: null,
  },
  reducers: {
    // You can add additional reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllSellers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllSellers.fulfilled, (state, action) => {
        state.loading = false;
        state.sellers = action.payload;
      })
      .addCase(getAllSellers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Optionally capture error message
      });
  },
});

// Export the reducer
export default sellersSlice.reducer;
