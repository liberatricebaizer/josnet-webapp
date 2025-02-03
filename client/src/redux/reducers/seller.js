// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   isLoading: true,
//   isSeller: false,
//   seller: null,
//   addressLoading: false,
//   sellers: [],
//   error: null,
//   successMessage: null,
// };

// const sellerSlice = createSlice({
//   name: "seller",
//   initialState,
//   reducers: {
//     LoadSellerRequest: (state) => {
//       state.isLoading = true;
//     },
//     LoadSellerSuccess: (state, action) => {
//       state.isSeller = true;
//       state.isLoading = false;
//       state.seller = action.payload.seller;
//       sessionStorage.setItem("seller", JSON.stringify(action.payload));
//       sessionStorage.setItem("isSeller", true);
//     },
//     LoadSellerFail: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//       state.isSeller = false;
//     },

//     // Update User Information
//     updateSellerInfoRequest: (state) => {
//       state.isLoading = true;
//     },
//     updateSellerInfoSuccess: (state, action) => {
//       state.isLoading = false;
//       state.seller = action.payload;
//     },
//     updateSellerInfoFailed: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },

//     // Update Seller Address
//     updateSellerAddressRequest: (state) => {
//       state.addressLoading = true;
//     },
//     updateSellerAddressSuccess: (state, action) => {
//       state.addressLoading = false;
//       state.successMessage = action.payload.successMessage;
//       state.seller = action.payload.seller;
//     },
//     updateSellerAddressFailed: (state, action) => {
//       state.addressLoading = false;
//       state.error = action.payload;
//     },

//     // Delete Seller Address
//     deleteSellerAddressRequest: (state) => {
//       state.addressLoading = true;
//     },
//     deleteSellerAddressSuccess: (state, action) => {
//       state.addressLoading = false;
//       state.successMessage = action.payload.successMessage;
//       state.seller = action.payload.seller;
//     },
//     deleteSellerAddressFailed: (state, action) => {
//       state.addressLoading = false;
//       state.error = action.payload;
//     },
//     getAllSellersRequest: (state) => {
//       state.isLoading = true;
//     },
//     getAllSellersSuccess: (state, action) => {
//       state.isLoading = false;
//       state.sellers = action.payload;
//     },
//     getAllSellerFailed: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     clearErrors: (state) => {
//       state.error = null;
//     },
//   },
// });

// // Export actions and reducer
// export const {
//   LoadSellerRequest,
//   LoadSellerSuccess,
//   LoadSellerFail,
//   updateSellerInfoRequest,
//   updateSellerInfoSuccess,
//   updateSellerInfoFailed,
//   updateSellerAddressRequest,
//   updateSellerAddressSuccess,
//   updateSellerAddressFailed,
//   deleteSellerAddressRequest,
//   deleteSellerAddressSuccess,
//   deleteSellerAddressFailed,
//   getAllSellersRequest,
//   getAllSellersSuccess,
//   getAllSellerFailed,
//   clearErrors,
// } = sellerSlice.actions;

// export default sellerSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  isSeller: false,
  seller: null,
  addressLoading: false,
  sellers: [],
  error: null,
  successMessage: null,
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
      state.seller = action.payload.seller;

      const sellerData = JSON.stringify(action.payload);
      if (sellerData.length < 5000000) {
        // Check size before storing
        sessionStorage.setItem("seller", sellerData);
        sessionStorage.setItem("isSeller", true);
      } else {
        console.error("Seller data exceeds storage quota.");
      }
    },
    LoadSellerFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isSeller = false;
    },

    // Update User Information
    updateSellerInfoRequest: (state) => {
      state.isLoading = true;
    },
    updateSellerInfoSuccess: (state, action) => {
      state.isLoading = false;
      state.seller = action.payload;
    },
    updateSellerInfoFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Update Seller Address
    updateSellerAddressRequest: (state) => {
      state.addressLoading = true;
    },
    updateSellerAddressSuccess: (state, action) => {
      state.addressLoading = false;
      state.successMessage = action.payload.successMessage;
      state.seller = action.payload.seller;
    },
    updateSellerAddressFailed: (state, action) => {
      state.addressLoading = false;
      state.error = action.payload;
    },

    // Delete Seller Address
    deleteSellerAddressRequest: (state) => {
      state.addressLoading = true;
    },
    deleteSellerAddressSuccess: (state, action) => {
      state.addressLoading = false;
      state.successMessage = action.payload.successMessage;
      state.seller = action.payload.seller;
    },
    deleteSellerAddressFailed: (state, action) => {
      state.addressLoading = false;
      state.error = action.payload;
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
  updateSellerInfoRequest,
  updateSellerInfoSuccess,
  updateSellerInfoFailed,
  updateSellerAddressRequest,
  updateSellerAddressSuccess,
  updateSellerAddressFailed,
  deleteSellerAddressRequest,
  deleteSellerAddressSuccess,
  deleteSellerAddressFailed,
  getAllSellersRequest,
  getAllSellersSuccess,
  getAllSellerFailed,
  clearErrors,
} = sellerSlice.actions;

export default sellerSlice.reducer;
