import React, { useState } from "react";
import { Movies } from "../data/MovieData";
import Product from "./Product";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

const AllProducts = ({ movie }) => {
  const [cart, setCart] = useState([]);
  const { addToFavorites } = useFavorites();

  const addToCart = (movie) => {
    setCart([...cart, movie]); // Adds movie to the cart state
  };

  return (
    <div className="my-4">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {Movies.slice(0, 8).map((movie, index) => (
          <Product
            key={index}
            movie={movie}
            addToCart={addToCart} // Passing addToCart function to Product
            addToFavorites={addToFavorites} // Passing addToFavorites function to Product
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
