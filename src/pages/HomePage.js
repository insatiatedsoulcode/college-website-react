// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// --- Import Modal and Form Components ---
import Modal from '../components/Modal'; // Adjust path if your components folder is elsewhere
import InquiryForm from '../components/InquiryForm'; // Adjust path
import NotificationTicker from '../components/NotificationTicker'; // Corrected path

// --- Import Images ---
import slideImage1 from '../assets/images/campus-slide-1.JPG';
import slideImage2 from '../assets/images/campus-slide-2.JPG';
import slideImage3 from '../assets/images/campus-slide-3.JPG';
import insetImage1 from '../assets/images/inset-image-1.jpg';
import insetImage2 from '../assets/images/inset-image-2.jpg';
import founderImage from '../assets/images/founder-portrait.jpg';

const slideshowImages = [
  slideImage1,
  slideImage2,
  slideImage3,
];

function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openInquiryModal = () => {
    setIsModalOpen(true);
    document.body.classList.add('modal-open-react');
  };

  const closeInquiryModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove('modal-open-react');
  };

  // --- Functions to handle slideshow navigation ---
  const goToPreviousSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? slideshowImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === slideshowImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  // --- End of slideshow navigation functions ---


  useEffect(() => {
    const timer = setInterval(goToNextSlide, 5000); // Use goToNextSlide for auto-play
    return () => clearInterval(timer);
  }, []); // Removed currentImageIndex from dependencies to prevent timer reset on manual nav

  useEffect(() => {
    const modalTimer = setTimeout(() => {
      openInquiryModal();
    }, 1500);
    return () => clearTimeout(modalTimer);
  }, []);

  const leftColumnStyle = {
    backgroundImage: `url(${slideshowImages[currentImageIndex]})`,
  };

  return (
    <div> {/* Outermost div for the HomePage component */}
      <NotificationTicker /> {/* Notification ticker right below the header */}

      {/* --- College Branding Section (Mimicking the example) --- */}
      <div className="college-branding-section">
        <div className="college-branding-content">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', flexWrap: 'wrap' }}> {/* Wrapper for H1 and H2 */}
            <h1 style={{ marginRight: '10px' }}>UDAY PRATAP COLLEGE, VARANASI</h1>
            <h2>उदय प्रताप महाविद्यालय, वाराणसी</h2>
          </div>
          <p>(Affiliated to Mahatma Gandhi Kashi Vidyapith, Varanasi)</p>
        </div>
      </div>

      {/* --- Hero Section (Two-Column Split) --- */}
      <div className="hero-section-split">
        {/* Left Column (Slideshow Background) */}
        <div
          className="hero-left-column hero-slideshow"
          style={leftColumnStyle}
        >
          {/* College Name Overlay (already present, could be removed if branding section is preferred) */}
          {/* <div className="slideshow-college-name">
            Uday Pratap Mahavidyalay
          </div> */}

          {/* Slideshow Arrow Buttons */}
          <button
            className="slideshow-arrow prev"
            onClick={goToPreviousSlide}
            aria-label="Previous slide"
          >
            &#10094;
          </button>
          <button
            className="slideshow-arrow next"
            onClick={goToNextSlide}
            aria-label="Next slide"
          >
            &#10095;
          </button>
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
                <Link to="/academics" className="cta-btn hero-cta">Explore Programs</Link>
            </div>
        </div>
      </div> {/* End of hero-section-split */}

      {/* --- Other Homepage Content --- */}
      <div style={{ width: '100%', paddingTop: '30px', paddingBottom: '30px' }}>
        <div style={{ paddingLeft: '20px', paddingRight: '20px' }}>
          <h2>Welcome to Uday Pratap College!</h2>
          <p>
            Welcome to Uday Pratap College! Our journey began in 2018, evolving from a small kindergarten into the full-fledged degree college we are today. We are proudly dedicated to serving the higher education needs of the younger generation, empowering them to achieve their academic and professional goals. Our commitment is to provide quality learning experiences that foster growth and prepare students for the future.
          </p>
          <p>
            At Uday Pratap College, explore a diverse range of undergraduate programs designed for today's world. We offer the Bachelor of Business Administration (BBA), Bachelor of Computer Applications (BCA), and a versatile Bachelor of Arts (BA) degree. BA specializations include sought-after fields like English, Political Science, Home Science, Hindi, and Economics. Discover your potential within our supportive academic community. Explore our courses and begin your journey with us!
          </p>
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
      </div> {/* End of "Welcome" section wrapper */}

      {/* --- Render Modal with InquiryForm --- */}
      <Modal isOpen={isModalOpen} onClose={closeInquiryModal}>
          <InquiryForm onSuccess={closeInquiryModal} />
      </Modal>
    </div>
  );
}

export default HomePage;
