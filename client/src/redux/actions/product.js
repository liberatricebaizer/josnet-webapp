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

export const getAllProductsShop = (id) => async (dispatch) => {
  try {
    dispatch(getAllProductsShopRequest());

    if (!id) {
      throw new Error("Shop ID is required"); // Handle missing shop ID
    }
    const { data } = await axios.get(
      `${server}/product/get-all-products-shop/${id}`
    );

    dispatch(getAllProductsShopSuccess(data.products));
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Something went wrong";
    dispatch(getAllProductsShopFailed(errorMessage));
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
