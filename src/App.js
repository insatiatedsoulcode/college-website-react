// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Import page components (ensure paths match your file structure)
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AcademicsPage from './pages/AcademicsPage';    // New/Renamed
import AdmissionsPage from './pages/AdmissionsPage'; // New/Renamed
import StudentLifePage from './pages/StudentLifePage'; // New/Renamed
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

import './style.css'; // Import global styles

// Layout Component (remains the same)
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
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Update routes for the college structure */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="academics" element={<AcademicsPage />} />   {/* New */}
          <Route path="admissions" element={<AdmissionsPage />} /> {/* New */}
          <Route path="student-life" element={<StudentLifePage />} />{/* New */}
          <Route path="contact" element={<ContactPage />} />

          {/* Optional: Catch-all 404 route inside layout */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        {/* Optional: Route for 404 page without the main layout */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}

      </Routes>
    </Router>
  );
}

export default App;