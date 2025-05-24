// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

// Import Layout Components
import Header from './components/Header'; // Your main site header
import Footer from './components/Footer'; // Your main site footer

// Import Page Components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AcademicsPage from './pages/AcademicsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import StudentLifePage from './pages/StudentLifePage';
import ContactPage from './pages/ContactPage';
import ComputerSciencePage from './pages/ComputerSciencePage'; // Department Page
import ArtsHumanitiesPage from './pages/ArtsHumanitiesPage';   // Department Page
import BusinessAdminPage from './pages/BusinessAdminPage';     // Department Page
import NotFoundPage from './pages/NotFoundPage'; // Your 404 page

// Optional: Import your global CSS if not already imported in index.js
import './style.css'; // Assuming your global styles are here

// Layout Component: Defines the common structure for pages (Header, Footer)
// The <Outlet /> component renders the matched child route's element.
function Layout() {
  return (
    <>
      <Header />
      <main>
        {/*
          The class "container" here is from your style.css.
          If you want some sections (like the hero on HomePage) to be full-width
          and break out of this container's padding, those sections will need
          specific CSS (like negative margins) or their parent (HomePage's root div)
          should not be constrained by this .container if the Layout's main already is.

          For simplicity, if most pages need a constrained width, this is okay.
          Full-width sections within HomePage would then need to be handled carefully.
          Alternatively, remove className="container" from main's div here,
          and add <div className="container"> inside each page component that needs it.
        */}
        <div className="container"> {/* This container might add padding to all pages */}
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router> {/* BrowserRouter provides the routing context */}
      <Routes>
        {/*
          This structure uses a Layout Route.
          All routes nested within it will render inside the <Layout /> component,
          replacing the <Outlet />.
        */}
        <Route path="/" element={<Layout />}>
          {/* When the path is exactly "/", render HomePage */}
          <Route index element={<HomePage />} />

          {/* Other top-level pages */}
          <Route path="about" element={<AboutPage />} />
          <Route path="admissions" element={<AdmissionsPage />} />
          <Route path="student-life" element={<StudentLifePage />} />
          <Route path="contact" element={<ContactPage />} />

          {/* Academics section with nested routes for departments */}
          {/* When the path is "/academics", render AcademicsPage */}
          <Route path="academics" element={<AcademicsPage />} />
          {/* When path is "/academics/computer-science", render ComputerSciencePage */}
          <Route path="academics/computer-science" element={<ComputerSciencePage />} />
          <Route path="academics/arts-humanities" element={<ArtsHumanitiesPage />} />
          <Route path="academics/business-administration" element={<BusinessAdminPage />} />
          {/* Add more department routes here as children of "academics" if desired,
              or keep them at the same level as above if AcademicsPage only lists them.
              The current setup implies AcademicsPage might list departments, and these are
              separate, more specific pages.
          */}

          {/* Catch-all route for any paths not matched above */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
