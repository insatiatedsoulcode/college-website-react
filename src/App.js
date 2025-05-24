// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

// Import Layout Components
import Header from './components/Header'; // Your main site header
import Footer from './components/Footer'; // Your main site footer

// Import Page Components
// IMPORTANT: Ensure each of these page components is correctly defined,
// uses a default export (e.g., "export default HomePage;"),
// and the import path here is correct.
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
// The <Outlet /> component from react-router-dom is a placeholder where
// the content of the matched child route will be rendered.
function Layout() {
  return (
    <>
      <Header />
      <main>
        {/*
          The className="container" here applies padding based on your style.css.
          If you want specific sections (like a hero banner on HomePage) to be
          full-width (edge-to-edge), that section within its page component
          would need CSS to "break out" of this container's padding (e.g., using
          negative margins), or this div className="container" could be removed,
          and each page component would manage its own main content container and padding.
        */}
        <div className="container"> {/* This container applies padding to all pages rendered via Outlet */}
          <Outlet /> {/* Child route components will be rendered here */}
        </div>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    // BrowserRouter (aliased as Router) provides the routing context for your application.
    // It uses the HTML5 history API to keep your UI in sync with the URL.
    <Router>
      <Routes>
        {/*
          This is a Layout Route. The `Layout` component is rendered for the path "/".
          All child routes defined within it will also render inside the `Layout` component,
          specifically where the <Outlet /> is placed in the Layout.
        */}
        <Route path="/" element={<Layout />}>
          {/*
            The `index` route is the default child route for its parent.
            When the URL is exactly "/", the HomePage component will be rendered
            inside the Layout's <Outlet />.
          */}
          <Route index element={<HomePage />} />

          {/* Other top-level pages. These paths are relative to the parent "/" route. */}
          {/* e.g., "/about" will render AboutPage inside Layout's <Outlet /> */}
          <Route path="about" element={<AboutPage />} />
          <Route path="admissions" element={<AdmissionsPage />} />
          <Route path="student-life" element={<StudentLifePage />} />
          <Route path="contact" element={<ContactPage />} />

          {/*
            Academics section.
            "/academics" will render AcademicsPage inside Layout's <Outlet />.
          */}
          <Route path="academics" element={<AcademicsPage />} />
          {/*
            Department pages. These are also relative to the parent "/" route.
            e.g., "/academics/computer-science" will render ComputerSciencePage
            inside Layout's <Outlet />.
          */}
          <Route path="academics/computer-science" element={<ComputerSciencePage />} />
          <Route path="academics/arts-humanities" element={<ArtsHumanitiesPage />} />
          <Route path="academics/business-administration" element={<BusinessAdminPage />} />

          {/*
            Catch-all route for any paths not matched above.
            This should always be the last route defined within this <Routes> block.
            It will render the NotFoundPage inside Layout's <Outlet />.
          */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
