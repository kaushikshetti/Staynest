// FavoritesList.js
import React, { useContext } from 'react';
import { FavoritesContext } from '../../contexts/FavoritesContext';

const FavoritesList = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h2>Favorite Rentals</h2>
      {favorites.length === 0 ? (
        <p>No favorite rentals.</p>
      ) : (
        <ul>
          {favorites.map(rental => (
            <li key={rental.id}>{rental.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesList;
