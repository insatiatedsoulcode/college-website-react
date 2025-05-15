// src/pages/ArtsHumanitiesPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import artsDeptBanner from '../assets/images/arts-banner.jpg'; // 1. IMPORT A SUITABLE BANNER/MAIN IMAGE for this page
                                                              //    (replace with your actual image file)

function ArtsHumanitiesPage() {
  return (
    <div className="department-page">
      {/* 1. Department Banner/Header Image */}
      <img src={artsDeptBanner} alt="Department of Arts & Humanities Banner" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />

      <div style={{ padding: '20px' }}>
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

        <hr style={{ margin: '20px 0' }} />

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