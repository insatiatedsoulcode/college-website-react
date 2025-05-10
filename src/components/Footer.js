// src/components/Footer.js
import React from 'react';
// Removed import '../style.css' as it's imported globally in App.js

function Footer() {
  const currentYear = new Date().getFullYear(); // Use current year
  const collegeName = "Uday Pratap College"; // Change to your college name
  return (
    <footer>
      <div className="container">
        <p>&copy; {currentYear} {collegeName}. All Rights Reserved.</p>
        {/* Add relevant footer links: Privacy Policy, Contact, Map, etc. */}
      </div>
    </footer>
  );
}

export default Footer;