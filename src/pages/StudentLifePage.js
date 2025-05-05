// src/pages/StudentLifePage.js
import React from 'react';

// Optional: Import images if you have them ready
// import studentGroupPhoto from '../assets/images/student-group.jpg';
// import campusEventPhoto from '../assets/images/campus-event.jpg';

function StudentLifePage() {
  // This is the main function defining the component.
  // It needs to return JSX (the HTML-like structure).

  return (
    // The top-level element returned by the component (e.g., a div)
    <div>
      <h2>Student Life</h2>
      <p>
        Welcome to the Student Life section! Here you can find information about
        clubs, events, housing, and other resources available to students at
        Your College Name.
      </p>

      {/* Add more sections and content here later */}
      <h3>Clubs & Organizations</h3>
      <p>Information about student clubs will go here.</p>
      {/*
      <img
        src={studentGroupPhoto}
        alt="Student group"
        className="page-image"
      />
      */}


      <h3>Campus Events</h3>
      <p>Details about upcoming campus events.</p>
       {/*
      <img
        src={campusEventPhoto}
        alt="Campus event"
        className="page-image"
      />
      */}

      {/* Add more sections like Housing, Dining, Support etc. */}

    </div>
  );
}

// CRITICAL: Export the component so App.js can import it
export default StudentLifePage;
