import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import Layout from "../layout/Layout";

const Favorite = () => {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <Layout className="">
      <h1 className="text-2xl pt-6 font-bold mb-4 text-center">
        Your Favorites
      </h1>
      {favorites.length === 0 ? (
        <p className="text-center">You have no favorite items yet.</p>
      ) : (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {favorites.map((movie, index) => (
            <div key={index} className="favorite-item">
              <img
                src={movie.titleImage}
                alt={movie.name}
                className="w-full h-36 object-cover"
              />
              <h3>{movie.name}</h3>
              <button
                onClick={() => removeFromFavorites(movie.name)}
                className="text-sm flex-colo transitions py-2 px-4 border-[#989EAF] mt-2 w-48 border rounded hover:bg-[#000000] hover:text-white"
              >
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Favorite;
