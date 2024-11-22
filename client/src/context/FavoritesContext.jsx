import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify"; // Import toast

const FavoritesContext = createContext();

// Custom hook to access the FavoritesContext
export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  // Get favorites from localStorage, or use an empty array if none exist
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  // Add a product to the favorites list
  const addToFavorites = (movie) => {
    if (favorites.some((item) => item.name === movie.name)) {
      return false; // Notify if already in favorites
    } else {
      const updatedFavorites = [...favorites, movie];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Save to localStorage
      return true;
    }
  };

  // Remove a product from the favorites list
  const removeFromFavorites = (movieName) => {
    const updatedFavorites = favorites.filter(
      (item) => item.name !== movieName
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Update localStorage
    toast.success("Product removed from favorites!");
  };

  // Check if a product is in favorites
  const isFavorite = (movieName) =>
    favorites.some((item) => item.name === movieName);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
