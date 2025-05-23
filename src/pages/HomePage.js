// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// --- Import Modal and Form Components ---
import Modal from '../components/Modal';
import InquiryForm from '../components/InquiryForm';
import NotificationTicker from '../components/NotificationTicker';

// --- Import Social Media Icons ---
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

// --- Import Images for Slideshow ---
import slideImage1 from '../assets/images/campus-slide-1.JPG';
import slideImage2 from '../assets/images/campus-slide-2.JPG';
import slideImage3 from '../assets/images/campus-slide-3.JPG';

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

  useEffect(() => {
    const timer = setInterval(goToNextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const modalTimer = setTimeout(() => {
      openInquiryModal();
    }, 1500);
    return () => clearTimeout(modalTimer);
  }, []);

  const heroSlideshowStyle = {
    backgroundImage: `url(${slideshowImages[currentImageIndex]})`,
  };

  return (
    <div> {/* Outermost div for the HomePage component */}
      <NotificationTicker /> {/* Notification ticker right below the header */}

      {/* --- College Branding Section --- */}
      <div className="college-branding-section">
        <div className="college-branding-content">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '10px' }}>
            <h1 style={{ marginRight: '10px' }}>UDAY PRATAP COLLEGE, VARANASI</h1>
            <h2>उदय प्रताप महाविद्यालय, वाराणसी</h2>
          </div>
          <p style={{ marginBottom: '15px' }}>(Affiliated to Mahatma Gandhi Kashi Vidyapith, Varanasi)</p>
          {/* Social Media Links with Icons */}
          <div className="college-social-media-links">
            <a href="https://facebook.com/yourcollegepage" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://twitter.com/yourcollegehandle" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://instagram.com/yourcollegehandle" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://linkedin.com/school/yourcollegepage" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://youtube.com/yourcollegechannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* --- Single Full-Width Hero Slideshow Section --- */}
      <div
        className="hero-slideshow-full"
        style={heroSlideshowStyle}
      >
        {/* College Name Overlay on the slideshow - REMOVED / COMMENTED OUT */}
        {/*
        <div className="slideshow-college-name">
          Uday Pratap Mahavidyalay
        </div>
        */}

        {/* Slideshow Arrow Buttons */}
        <button
          className="slideshow-arrow prev"
          onClick={goToPreviousSlide}
          aria-label="Previous slide"
        >
          ❮ {/* Left arrow HTML entity */}
        </button>
        <button
          className="slideshow-arrow next"
          onClick={goToNextSlide}
          aria-label="Next slide"
        >
          ❯ {/* Right arrow HTML entity */}
        </button>
      </div> {/* End of hero-slideshow-full */}

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
