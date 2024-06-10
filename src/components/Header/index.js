import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import "./styles.css"
import logo from "../../assets/logo/logo1.png"
export default function index() {


  return (
   
    <div className='navbar'>
         <img src={logo} alt="logo" className='navbar-logo' />
         <div className="search-bar">
            <div className="search-bar-text">Anywhere</div>
            <div className="search-bar-text">Any week</div>
            <div className="search-bar-text">Add Guest</div>
        </div>
       {/* <div className="profile-container">
            hello
         </div> */}
    </div>
  )
}
