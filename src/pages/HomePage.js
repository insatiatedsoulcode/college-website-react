// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// --- Import Modal and Form Components ---
import Modal from '../components/Modal'; // Adjust path if your components folder is elsewhere
import InquiryForm from '../components/InquiryForm'; // Adjust path

// --- Import Images ---
// Slideshow images for the left column
import slideImage1 from '../assets/images/campus-slide-1.JPG';
import slideImage2 from '../assets/images/campus-slide-2.JPG';
import slideImage3 from '../assets/images/campus-slide-3.JPG';
// Images for the right column
import insetImage1 from '../assets/images/inset-image-1.jpg';
import insetImage2 from '../assets/images/inset-image-2.jpg';
import founderImage from '../assets/images/founder-portrait.jpg';

// --- Array of slideshow images ---
const slideshowImages = [
  slideImage1,
  slideImage2,
  slideImage3,
];

function HomePage() {
  // --- State for Slideshow ---
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // --- State for Modal ---
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- Functions to control Modal ---
  const openInquiryModal = () => {
    setIsModalOpen(true);
    // Add class to body to prevent scrolling when modal is open
    // Ensure you have the CSS for 'modal-open-react' in your global CSS (e.g., App.css or index.css)
    // body.modal-open-react { overflow: hidden; }
    document.body.classList.add('modal-open-react');
  };

  const closeInquiryModal = () => {
    setIsModalOpen(false);
    // Remove class from body
    document.body.classList.remove('modal-open-react');
  };

  // --- Effect for Slideshow Timer ---
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === slideshowImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // --- Effect for Modal Pop-up on Load ---
  useEffect(() => {
    // Optional: Check if the modal has been shown before using localStorage
    // const modalShownBefore = localStorage.getItem('inquiryModalShownHomePage');
    // if (!modalShownBefore) {
      const modalTimer = setTimeout(() => {
        openInquiryModal();
        // localStorage.setItem('inquiryModalShownHomePage', 'true');
      }, 1500); // Pop up after 1.5 seconds (adjust as needed)

      return () => clearTimeout(modalTimer); // Cleanup timer on component unmount
    // }
  }, []); // Empty dependency array means this effect runs only once on mount


  // --- Dynamic style for the left column background ---
  const leftColumnStyle = {
    backgroundImage: `url(${slideshowImages[currentImageIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '500px',
  };

  return (
    <div>
      {/* --- Hero Section (Two-Column Split) --- */}
      <div className="hero-section-split">
        {/* Left Column (Slideshow Background) */}
        <div
          className="hero-left-column hero-slideshow"
          style={leftColumnStyle}
         >
          {/* Optional Overlay Content can go here */}
        </div>

        {/* Right Column (Content Area) */}
        <div className="hero-right-column">
           <div className="hero-inset-images">
              <img src={insetImage1} alt="Campus detail 1" />
              <img src={founderImage} alt="Founder Portrait" className="founder-image"/>
              <img src={insetImage2} alt="Campus detail 2" />
           </div>
           <div className="hero-quote-section">
              <blockquote>
                "Our country will prosper when our children along with mother's milk acquire in their hearts patriotism, love for motherland, love for Bharat"
              </blockquote>
              <cite>– Mahamana Pt. Madan Mohan Malviya</cite>
           </div>
            <div className="hero-buttons">
                <Link to="/admissions" className="cta-btn hero-cta">Apply Now</Link>
                <Link to="/academics" className="cta-btn-secondary hero-cta">Explore Programs</Link>
            </div>
        </div>
      </div> {/* End of hero-section-split */}

      {/* --- Other Homepage Content --- */}
      <div className="container" style={{ padding: '40px 20px' }}>
          <h2>Welcome to Uday Pratap College!</h2>
          <p>
            Welcome to Uday Pratap College! Our journey began in 2018, evolving from a small kindergarten into the full-fledged degree college we are today. We are proudly dedicated to serving the higher education needs of the younger generation, empowering them to achieve their academic and professional goals. Our commitment is to provide quality learning experiences that foster growth and prepare students for the future.
          </p>
          <p>
            At Uday Pratap College, explore a diverse range of undergraduate programs designed for today's world. We offer the Bachelor of Business Administration (BBA), Bachelor of Computer Applications (BCA), and a versatile Bachelor of Arts (BA) degree. BA specializations include sought-after fields like English, Political Science, Home Science, Hindi, and Economics. Discover your potential within our supportive academic community. Explore our courses and begin your journey with us!
          </p>
          {/* Button to manually open modal - useful for testing or if user closes it */}
          <div className="text-center my-6">
            <button
                onClick={openInquiryModal}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-150"
            >
                Have Questions? Open Inquiry Form
            </button>
          </div>
          <hr style={{margin: '30px 0'}} />
          <p style={{ textAlign: 'center' }}>
            <Link to="/academics" style={{margin: '0 10px'}}>Explore Academics</Link> |
            <Link to="/admissions" style={{margin: '0 10px'}}>Admission Info</Link> |
            <Link to="/student-life" style={{margin: '0 10px'}}>Student Life</Link>
          </p>
      </div>

      {/* --- Render Modal with InquiryForm --- */}
      <Modal isOpen={isModalOpen} onClose={closeInquiryModal}>
          <InquiryForm onSuccess={closeInquiryModal} />
      </Modal>
    </div>
  );
}

export default HomePage;
