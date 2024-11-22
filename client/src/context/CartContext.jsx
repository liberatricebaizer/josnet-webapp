import React, { createContext, useContext, useState, useEffect } from "react";

// Create a CartContext
const CartContext = createContext();

// Custom hook to access the CartContext
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // Get cart items from localStorage, or use an empty array if none exist
  const [cartItems, setCartItems] = useState(() => {
    const storedItems = localStorage.getItem("cartItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  // Add product to the cart
  const addToCart = (item) => {
    if (cartItems.find((cartItem) => cartItem.name === item.name)) {
      return false; // Product already in cart
    }
    const updatedCartItems = [...cartItems, item];
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems)); // Save to localStorage
    return true;
  };

  // Remove product from the cart
  const removeFromCart = (itemName) => {
    const updatedCartItems = cartItems.filter((item) => item.name !== itemName);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems)); // Update localStorage
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
