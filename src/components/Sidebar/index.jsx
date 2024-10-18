import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './styles.css';
import logo from "../../assets/logo/logo1.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="page-container">
      {/* Header Section */}
      <div className="header">
        <FaBars className="menu-icon" onClick={handleSidebarToggle} />
        <img src={logo} alt="logo" className="navbar-logo" />
        <div className="search-bar">
          <div className="search-bar-text">Anywhere</div>
          <div className="search-bar-text">Any week</div>
          <div className="search-bar-text">Add Guest</div>
        </div>
      </div>

      {/* Sidebar Section */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={handleSidebarToggle}>
          {isOpen ? 'Close' : 'Open'} Menu
        </button>
        <ul className="sidebar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className={`content ${isOpen ? 'shrink' : ''}`}>
        {/* Page Content Goes Here */}
      </div>
    </div>
  );
};

export default Sidebar;
