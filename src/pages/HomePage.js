// src/pages/HomePage.js
import React, { useState, useEffect } from 'react'; // Import useState and useEffect for slideshow
import { Link } from 'react-router-dom'; // Import Link for CTAs

// --- 1. Import Images ---
// Replace with your actual image filenames
// Slideshow images for the left column
import slideImage1 from '../assets/images/campus-slide-1.JPG'; // Example
import slideImage2 from '../assets/images/campus-slide-2.JPG'; // Example
import slideImage3 from '../assets/images/campus-slide-3.JPG'; // Example
// Images for the right column
import insetImage1 from '../assets/images/inset-image-1.jpg'; // Example
import insetImage2 from '../assets/images/inset-image-2.jpg'; // Example
import founderImage from '../assets/images/founder-portrait.jpg'; // Example

// --- Array of slideshow images ---
const slideshowImages = [
  slideImage1,
  slideImage2,
  slideImage3,
  // Add more imported images here
];

function HomePage() {
  // --- State for Slideshow ---
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // --- Effect for Slideshow Timer ---
  useEffect(() => {
    // Set an interval to change the image index
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        // Loop back to 0 if at the end, otherwise go to next image
        prevIndex === slideshowImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds - adjust as needed

    // Cleanup function: clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this effect runs only once on mount

  // --- Dynamic style for the left column background ---
  const leftColumnStyle = {
    // Use the image from the array based on the current index
    backgroundImage: `url(${slideshowImages[currentImageIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '500px', // Adjusted height
    // Transition will be handled by CSS class
  };

  return (
    <div>
      {/* --- Hero Section (Two-Column Split) --- */}
      <div className="hero-section-split">

        {/* Left Column (Slideshow Background) */}
        <div
          className="hero-left-column hero-slideshow" // Added hero-slideshow class
          style={leftColumnStyle}
         >
          {/* Optional Overlay Content can go here */}
        </div>

        {/* Right Column (Content Area) */}
        <div className="hero-right-column">
           <div className="hero-inset-images">
              {/* Make sure these images exist and are imported */}
              <img src={insetImage1} alt="Campus detail 1" />
              <img src={founderImage} alt="Founder Portrait" className="founder-image"/>
              <img src={insetImage2} alt="Campus detail 2" />
           </div>
           <div className="hero-quote-section">
              <blockquote>
                {/* Replace with your college's relevant quote */}
                "Our country will prosper when our children along with mother's milk acquire in their hearts patriotism, love for motherland, love for Bharat"
              </blockquote>
              {/* Replace with the correct attribution */}
              <cite>– Mahamana Pt. Madan Mohan Malviya</cite>
           </div>
            {/* Optional Buttons */}
            <div className="hero-buttons">
                <Link to="/admissions" className="cta-btn hero-cta">Apply Now</Link>
                <Link to="/academics" className="cta-btn-secondary hero-cta">Explore Programs</Link>
            </div>
        </div>

      </div> {/* End of hero-section-split */}

      {/* --- Other Homepage Content --- */}
      {/* Use the .container class here for padding */}
      <div className="container" style={{ padding: '40px 20px' }}>
          <h2>Welcome to Uday Pratap College!</h2>
          {/* Use the text you provided */}
          <p>
            Welcome to Uday Pratap College! Our journey began in 2018, evolving from a small kindergarten into the full-fledged degree college we are today. We are proudly dedicated to serving the higher education needs of the younger generation, empowering them to achieve their academic and professional goals. Our commitment is to provide quality learning experiences that foster growth and prepare students for the future.
          </p>
          <p>
            At Uday Pratap College, explore a diverse range of undergraduate programs designed for today's world. We offer the Bachelor of Business Administration (BBA), Bachelor of Computer Applications (BCA), and a versatile Bachelor of Arts (BA) degree. BA specializations include sought-after fields like English, Political Science, Home Science, Hindi, and Economics. Discover your potential within our supportive academic community. Explore our courses and begin your journey with us!
          </p>
          <hr style={{margin: '30px 0'}} />
          {/* Link to key areas */}
          <p style={{ textAlign: 'center' }}> {/* Center links */}
            <Link to="/academics" style={{margin: '0 10px'}}>Explore Academics</Link> |
            <Link to="/admissions" style={{margin: '0 10px'}}>Admission Info</Link> |
            <Link to="/student-life" style={{margin: '0 10px'}}>Student Life</Link>
          </p>
      </div>

    </div>
  );
}

export default HomePage;
