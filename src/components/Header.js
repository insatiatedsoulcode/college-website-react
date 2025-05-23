// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import collegeLogo from '../assets/images/logo.png'; // Adjust path to your actual logo

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Optional: Close mobile menu if window is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // Matches your CSS breakpoint
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when a NavLink is clicked
  const closeMenuAndNavigate = () => {
    setIsMobileMenuOpen(false);
    // Navigation will be handled by NavLink's 'to' prop
  };

  return (
    <header>
      <div className="container">
        <div className="logo-container">
          <Link to="/">
            <img src={collegeLogo} alt="Uday Pratap College Logo" className="header-logo" />
          </Link>
        </div>
        <nav>
          {/* Hamburger Menu Button - visible only on mobile via CSS */}
          <button
            className="hamburger-menu"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            &#9776; {/* Hamburger icon (☰) */}
          </button>

          {/* Navigation Links */}
          {/* The 'mobile-nav-open' class is toggled by isMobileMenuOpen state */}
          <ul className={isMobileMenuOpen ? 'mobile-nav-open' : ''}>
            <li><NavLink to="/" end onClick={closeMenuAndNavigate} className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenuAndNavigate} className={({ isActive }) => isActive ? "active" : ""}>About Us</NavLink></li>
            <li><NavLink to="/academics" onClick={closeMenuAndNavigate} className={({ isActive }) => isActive ? "active" : ""}>Academics</NavLink></li>
            <li><NavLink to="/admissions" onClick={closeMenuAndNavigate} className={({ isActive }) => isActive ? "active" : ""}>Admissions</NavLink></li>
            <li><NavLink to="/student-life" onClick={closeMenuAndNavigate} className={({ isActive }) => isActive ? "active" : ""}>Student Life</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenuAndNavigate} className={({ isActive }) => isActive ? "active" : ""}>Contact Us</NavLink></li>
          </ul>
        </nav>
        {/* Apply Now Button */}
        {/* Consider how this button behaves on mobile. It might need to be part of the mobile menu or styled differently. */}
        <Link to="/admissions#apply-now" className="cta-btn">Apply Now</Link> {/* Example link for Apply Now */}
      </div>
    </header>
  );
}

export default Header;
