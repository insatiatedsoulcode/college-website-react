// src/pages/AcademicsPage.js
import React from 'react';
import { Link } from 'react-router-dom';

// 1. Import LARGER images for each department (use actual filenames)
//    These should be suitable for card backgrounds or main visuals.
import compSciImage from '../assets/images/1.JPG'; // Example placeholder - needs larger image
import artsImage from '../assets/images/2.JPG'; // Example placeholder - needs larger image
import businessImage from '../assets/images/3.JPG'; // Example placeholder - needs larger image
// Import other images as needed

function AcademicsPage() {
  // Array of department data for easier mapping
  const departments = [
    {
      name: 'Department of Computer Science',
      link: '/academics/computer-science',
      image: compSciImage,
      altText: 'Computer Science graphic',
      description: 'Explore software, AI, data science, and cybersecurity.',
    },
    {
      name: 'Department of Arts & Humanities',
      link: '/academics/arts-humanities',
      image: artsImage,
      altText: 'Arts and Humanities graphic',
      description: 'Delve into literature, history, philosophy, and languages.',
    },
    {
      name: 'Department of Business Administration',
      link: '/academics/business-administration',
      image: businessImage,
      altText: 'Business Administration graphic',
      description: 'Focus on management, marketing, finance, and entrepreneurship.',
    },
    // Add more department objects here
    // {
    //   name: 'Department of Economics',
    //   link: '/academics/economics',
    //   image: economicsImage, // Make sure to import economicsImage
    //   altText: 'Economics graphic',
    //   description: 'Analyze markets, policy, and financial systems.',
    // },
  ];

  return (
    <div>
      <h2>Academics & Programs</h2>
      <p>Discover the wide range of programs and departments available at Your College Name.</p>

      <hr style={{ margin: '20px 0' }} />

      <h3>Explore Our Departments</h3>

      {/* 2. Use a container div for the grid */}
      <div className="department-card-grid">

        {/* 3. Map over the departments array to create cards */}
        {departments.map((dept) => (
          // Use Link to make the whole card clickable (optional)
          // Or just have the title linkable as below
          <div key={dept.name} className="department-card">
            <img src={dept.image} alt={dept.altText} className="department-card-image" />
            <div className="department-card-content">
              <h4 className="department-card-title">
                {/* Link the title */}
                <Link to={dept.link}>{dept.name}</Link>
              </h4>
              <p className="department-card-description">
                {dept.description}
              </p>
              {/* Optional: Add a button/link within the card */}
              {/* <Link to={dept.link} className="department-card-button">Learn More</Link> */}
            </div>
          </div>
        ))}

      </div> {/* End of department-card-grid */}

      <hr style={{ margin: '30px 0' }} />

      {/* Optional: Add links to other relevant academic info */}
      <h3>More Information</h3>
      <ul>
        <li><Link to="/academics/programs">View All Degree Programs</Link></li>
        <li><Link to="/academics/course-catalog">Course Catalog</Link></li>
        <li><Link to="/academics/research">Research Opportunities</Link></li>
      </ul>

    </div>
  );
}

export default AcademicsPage;
