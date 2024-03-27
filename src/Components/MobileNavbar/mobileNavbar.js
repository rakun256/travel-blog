// MobileNavbar.js
import React, { useState } from "react";
import "./mobileNavbar.css";
import Overlay from "../Overlay/overlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mobile-navbar">
      <div className="mobile-navbar-container">
        <div className="mobile-navbar-logo">
          <img alt="logo" src="/Images/adv_logo.png" />
        </div>
        <Overlay isOpen={isOpen} toggleMenu={toggleMenu} />
        <div className={`mobile-navbar-menu ${isOpen ? "active" : ""}`}>
          <ul className="mobile-navbar-list">
            <li className="mobile-navbar-item">
            <Link to="/">Home</Link>
            </li>
            <li className="mobile-navbar-item">
            <Link to="/about">About</Link>
            </li>
            <li className="mobile-navbar-item">
            <Link to="/blog">Blog</Link>
            </li>
            <li className="mobile-navbar-item">
            <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="mobile-navbar-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;