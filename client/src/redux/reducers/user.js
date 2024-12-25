import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  addressLoading: false,
  usersLoading: false,
  users: [],
  error: null,
  successMessage: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Load User
    loadUserRequest: (state) => {
      state.loading = true;
    },
    loadUserSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload.user;
      sessionStorage.setItem("user", JSON.stringify(action.payload));
      sessionStorage.setItem("isAuthenticated", true);
    },
    loadUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },

    // Update User Information
    updateUserInfoRequest: (state) => {
      state.loading = true;
    },
    updateUserInfoSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    updateUserInfoFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Update User Address
    updateUserAddressRequest: (state) => {
      state.addressLoading = true;
    },
    updateUserAddressSuccess: (state, action) => {
      state.addressLoading = false;
      state.successMessage = action.payload.successMessage;
      state.user = action.payload.user;
    },
    updateUserAddressFailed: (state, action) => {
      state.addressLoading = false;
      state.error = action.payload;
    },

    // Delete User Address
    deleteUserAddressRequest: (state) => {
      state.addressLoading = true;
    },
    deleteUserAddressSuccess: (state, action) => {
      state.addressLoading = false;
      state.successMessage = action.payload.successMessage;
      state.user = action.payload.user;
    },
    deleteUserAddressFailed: (state, action) => {
      state.addressLoading = false;
      state.error = action.payload;
    },

    // Get All Users (Admin)
    getAllUsersRequest: (state) => {
      state.usersLoading = true;
    },
    getAllUsersSuccess: (state, action) => {
      state.usersLoading = false;
      state.users = action.payload;
    },
    getAllUsersFailed: (state, action) => {
      state.usersLoading = false;
      state.error = action.payload;
    },

    // Clear Errors and Messages
    clearErrors: (state) => {
      state.error = null;
    },
    clearMessages: (state) => {
      state.successMessage = null;
    },
  },
});

// Export actions
export const {
  loadUserRequest,
  loadUserSuccess,
  loadUserFail,
  updateUserInfoRequest,
  updateUserInfoSuccess,
  updateUserInfoFailed,
  updateUserAddressRequest,
  updateUserAddressSuccess,
  updateUserAddressFailed,
  deleteUserAddressRequest,
  deleteUserAddressSuccess,
  deleteUserAddressFailed,
  getAllUsersRequest,
  getAllUsersSuccess,
  getAllUsersFailed,
  clearErrors,
  clearMessages,
} = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
