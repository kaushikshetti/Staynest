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
    <></>
  );
};

export default Sidebar;
