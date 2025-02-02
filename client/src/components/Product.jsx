import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Ratings from "../components/Products/Ratings";
import ProductDetailsCard from "../components/ProductDetailsCard/ProductDetailsCard";
import {
  addToWishlistAsync,
  removeFromWishlistAsync,
} from "../redux/actions/wishlist";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../redux/actions/cart";
import {
  AiFillHeart,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import styles from "../styles/styles";

const Product = ({ data, isEvent }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i._id === data._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [wishlist, data]);
  // }, [wishlist]);

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlistAsync(data));
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlistAsync(data));
  };

  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: 1 };
        dispatch(addToCartAction(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };

  if (!data || Object.keys(data).length === 0) {
    return null;
  }

  return (
    <div className="hover:scale-95 transitions p-4 border shadow-md rounded-md overflow-hidden">
      <div className="flex justify-between items-start">
        {/* <div className="bg-[#FF3F07] text-[10px] text-white text-center w-24 flex items-center px-2 m-4 rounded">
          On Sale
        </div> */}
        <Link
          to={`${
            isEvent === true
              ? `/product/${data._id}?isEvent=true`
              : `/product/${data._id}`
          }`}
          className="w-20 h-12  "
        >
          <img
            src={`${data.images && data.images[0]?.url}`}
            alt={data?.name}
            className="w-full object-cover"
          />
        </Link>

        <div className="flex flex-col gap-2 p-2 text-black">
          {click ? (
            <button
              onClick={() => removeFromWishlistHandler(data)}
              className="h-9 w-9 text-sm flex-colo transitions border-subMain border rounded "
              // color={click ? "red" : "#333"}
              title="Remove from wishlist"
            >
              <AiFillHeart />
            </button>
          ) : (
            <AiOutlineHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => addToWishlistHandler(data)}
              // color={click ? "red" : "#333"}
              title="Add to wishlist"
            />
          )}
          <button
            onClick={() => setOpen(!open)}
            title="Quick view"
            className="h-9 w-9 text-sm flex-colo transitions border-subMain border rounded hover:bg-subMain hover:text-white"
          >
            <AiOutlineEye />
          </button>
          <button
            onClick={() => addToCartHandler(data._id)}
            title="Add to cart"
            className="h-9 w-9 text-sm flex-colo transitions border-subMain border rounded hover:bg-subMain hover:text-white"
          >
            <AiOutlineShoppingCart />
          </button>
          {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null}
        </div>
      </div>
      <Link to={`/shop/preview/${data?.shop._id}`}>
        <h5 className={`${styles.shop_name} `}>{data.shop.name}</h5>
      </Link>
      <Link
        to={`${
          isEvent === true
            ? `/product/${data._id}?isEvent=true`
            : `/product/${data._id}`
        }`}
      >
        <h4 className="pb-8 pt-1 text-red-600 font-[500]">
          {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
        </h4>
        <div className="flex gap-2 text-sm">
          <div className="flex gap-1 text-star">
            <Ratings value={data?.ratings} />
          </div>
          <p className="text-[#989EAF]">{data?.reviews}K Reviews</p>
        </div>

        {/* <div className="flex">
          <Ratings rating={data?.ratings} />
        </div> */}

        <div className="py-4 flex items-center justify-between">
          <div className="flex">
            <h5 className={`${styles.productDiscountPrice}`}>
              {data.originalPrice === 0
                ? data.originalPrice
                : data.discountPrice}
              $
            </h5>
            <h4 className={`${styles.price}`}>
              {data.originalPrice ? data.originalPrice + " $" : null}
            </h4>
          </div>
          <span className="font-[400] text-[17px] text-[#68d284]">
            {data?.sold_out} sold
          </span>
        </div>
      </Link>
      <div className="px-4">
        {/* <div className="flex-btn text-sm gap-2 pt-2 text-black">
          <h3 className="font-semibold truncate">{data?.name}</h3>
        </div> */}
        <div className="flex gap-8 justify-center">
          <button
            onClick={() => addToCartHandler(data._id)}
            // onClick={handleAddToCart}
            className="text-sm flex-colo transitions py-2 px-4 border-[#989EAF] border rounded hover:bg-[#000000] hover:text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
