// src/pages/BusinessAdminPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function BusinessAdminPage() {
  return (
    <div className="department-page" style={{ padding: '20px' }}>
      {/* Page Title */}
      <h2>Department of Business Administration</h2>

      {/* Introductory paragraph */}
      <p>
        Welcome to the Department of Business Administration. Our programs are designed to equip students
        with the essential knowledge and skills to excel in the dynamic world of business. We focus on
        developing strong leaders, innovative thinkers, and ethical professionals who can make a significant
        impact in various industries.
      </p>

      <hr style={{ margin: '20px 0' }} />

      {/* Section for Core Areas of Study */}
      <h3>Core Areas of Study</h3>
      <p>
        Our curriculum covers a comprehensive range of business disciplines, ensuring a well-rounded education:
      </p>
      <ul>
        <li>Management Principles and Organizational Behavior</li>
        <li>Strategic Marketing and Digital Outreach</li>
        <li>Financial Accounting, Reporting, and Corporate Finance</li>
        <li>Human Resource Management and Talent Development</li>
        <li>Operations Management and Global Supply Chain Logistics</li>
        <li>Entrepreneurship, Innovation, and New Venture Creation</li>
        <li>Business Law, Corporate Governance, and Ethical Decision-Making</li>
        <li>International Business and Global Market Strategies</li>
        <li>Data Analytics and Business Intelligence</li>
      </ul>

      <hr style={{ margin: '20px 0' }} />

      {/* Section for Program Offerings */}
      <h3>Program Offerings</h3>
      <p>We offer a variety of programs tailored to different career aspirations:</p>
      <ul>
        <li>Bachelor of Business Administration (BBA) - General Track</li>
        <li>BBA with a Major in Marketing</li>
        <li>BBA with a Major in Finance</li>
        <li>BBA with a Major in Human Resources</li>
        <li>Master of Business Administration (MBA) - Executive Program</li>
        <li>MBA with Specialization in International Business</li>
        <li>Minor in Business Analytics for non-business majors</li>
        <li>Certificate in Project Management</li>
        {/* Add more specific programs as needed */}
      </ul>

      <hr style={{ margin: '20px 0' }} />

      {/* Section for Faculty */}
      <h3>Our Esteemed Faculty</h3>
      <p>
        The Department of Business Administration boasts a diverse and experienced faculty. Our professors are
        not only accomplished scholars with significant research contributions but also seasoned industry
        professionals who bring real-world insights into the classroom. They are committed to student success
        through mentorship and engaging teaching methodologies.
      </p>

      <hr style={{ margin: '20px 0' }} />

      {/* Section for Career Opportunities */}
      <h3>Career Opportunities</h3>
      <p>
        Graduates from our Business Administration programs are well-prepared for a wide array of rewarding
        career paths across various sectors, including:
      </p>
      <ul>
        <li>Management and Leadership Roles (e.g., Project Manager, Operations Manager)</li>
        <li>Business Consulting and Analysis (e.g., Management Consultant, Business Analyst)</li>
        <li>Financial Services (e.g., Financial Analyst, Investment Banker, Portfolio Manager)</li>
        <li>Marketing and Sales (e.g., Marketing Manager, Brand Manager, Sales Director)</li>
        <li>Human Resources (e.g., HR Manager, Talent Acquisition Specialist)</li>
        <li>Entrepreneurship (Founding and managing their own businesses)</li>
      </ul>

      <hr style={{ margin: '20px 0' }} />

      {/* Link back to the main academics page */}
      <Link to="/academics" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
        &larr; Back to All Departments
      </Link>
    </div>
  );
}

// Default export of the component
export default BusinessAdminPage;
