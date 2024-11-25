import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Rating from "./Star";
import { FaArrowRightArrowLeft, FaHeart } from "react-icons/fa6";
import { GrView } from "react-icons/gr";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify"; // Import react-toastify
import { useFavorites } from "../context/FavoritesContext";
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

const Product = ({ data, isEvent }) => {
  if (!data) {
    return <div>Loading...</div>; // Handle loading state
  }
  const {
    _id,
    images,
    name,
    ratings,
    originalPrice,
    discountPrice,
    sold_out,
    shop,
  } = data;
  // const { cartItems, addToCart, removeFromCart } = useCart();
  // const { favorites, removeFromFavorites, addToFavorites } = useFavorites();
  // const navigate = useNavigate();
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
  }, [wishlist]);

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

  // const handleAddToCart = () => {
  //   const isAdded = addToCart(movie);
  //   if (isAdded) {
  //     toast.success("Item added to cart!");
  //   } else {
  //     toast.error("Item is already in the cart!");
  //   }
  // };

  // const handleToggleFavorite = () => {
  //   const isFavorite = addToFavorites(movie);
  //   if (isFavorite) {
  //     toast.success("Item added to favorites!");
  //   } else {
  //     // If the product is already in favorites, show a toast message.
  //     toast.error("This item is already in your favorites!");
  //   }
  // };

  // const handleView = () => {
  //   navigate(`/movie/${movie?.name}`);
  // };

  return (
    <div className="hover:scale-95 transitions border shadow-md rounded-md overflow-hidden">
      <div className="flex justify-between items-start">
        <div className="bg-[#FF3F07] text-[10px] text-white w-24 flex justify-center items-center px-2 m-4 rounded">
          On Sale
        </div>
        <Link
          to={`${
            isEvent === true
              ? `/product/${data._id}?isEvent=true`
              : `/product/${data._id}`
          }`}
          className="w-full"
        >
          <img
            src={`${data.images && data.images[0]?.url}`}
            alt={data?.name}
            className="w-full h-36 object-cover"
          />
        </Link>
        <Link to={`/shop/preview/${data?.shop._id}`}>
          <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
        </Link>
        <Link
          to={`${
            isEvent === true
              ? `/product/${data._id}?isEvent=true`
              : `/product/${data._id}`
          }`}
        >
          <h4 className="pb-3 font-[500]">
            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
          </h4>

          <div className="flex">
            <Ratings rating={data?.ratings} />
          </div>

          <div className="py-2 flex items-center justify-between">
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
        <div className="flex flex-col gap-2 p-4 text-black">
          {click ? (
            <button
              onClick={() => removeFromWishlistHandler(data)}
              className="h-9 w-9 text-sm flex-colo transitions border-subMain border rounded "
              color={click ? "red" : "#333"}
              title="Remove from wishlist"
            >
              <AiFillHeart />
            </button>
          ) : (
            <AiOutlineHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => addToWishlistHandler(data)}
              color={click ? "red" : "#333"}
              title="Add to wishlist"
            />
          )}
          <button
            onClick={() => setOpen(!open)}
            color="#333"
            title="Quick view"
            className="h-9 w-9 text-sm flex-colo transitions border-subMain border rounded hover:bg-subMain hover:text-white"
          >
            <AiOutlineEye />
          </button>
          <button
            onClick={() => addToCartHandler(data._id)}
            color="#444"
            title="Add to cart"
            className="h-9 w-9 text-sm flex-colo transitions border-subMain border rounded hover:bg-subMain hover:text-white"
          >
            <AiOutlineShoppingCart />
          </button>
          {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null}
        </div>
      </div>
      <div className="p-4">
        <div className="flex gap-2 text-sm">
          <div className="flex gap-1 text-star">
            <Ratings value={movie.rate} />
          </div>
          <p className="text-[#989EAF]">{movie?.reviews}K Reviews</p>
        </div>
        <div className="flex-btn text-sm gap-2 pt-2 text-black">
          <h3 className="font-semibold truncate">{movie?.name}</h3>
        </div>
        <div className="flex gap-8 items-center">
          <div className="flex gap-4 pt-4 text-sm font-bold">
            <p className="line-through">{movie?.estMoney}</p>
            <p className="text-[#FF3F07]">{movie?.money}</p>
          </div>
          <button
            onClick={handleAddToCart}
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
