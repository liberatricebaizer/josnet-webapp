import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../../server";

// Get all orders of user
export const getAllOrdersOfUser = createAsyncThunk(
  "orders/getAllUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${server}/order/get-all-orders/${userId}`
      );
      return response.data.orders;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
      // return rejectWithValue(error.response.data.message);
    }
  }
);

// Get all orders of seller
export const getAllOrdersOfShop = createAsyncThunk(
  "orders/getAllShop",
  async (shopId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${server}/order/get-seller-all-orders/${shopId}`
      );
      return response.data.orders;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
      // return rejectWithValue(error.response.data.message);
    }
  }
);

// Get all orders of Admin
export const getAllOrdersOfAdmin = createAsyncThunk(
  "orders/getAllAdmin",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${server}/order/admin-all-orders`, {
        withCredentials: true,
      });
      return response.data.orders;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
      // return rejectWithValue(error.response.data.message);
    }
  }
);

// Slice
const orderSlice = createSlice({
  name: "orders",
  initialState: {
    isLoading: false,
    userOrders: [],
    shopOrders: [],
    adminOrders: [],
    error: null,
  },
  reducers: {
    clearErrors: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Get all orders of user
    builder
      .addCase(getAllOrdersOfUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllOrdersOfUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userOrders = action.payload;
      })
      .addCase(getAllOrdersOfUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Get all orders of seller
      .addCase(getAllOrdersOfShop.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllOrdersOfShop.fulfilled, (state, action) => {
        state.isLoading = false;
        state.shopOrders = action.payload;
      })
      .addCase(getAllOrdersOfShop.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Get all orders of Admin
      .addCase(getAllOrdersOfAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllOrdersOfAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.adminOrders = action.payload;
      })
      .addCase(getAllOrdersOfAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Export actions and reducer
export const { clearErrors } = orderSlice.actions;
export default orderSlice.reducer;
