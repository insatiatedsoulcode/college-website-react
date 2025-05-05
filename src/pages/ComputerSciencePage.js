// src/pages/ComputerSciencePage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Optional: For linking within the page

// Optional: Import relevant images if needed
// import csLabImage from '../assets/images/cs-lab.jpg';

function ComputerSciencePage() {
  return (
    <div>
      {/* Department Title */}
      <h2>Department of Computer Science</h2>

      {/* Introductory Paragraph */}
      <p>
        Welcome to the Department of Computer Science at Your College Name! We offer cutting-edge programs and research opportunities in various fields like Artificial Intelligence, Software Engineering, Cybersecurity, Data Science, and more. Our dedicated faculty and state-of-the-art facilities provide students with the skills needed to excel in the rapidly evolving tech industry.
      </p>

      {/* Optional Image */}
      {/*
      <img
        src={csLabImage}
        alt="Computer Science Lab or Students"
        className="page-image" // Use class from style.css
        style={{ marginTop: '15px', marginBottom: '25px' }}
      />
      */}

      <hr />

      {/* Section for Programs Offered */}
      <h3>Programs Offered</h3>
      <ul>
        <li>Bachelor of Computer Applications (BCA)</li>
        <li>Bachelor of Science (B.Sc.) in Computer Science (if applicable)</li>
        <li>Minor in Computer Science</li>
        {/* Add Master's or other programs if available */}
      </ul>
      <p>
        <Link to="/academics/programs">View detailed program structures</Link>
      </p>

      <hr />

      {/* Section for Faculty */}
      <h3>Faculty</h3>
      <p>
        Our faculty members are experts in their fields, actively engaged in research and dedicated to teaching excellence.
        {/* You could list faculty names or link to a faculty directory page */}
        <Link to="/faculty/computer-science"> Meet our faculty</Link>
      </p>

      <hr />

      {/* Section for Resources/Labs */}
      <h3>Resources & Labs</h3>
      <p>
        Students have access to specialized labs, modern software, and computing resources to support their learning and projects.
        {/* List specific labs or resources */}
        <li>High-Performance Computing Lab</li>
        <li>AI & Machine Learning Lab</li>
        <li>Cybersecurity Center</li>
      </p>

      <hr />

      {/* Section for Career Opportunities */}
      <h3>Career Opportunities</h3>
      <p>
        Graduates from our programs are well-prepared for careers as:
      </p>
      <ul>
        <li>Software Developers/Engineers</li>
        <li>Data Scientists/Analysts</li>
        <li>Cybersecurity Analysts</li>
        <li>Web Developers</li>
        <li>System Administrators</li>
        <li>AI/ML Engineers</li>
        <li>Database Administrators</li>
        <li>IT Consultants</li>
      </ul>

      {/* Add more relevant sections: Research, Events, Contact Info for Dept, etc. */}

    </div>
  );
}

// Export the component
export default ComputerSciencePage;
