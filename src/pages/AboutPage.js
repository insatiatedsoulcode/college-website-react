// src/pages/AboutPage.js
import React from 'react';

// Optional: Import an image if you have one for this page
// import campusImage from '../assets/images/campus-main-building.jpg';

function AboutPage() {
  return (
    <div>
      <h2>About Your College Name</h2>

      <p style={{ fontStyle: 'italic', marginBottom: '20px' }}>
        {/* Add a brief introductory sentence or tagline here */}
        Welcome to Your College Name, where tradition meets innovation to shape future leaders.
      </p>

      {/* Optional: Add an image */}
      {/*
      <img
        src={campusImage}
        alt="Main building of Your College Name campus"
        className="page-image" // Use a class defined in your style.css
        style={{ marginBottom: '20px' }} // Add some space below image
      />
      */}

      <h3>Our Mission & Vision</h3>
      <p>
        {/* Add your college's mission statement here. */}
        Our mission is to provide accessible, high-quality education that empowers students... Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p>
        {/* Add your college's vision statement here. */}
        Our vision is to be a leading institution recognized for academic excellence, innovation, and community impact... Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <hr style={{margin: '20px 0'}} />

      <h3>Our History</h3>
      <p>
        {/* Add a brief history of the college. */}
        Founded in [Year], Your College Name has grown from humble beginnings into... Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <hr style={{margin: '20px 0'}} />

      <h3>Leadership</h3>
      <p>
        {/* Briefly mention leadership or link to a leadership page. */}
        Our college is led by a dedicated team committed to student success and institutional growth. Learn more about our President, Deans, and Board of Trustees.
      </p>

      <hr style={{margin: '20px 0'}} />

      <h3>Accreditation</h3>
      <p>
        {/* Mention accreditation status and bodies. */}
        Your College Name is proudly accredited by [Name of Accrediting Body], ensuring our programs meet rigorous standards of quality.
      </p>

      {/* Add more sections if needed: Values, Campus Info, etc. */}

    </div>
  );
}

// Make sure the component is exported
export default AboutPage;