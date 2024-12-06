import React, { useState, useEffect } from "react";
import "./styles.css";

const SearchBar = () => {
  const [searchParams, setSearchParams] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    guests: "",
  });

  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  // Fetch all countries on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data.map((country) => country.name.common));
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));

    // If editing the destination, filter countries for dropdown
    if (name === "destination") {
      const filtered = countries.filter((country) =>
        country.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCountries(filtered);
    }
  };

  const handleSearch = () => {
    console.log("Searching for:", searchParams);
    // Add your search logic here
  };

  const handleCountrySelect = (country) => {
    setSearchParams((prevParams) => ({
      ...prevParams,
      destination: country,
    }));
    setFilteredCountries([]); // Clear the dropdown
  };

  return (
    <div className="search-bar-container">
      <div style={{ position: "relative", width: "100%" }}>
        <input
          name="destination"
          type="text"
          placeholder="Search destinations"
          className="search-input"
          value={searchParams.destination}
          onChange={handleInputChange}
        />
        {filteredCountries.length > 0 && (
          <ul className="dropdown">
            {filteredCountries.map((country, index) => (
              <li
                key={index}
                onClick={() => handleCountrySelect(country)}
                className="dropdown-item"
              >
                {country}
              </li>
            ))}
          </ul>
        )}
      </div>
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
