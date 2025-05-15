// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// import ChatbotLauncher from './components/ChatbotLauncher'; // 1. Removed chatbot import

// Import page components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AcademicsPage from './pages/AcademicsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import StudentLifePage from './pages/StudentLifePage';
import ContactPage from './pages/ContactPage';
import ComputerSciencePage from './pages/ComputerSciencePage';
import NotFoundPage from './pages/NotFoundPage'; // Assuming you have this
import ArtsHumanitiesPage from './pages/ArtsHumanitiesPage';

import './style.css';

// Layout Component (remains the same, but without chatbot)
function Layout() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
      {/* <ChatbotLauncher /> */} {/* 2. Removed chatbot component instance */}
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="academics" element={<AcademicsPage />} />
          <Route path="academics/computer-science" element={<ComputerSciencePage />} />
          <Route path="/academics/arts-humanities" element={<ArtsHumanitiesPage />} />
          {/* Add routes for other departments similarly */}
          {/* <Route path="academics/arts-humanities" element={<ArtsPage />} /> */}
          {/* <Route path="academics/business-administration" element={<BusinessPage />} /> */}

          <Route path="admissions" element={<AdmissionsPage />} />
          <Route path="student-life" element={<StudentLifePage />} />
          <Route path="contact" element={<ContactPage />} />

          {/* Catch-all 404 route */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;