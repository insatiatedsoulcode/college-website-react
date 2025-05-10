// src/pages/AdmissionsPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for buttons/links

function AdmissionsPage() {
  // This function defines the Admissions Page component.
  // It needs to return JSX.

  return (
    // Top-level container div
    <div>
      <h2>Admissions</h2>
      <p>
        Find all the information you need to begin your academic journey at Your College Name. We're excited to help you through the application process.
      </p>

      <hr style={{margin: '20px 0'}} />

      <h3>How to Apply</h3>
      <p>
        {/* Describe the application steps or link to an application portal */}
        Applying is easy! Follow our step-by-step guide to submit your application online. Make sure to check the deadlines for your desired program.
      </p>
      {/* Example link/button to an application portal */}
      <Link to="/apply-now-link" className="cta-btn" style={{marginTop: '10px'}}>Start Your Application</Link>

      <hr style={{margin: '20px 0'}} />

      <h3>Admission Requirements</h3>
      <p>
        {/* Detail the requirements (e.g., transcripts, test scores, essays) */}
        Review the specific admission requirements for undergraduate and graduate programs, including necessary documentation and academic prerequisites.
      </p>
      <ul>
        <li>Official High School Transcripts / Previous College Transcripts</li>
        <li>Standardized Test Scores (if applicable - e.g., SAT/ACT)</li>
        <li>Letters of Recommendation (check program specifics)</li>
        <li>Personal Essay or Statement of Purpose</li>
        <li>Application Fee (or waiver information)</li>
      </ul>

      <hr style={{margin: '20px 0'}} />

      <h3>Tuition & Financial Aid</h3>
      <p>
        {/* Provide info or links to tuition details and financial aid options */}
        We believe education should be accessible. Explore our tuition fees and discover the various financial aid options, scholarships, and grants available to eligible students.
      </p>
      {/* Example link */}
      <p><Link to="/financial-aid">Learn more about Financial Aid</Link></p>

      <hr style={{margin: '20px 0'}} />

      <h3>Visit Us</h3>
      <p>
        {/* Encourage campus visits or virtual tours */}
        The best way to experience Your College Name is to visit our campus! Schedule a tour or explore our virtual tour options.
      </p>
      {/* Example link */}
      <p><Link to="/visit-campus">Schedule a Visit</Link></p>

      {/* Add more sections if needed: Transfer Students, International Admissions, Deadlines etc. */}

    </div>
  );
}

// CRITICAL: Export the component so App.js can import it
export default AdmissionsPage;
