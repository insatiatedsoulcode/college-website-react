// src/pages/AboutPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Keep the imported images
import img1 from '../assets/images/1.JPG';
import img2 from '../assets/images/CDKJ9333.JPG';
import img3 from '../assets/images/check.jpg';
import img4 from '../assets/images/CIKY9429.JPG';
import img5 from '../assets/images/dept-arts-card.JPG';
import img6 from '../assets/images/dept-business-card.JPG';
import img7 from '../assets/images/dept-cs-card.JPG';
import img8 from '../assets/images/DHUF9053.JPG';
import img9 from '../assets/images/DXKP5903.JPG';
import img10 from '../assets/images/EBJV1548.JPG';

const slideshowImages = [
  { id: 1, src: img1, alt: 'Campus event' },
  { id: 2, src: img2, alt: 'CDKJ9333' },
  { id: 3, src: img3, alt: 'Check image' },
  { id: 4, src: img4, alt: 'CIKY9429' },
  { id: 5, src: img5, alt: 'Arts department card image' },
  { id: 6, src: img6, alt: 'Business department card image' },
  { id: 7, src: img7, alt: 'Computer Science department card image' },
  { id: 8, src: img8, alt: 'DHUF9053' },
  { id: 9, src: img9, alt: 'DXKP5903' },
  { id: 10, src: img10, alt: 'EBJV1548' },
];

function AboutPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === slideshowImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    // Main page div - Note: the .container class is now applied *inside*
    <div>
      {/* Heading remains within the overall page flow */}
      {/* We apply container padding manually if needed, or rely on main .container padding */}
      <div className="container" style={{ paddingBottom: '0' }}> {/* Use container for heading padding */}
         <h2>About Your College Name</h2>
      </div>

      {/* Slideshow Container - Placed OUTSIDE the inner .container for full width */}
      <div className="about-slideshow-container">
        <img
            key={slideshowImages[currentImageIndex].id}
            src={slideshowImages[currentImageIndex].src}
            alt={slideshowImages[currentImageIndex].alt}
            className="about-slideshow-image"
        />
      </div>

      {/* Wrap the rest of the content in a container for padding */}
      <div className="container" style={{ paddingTop: '25px' }}> {/* Add padding above content */}
        <p style={{ fontStyle: 'italic', marginBottom: '20px' }}>
          Welcome to Your College Name, where tradition meets innovation to shape future leaders.
        </p>

        <h3>Our Mission & Vision</h3>
        <p>
          Our mission is to provide accessible, high-quality education that empowers students... Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p>
          Our vision is to be a leading institution recognized for academic excellence, innovation, and community impact... Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <hr style={{margin: '20px 0'}} />

        <h3>Our History</h3>
        <p>
          Founded in [Year], Your College Name has grown from humble beginnings into... Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <hr style={{margin: '20px 0'}} />

        <h3>Leadership</h3>
        <p>
          Our college is led by a dedicated team committed to student success and institutional growth. Learn more about our President, Deans, and Board of Trustees.
        </p>

        <hr style={{margin: '20px 0'}} />

        <h3>Accreditation</h3>
        <p>
          Your College Name is proudly accredited by [Name of Accrediting Body], ensuring our programs meet rigorous standards of quality.
        </p>
      </div> {/* End of inner container */}

    </div> // End of main page div
  );
}

export default AboutPage;
