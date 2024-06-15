// RentalCard.js
import React, { useContext } from 'react';
import { FavoritesContext } from '../../contexts/FavoritesContext';

const RentalCard = ({ rental }) => {
  const { addFavorite, removeFavorite, favorites } = useContext(FavoritesContext);

  const isFavorite = favorites.some(fav => fav.id === rental.id);

  return (
    <div>
      <h2>{rental.name}</h2>
      <p>{rental.description}</p>
      <button onClick={() => isFavorite ? removeFavorite(rental.id) : addFavorite(rental)}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default RentalCard;
