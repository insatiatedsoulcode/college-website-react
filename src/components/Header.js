// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
// CORRECT PATH
// Change this:
// import logo from '../assets/images/logo.png';

// To this (adding the 'Images' subfolder):
import logo from '../assets/images/logo.png';// 1. Import the logo (adjust path if needed)

function Header() {
  const collegeName = "Uday Pratap College"; // Keep this for alt text or title

  return (
    <header>
      <div className="container">
        {/* 2. Replace h1 text with the linked logo image */}
        <h1 className="logo-container"> {/* Optional: Add class for styling container if needed */}
          <Link to="/">
            <img src={logo} alt={`${collegeName} Logo`} className="header-logo" /> {/* 3. Add img tag */}
          </Link>
        </h1>
        <Navigation />
        <Link to="/admissions" className="cta-btn">Apply Now</Link>
      </div>
    </header>
  );
}

export default Header;