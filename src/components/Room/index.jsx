import React, { useState } from 'react';
import "./styles.css"
function Room() {
  // Initial room data
  const initialRooms = [
    { id: 1, name: "Cozy Cottage", guests: 2 },
    { id: 2, name: "Luxury Villa", guests: 4 },
    { id: 3, name: "Modern Apartment", guests: 2 },
    { id: 4, name: "Beach House", guests: 6 }
  ];

  const [rooms] = useState(initialRooms);
  const [guestFilter, setGuestFilter] = useState(0);

  const handleGuestFilterChange = (e) => {
    setGuestFilter(parseInt(e.target.value));
  };

  const filteredRooms = guestFilter > 0 
    ? rooms.filter(room => room.guests >= guestFilter) 
    : rooms;

  return (
    <div className="App">
      <header className="App-header">
        <h1></h1>
        <h1 className="text-3xl font-bold underline">
      Available Rooms
    </h1>
        <label>
          Minimum Guests:
          <select value={guestFilter} onChange={handleGuestFilterChange}>
            <option value={0}>All</option>
            <option value={2}>2+</option>
            <option value={4}>4+</option>
            <option value={6}>6+</option>
          </select>
        </label>
        <ul>
          {filteredRooms.map(room => (
            <li key={room.id}>{room.name} - Sleeps {room.guests}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default Room;
