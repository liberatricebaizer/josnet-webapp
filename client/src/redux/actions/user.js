import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../../server";

// Load User
export const loadUser = createAsyncThunk("user/loadUser", async () => {
  const { data } = await axios.get(`${server}/user/getuser`, {
    withCredentials: true,
  });
  return data.user;
});

// Load Seller
export const loadSeller = createAsyncThunk("user/loadSeller", async () => {
  const { data } = await axios.get(`${server}/shop/getSeller`, {
    withCredentials: true,
  });
  return data.seller;
});

// Update User Information
export const updateUserInformation = createAsyncThunk(
  "user/updateUserInformation",
  async ({ name, email, phoneNumber, password }) => {
    const { data } = await axios.put(
      `${server}/user/update-user-info`,
      { name, email, phoneNumber, password },
      { withCredentials: true }
    );
    return data.user;
  }
);

// Update User Address
export const updateUserAddress = createAsyncThunk(
  "user/updateUserAddress",
  async ({ country, city, address1, address2, zipCode, addressType }) => {
    const { data } = await axios.put(
      `${server}/user/update-user-addresses`,
      { country, city, address1, address2, zipCode, addressType },
      { withCredentials: true }
    );
    return {
      successMessage: "User address updated successfully!",
      user: data.user,
    };
  }
);

// Delete User Address
export const deleteUserAddress = createAsyncThunk(
  "user/deleteUserAddress",
  async (id) => {
    const { data } = await axios.delete(
      `${server}/user/delete-user-address/${id}`,
      { withCredentials: true }
    );
    return {
      successMessage: "User deleted successfully!",
      user: data.user,
    };
  }
);

// Get All Users (Admin)
export const getAllUsers = createAsyncThunk("user/getAllUsers", async () => {
  const { data } = await axios.get(`${server}/user/admin-all-users`, {
    withCredentials: true,
  });
  return data.users;
});
