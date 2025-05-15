// src/pages/ArtsHumanitiesPage.js
import React from 'react';
import { Link } from 'react-router-dom';
// Ensure this path is correct and the image exists.
// If you created an SVG, it might be 'arts-banner.svg'
import artsDeptBanner from '../assets/images/arts-banner.jpg';

function ArtsHumanitiesPage() {
  return (
    // Outermost container for the page
    <div
      className="department-page"
      style={{
        display: 'flex',         // Use flexbox to arrange children
        flexDirection: 'column', // Stack children vertically (banner on top, text below)
        // Set a minimum height for the page content area.
        // '100vh' would try to make it full viewport height.
        // If you have a global header/footer, you might need to calculate this
        // e.g., minHeight: 'calc(100vh - HeaderHeight - FooterHeight)'
        // For simplicity here, let's make it take up a significant portion of the viewport.
        // Adjust this value as needed for your overall layout.
        minHeight: '85vh', // Example: makes this component try to fill 85% of viewport height
        width: '100%',     // Take full available width from its parent
      }}
    >
      {/* 1. Department Banner/Header Image */}
      <img
        src={artsDeptBanner}
        alt="Department of Arts & Humanities Banner"
        style={{
          width: '100%',       // Banner takes full width of its container
          maxHeight: '300px',  // Max height for the banner, as in your original code
          objectFit: 'fill',   // Stretches image to fill, as in your original code
          flexShrink: 0        // Prevents the banner from shrinking if space is limited
        }}
      />

      {/* Div containing the textual content */}
      <div
        style={{
          padding: '20px',     // Existing padding for inner content
          flexGrow: 1,         // This div will grow to fill available vertical space after the banner
          overflowY: 'auto',   // Adds a vertical scrollbar if content exceeds the div's height
          // Optional: Set a background color if needed for text readability,
          // especially if the parent container or body has a different background.
          // backgroundColor: '#ffffff', // Example: white background
          boxSizing: 'border-box' // Ensures padding is included within the width/height
        }}
      >
        <h2>Department of Arts & Humanities</h2>
        <p>
          Welcome to the Department of Arts & Humanities. Our department offers a vibrant exploration into the realms of
          literature, history, philosophy, languages, visual arts, performing arts, and more. We are dedicated to
          fostering critical thinking, creativity, and a deep understanding of human culture and expression.
        </p>

        <hr style={{ margin: '20px 0' }} />

        <h3>Our Programs</h3>
        {/* 2. List some programs or link to a detailed program page */}
        <ul>
          <li>Bachelor of Arts in English Literature</li>
          <li>Bachelor of Arts in History</li>
          <li>Bachelor of Arts in Philosophy</li>
          <li>Minor in Creative Writing</li>
          <li>Minor in Art History</li>
          {/* Add more programs as needed */}
        </ul>

        <hr style={{ margin: '20px 0' }} />

        <h3>Faculty Highlights</h3>
        {/* 3. Placeholder for faculty information */}
        <p>
          Our distinguished faculty members are experts in their fields, actively engaged in research and passionate
          about teaching. (Content about faculty can be added here).
        </p>

        <hr style={{ margin: '3px 0' }} /> {/* Your original smaller margin hr */}

        <h3>Why Study Arts & Humanities?</h3>
        <p>
          Studying Arts & Humanities equips you with versatile skills such as analytical reasoning, effective
          communication, cultural awareness, and problem-solving – qualities highly valued in a diverse range of
          professions.
        </p>

        {/* 4. Link back to the main academics page */}
        <Link to="/academics" style={{ display: 'inline-block', marginTop: '20px', textDecoration: 'underline' }}>
          &larr; Back to All Departments
        </Link>
      </div>
    </div>
  );
}

export default ArtsHumanitiesPage;
