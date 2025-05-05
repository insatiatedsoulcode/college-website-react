// src/pages/ContactPage.js
import React, { useState } from 'react'; // Import useState for form handling

function ContactPage() {
  // State for form fields (optional, for a basic form)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle form input changes (optional)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission (optional - placeholder)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server/API
    // For now, we just log it and show an alert
    console.log('Form submitted:', formData);
    alert('Thank you for your message! (Form placeholder - data not actually sent)');
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };


  return (
    // Top-level container div
    <div>
      <h2>Contact Us</h2>
      <p>
        We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, please feel free to reach out using the information below or by filling out the contact form.
      </p>

      <hr style={{margin: '20px 0'}} />

      <h3>Contact Information</h3>
      {/* Use address tag for semantic contact information */}
      <address style={{ fontStyle: 'normal', lineHeight: '1.8' }}>
        <strong>Your College Name</strong><br />
        [Street Address]<br />
        [City, State, Zip Code]<br />
        Varanasi, Uttar Pradesh, India<br /><br /> {/* Added location context */}
        <strong>Phone:</strong> <a href="tel:+91XXXXXXXXXX">[+91 XX XXXX XXXX]</a><br /> {/* Use tel link for phone */}
        <strong>Email:</strong> <a href="mailto:info@yourcollege.edu">[info@yourcollege.edu]</a> {/* Use mailto link for email */}
      </address>

      {/* Optional: Add operating hours */}
      <p><strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM IST</p>

      <hr style={{margin: '20px 0'}} />

      <h3>Send Us a Message</h3>
      {/* Basic Contact Form Placeholder */}
      {/* The onSubmit handler calls our handleSubmit function */}
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
          <input
            type="text"
            id="name"
            name="name" // name attribute is important for handleChange
            value={formData.name} // Controlled component
            onChange={handleChange} // Update state on change
            required // Make field mandatory
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        {/* Email Input */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        {/* Subject Input */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="subject" style={{ display: 'block', marginBottom: '5px' }}>Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        {/* Message Textarea */}
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5" // Initial height
            value={formData.message}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', resize: 'vertical' }} // Allow vertical resize
          ></textarea>
        </div>
        {/* Submit Button */}
        {/* Use the same class as your other Call-to-Action buttons for consistency */}
        <button type="submit" className="cta-btn">Send Message</button>
      </form>

      {/* Optional: Embed a map */}
      {/*
      <hr style={{margin: '30px 0'}} />
      <h3>Our Location</h3>
      {/* Add map embed code (e.g., from Google Maps) here using an iframe */}
      {/*
      <iframe
          src="YOUR_GOOGLE_MAPS_EMBED_URL"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="College Location Map">
      </iframe>
      */}

    </div>
  );
}

// CRITICAL: Export the component so it can be imported in App.js
export default ContactPage;
