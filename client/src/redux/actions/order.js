import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { server } from "../../server";

// Get all orders of user
export const getAllOrdersOfUser = createAsyncThunk(
  "orders/getAllUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_DOMIN}/order/get-all-orders/${userId}`
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
        `${process.env.REACT_APP_SERVER_DOMIN}/order/get-seller-all-orders/${shopId}`
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
      const response = await axios.get(`${process.env.REACT_APP_SERVER_DOMIN}/order/admin-all-orders`, {
        withCredentials: true,
      });
      return response.data.orders;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
      // return rejectWithValue(error.response.data.message);
    }
  }
);
