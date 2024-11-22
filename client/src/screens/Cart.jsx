import React from "react";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify"; // Import react-toastify
import Layout from "../layout/Layout";
import Rating from "../components/Star";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const handleRemoveFromCart = (movieName) => {
    removeFromCart(movieName); // Remove the product from the cart
    toast.success("Item removed from cart!"); // Show toast notification
  };

  return (
    <Layout className="">
      <h2 className="text-2xl pt-6 font-bold mb-4 text-center">Your Cart</h2>
      <div className="flex gap-5 flex-col">
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty!</p>
        ) : (
          cartItems.map((movie) => (
            <div
              key={movie.name}
              className="flex items-center  gap-5  pb-[10px]"
            >
              <div className="flex">
                <img
                  src={movie.titleImage}
                  alt={movie.name}
                  className="w-[100px] h-[150px] object-cover"
                />
                <div className="flex flex-col w-96 p-8 bg-gray-300">
                  <div className="flex-btn text-sm gap-2 pt-2 text-black">
                    <h3 className="font-semibold truncate">{movie?.name}</h3>
                  </div>
                  <div className="flex gap-2 pt-4 text-sm">
                    <div className="flex gap-1 text-star">
                      <Rating value={movie.rate} />
                    </div>
                    <p className="text-[#989EAF]">{movie?.reviews}K Reviews</p>
                  </div>
                  <div className="flex gap-4 pt-2 text-sm font-bold">
                    <p className="line-through">{movie?.estMoney}</p>
                    <p className="text-[#FF3F07]">{movie?.money}</p>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(movie.name)}
                    className="text-sm flex-colo transitions py-2 px-4 border-[#989EAF] mt-2 w-48 border rounded hover:bg-[#000000] hover:text-white"
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </Layout>
  );
};

export default Cart;
