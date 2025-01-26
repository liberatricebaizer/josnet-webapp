// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { server } from "../../server";

// // Create Product
// export const createProduct = createAsyncThunk(
//   "product/create",
//   async ({ data, shopId }, { rejectWithValue }) => {
//     if (!shopId) {
//       return rejectWithValue("Shop ID is required");
//     }
//     try {
//       const response = await axios.post(
//         `${server}/product/create-product/${shopId}`,
//         data
//       );
//       return response.data.product;
//     } catch (error) {
//       console.error("Error creating product:", error); // Add this line
//       return rejectWithValue(
//         error.response?.data?.message || "Something went wrong"
//       );
//     }
//   }
// );

// // Get All Products of a Shop
// export const getAllProductsShop = createAsyncThunk(
//   "product/getAllShop",
//   async (shopId, { rejectWithValue }) => {
//     if (!shopId) {
//       return rejectWithValue("Shop ID is required");
//     }
//     try {
//       const response = await axios.get(
//         `${server}/product/get-all-products-shop/${shopId}`
//       );
//       return response.data.products;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data?.message || "Something went wrong"
//       );
//     }
//   }
// );

// // Delete Product of a Shop
// export const deleteProduct = createAsyncThunk(
//   "product/delete",
//   async (productId, { rejectWithValue }) => {
//     if (!productId) {
//       return rejectWithValue("Product ID is required");
//     }
//     try {
//       const response = await axios.delete(
//         `${server}/product/delete-shop-product/${productId}`,
//         {
//           withCredentials: true,
//         }
//       );
//       return { message: response.data.message, productId }; // Return both message and productId
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data?.message || "Something went wrong"
//       );
//     }
//   }
// );

// // Get All Products
// export const getAllProducts = createAsyncThunk(
//   "product/getAll",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`${server}/product/get-all-products`);
//       return response.data.products;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data?.message || "Something went wrong"
//       );
//     }
//   }
// );

// // Slice
// const productSlice = createSlice({
//   name: "products",
//   initialState: {
//     isLoading: false,
//     products: [],
//     message: null,
//     error: null,
//   },
//   reducers: {
//     clearErrors: (state) => {
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // Create Product
//       .addCase(createProduct.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(createProduct.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.products.push(action.payload); // Add the new product to the list
//         state.message = "Product created successfully.";
//       })
//       .addCase(createProduct.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })

//       // Get All Products of a Shop
//       .addCase(getAllProductsShop.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(getAllProductsShop.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.products = action.payload; // Update the products list
//       })
//       .addCase(getAllProductsShop.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })

//       // Delete Product
//       .addCase(deleteProduct.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(deleteProduct.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.message = action.payload.message; // Set success message
//         // Remove the deleted product from the products array
//         state.products = state.products.filter(
//           (product) => product._id !== action.payload.productId
//         );
//       })
//       .addCase(deleteProduct.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })

//       // Get All Products
//       .addCase(getAllProducts.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(getAllProducts.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.products = action.payload; // Update the products list
//       })
//       .addCase(getAllProducts.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// // Export actions and reducer
// export const { clearErrors } = productSlice.actions;
// export default productSlice.reducer;

import axios from "axios";
import { server } from "../../server";
import {
  productCreateRequest,
  productCreateSuccess,
  productCreateFail,
  getAllProductsShopRequest,
  getAllProductsShopSuccess,
  getAllProductsShopFailed,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductFailed,
  getAllProductsRequest,
  getAllProductsSuccess,
  getAllProductsFailed,
} from "../reducers/product"; // Adjust the import path accordingly

// Create product
export const createProduct =
  (
    name,
    description,
    category,
    tags,
    originalPrice,
    discountPrice,
    stock,
    shopId,
    image
  ) =>
  async (dispatch) => {
    try {
      dispatch(productCreateRequest());

      const { data } = await axios.post(`${server}/product/create-product`, {
        name,
        description,
        category,
        tags,
        originalPrice,
        discountPrice,
        stock,
        shopId,
        image,
      });

      dispatch(productCreateSuccess(data.product));
    } catch (error) {
      dispatch(productCreateFail(error.response.data.message));
    }
  };
// Create product
// export const createProduct = (formData) => async (dispatch) => {
//   try {
//     dispatch(productCreateRequest());

//     const { data } = await axios.post(
//       `${server}/product/create-product`,
//       formData,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );

//     dispatch(productCreateSuccess(data.product));
//   } catch (error) {
//     dispatch(productCreateFail(error.response.data.message || error.message));
//   }
// };

// Get All Products of a shop
export const getAllProductsShop = (id) => async (dispatch) => {
  try {
    dispatch(getAllProductsShopRequest());

    const { data } = await axios.get(
      `${server}/product/get-all-products-shop/${id}`
    );

    dispatch(getAllProductsShopSuccess(data.products));
  } catch (error) {
    dispatch(getAllProductsShopFailed(error.response.data.message));
  }
};

// Delete product of a shop
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch(deleteProductRequest());

    const { data } = await axios.delete(
      `${server}/product/delete-shop-product/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch(deleteProductSuccess(data.message));
  } catch (error) {
    dispatch(deleteProductFailed(error.response.data.message));
  }
};

// Get all products
export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch(getAllProductsRequest());

    const { data } = await axios.get(`${server}/product/get-all-products`);
    dispatch(getAllProductsSuccess(data.products));
  } catch (error) {
    dispatch(getAllProductsFailed(error.response.data.message));
  }
};
