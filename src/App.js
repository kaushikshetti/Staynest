import React from 'react';
import Header from "./components/Header";
import SearchBar from './components/SearchBar';
import Visits from './components/Visits';
import Room from './components/Room';
import RentalCard from './components/Rental/RentalCard';
import Sidebar from './components/Sidebar';
import FavoritesList from './components/Rental/FavoritesList';
const rentals = [
  { id: 1, name: 'Beach House', description: 'A nice beach house.' },
  { id: 2, name: 'Mountain Cabin', description: 'A cozy mountain cabin.' },
];

function App() {
  return (
    <div className="App">
      <Sidebar />
      {/* <Header /> */}
      <SearchBar />
      <Visits />
      <Room />
      <div>
        <h1>Rental Properties</h1>
        {rentals.map(rental => (
          <RentalCard key={rental.id} rental={rental} />
        ))}
        <FavoritesList />
      </div>
    </div>
  );
}

export default App;