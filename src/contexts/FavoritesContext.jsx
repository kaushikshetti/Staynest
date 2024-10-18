// FavoritesContext.js
import React, { createContext, useState } from 'react';

// Create a Context
export const FavoritesContext = createContext();

// Create a Provider component
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (rental) => {
    setFavorites([...favorites, rental]);
  };

  const removeFavorite = (rentalId) => {
    setFavorites(favorites.filter(rental => rental.id !== rentalId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
