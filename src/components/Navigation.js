// src/components/Navigation.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  // Helper function to apply the active class
  const getNavLinkClass = ({ isActive }) => {
    return isActive ? 'active' : undefined; // Returns 'active' string if true, otherwise nothing
  };

  return (
    <nav>
      <ul>
        {/* Update NavLink text and 'to' props */}
        <li><NavLink to="/" className={getNavLinkClass} end>Home</NavLink></li>
        <li><NavLink to="/about" className={getNavLinkClass}>About Us</NavLink></li>
        <li><NavLink to="/academics" className={getNavLinkClass}>Academics</NavLink></li>
        <li><NavLink to="/admissions" className={getNavLinkClass}>Admissions</NavLink></li>
        <li><NavLink to="/student-life" className={getNavLinkClass}>Student Life</NavLink></li>
        <li><NavLink to="/contact" className={getNavLinkClass}>Contact Us</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;