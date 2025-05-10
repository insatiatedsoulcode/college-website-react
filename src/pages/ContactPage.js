// src/pages/ContactPage.js
import React, { useState } from 'react';

function ContactPage() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log('Form submitted:', formData);
    alert('Thank you for your message! (This is a demo - data is not actually sent)');
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  // Google Maps Embed URL for Uday Pratap College
  // You can generate your own from Google Maps:
  // 1. Search for "Uday Pratap College, Mirzamurad" on Google Maps.
  // 2. Click "Share".
  // 3. Click "Embed a map".
  // 4. Copy the src URL from the iframe code.
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.276998346004!2d82.79097187419716!3d25.22772493043508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e16576689b97d%3A0x2f3e3ebb89f2690!2sUdai%20Pratap%20College%20(UP%20College)%20Varanasi!5e0!3m2!1sen!2sin!4v1715336709482!5m2!1sen!2sin";


  return (
    // Top-level container div
    // Added some padding for better overall spacing
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <h2 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '20px' }}>Contact Us</h2>
      <p style={{ textAlign: 'center', marginBottom: '30px', fontSize: '1.1em', color: '#555' }}>
        We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, please feel free to reach out using the information below or by filling out the contact form.
      </p>

      <hr style={{ margin: '30px 0', borderColor: '#eee' }} />

      {/* Container for Address and Map */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', marginBottom: '30px' }}>

        {/* Contact Information Section */}
        <div style={{ flex: '1 1 300px' /* Flex properties for responsiveness */ }}>
          <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>Contact Information</h3>
          <address style={{ fontStyle: 'normal', lineHeight: '1.8', fontSize: '1em' }}>
            <strong>Uday Pratap College</strong><br />
            Mirzamurad, 23 KM,<br />
            Varanasi - Allahabad Rd, Uttar Pradesh 221307<br />
            Varanasi, Uttar Pradesh, India<br /><br />
            <strong>Phone:</strong> <a href="tel:+919044774468" style={{ color: '#3498db', textDecoration: 'none' }}>[+91 9044774468]</a><br />
            <strong>Email:</strong> <a href="mailto:shiven0542@gmail.com" style={{ color: '#3498db', textDecoration: 'none' }}>shiven0542@gmail.com</a>
          </address>
          <p style={{ marginTop: '15px' }}><strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM IST</p>
        </div>

        {/* Map Section */}
        <div style={{ flex: '1 1 400px' /* Flex properties for responsiveness */ }}>
          <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1062.7446032776438!2d82.78701229356821!3d25.282329187834172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fce3060f8ae47%3A0x9d05a0c1aef0296a!2s7QMP%2B2X5%2C%20Khalispur%2C%20Uttar%20Pradesh%20221307!5e0!3m2!1sen!2sin!4v1746871389736!5m2!1sen!2sin" // Use the variable for the map URL
            width="100%" // Make width responsive
            height="350" // Adjust height as needed
            style={{ border: 0, borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} // Corrected style prop and added some styling
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Uday Pratap College Location Map" // Added title for accessibility
          ></iframe>
        </div>
      </div>

      <hr style={{ margin: '30px 0', borderColor: '#eee' }} />

      <h3 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '20px' }}>Send Us a Message</h3>
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', background: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.05)' }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="subject" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', resize: 'vertical', boxSizing: 'border-box' }}
          ></textarea>
        </div>
        <button
          type="submit"
          // Example styling for the button to make it look more like a CTA
          style={{
            backgroundColor: '#3498db', // A nice blue
            color: 'white',
            padding: '12px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1em',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease'
          }}
          // Add a hover effect (can also be done with CSS classes)
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2980b9'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3498db'}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
