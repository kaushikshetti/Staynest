import React, { useState } from 'react';
import "./styles.css"
const SearchBar = () => {
  const [searchParams, setSearchParams] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prevParams => ({
      ...prevParams,
      [name]: value
    }));
  };

  const handleSearch = () => {
    console.log('Searching for:', searchParams);
    // Add your search logic here
  };

  return (
    <div className="search-bar-container">
      <input
        name="destination"
        type="text"
        placeholder="Search destinations"
        className="search-input"
        value={searchParams.destination}
        onChange={handleInputChange}
      />
      <input
        name="checkIn"
        type="text"
        placeholder="Check in"
        className="date-input"
        value={searchParams.checkIn}
        onChange={handleInputChange}
      />
      <input
        name="checkOut"
        type="text"
        placeholder="Check out"
        className="date-input"
        value={searchParams.checkOut}
        onChange={handleInputChange}
      />
      <input
        name="guests"
        type="text"
        placeholder="Add guests"
        className="guests-input"
        value={searchParams.guests}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={handleSearch}>
        🔍
      </button>
    </div>
  );
};

export default SearchBar;
