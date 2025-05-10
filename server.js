// server.js

console.log('--- Script starting ---'); // Debug: Script started

// Import necessary modules
const express = require('express');
// const nodemailer = require('nodemailer'); // Nodemailer is no longer needed
const cors = require('cors');
const mongoose = require('mongoose'); // Import Mongoose
require('dotenv').config(); // For loading environment variables

console.log('--- Modules imported ---'); // Debug: Modules loaded
// console.log('EMAIL_USER from env:', process.env.EMAIL_USER); // Email not used
// console.log('YOUR_RECEIVING_EMAIL from env:', process.env.YOUR_RECEIVING_EMAIL); // Email not used
console.log('MONGODB_URI from env:', process.env.MONGODB_URI); // Debug: Check MongoDB URI

// Initialize the Express application
const app = express();
const PORT = process.env.PORT || 3001;

console.log('--- Express app initialized ---'); // Debug

// --- Middleware ---
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log('--- Middleware configured ---'); // Debug

// --- MongoDB Connection ---
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('--- Successfully connected to MongoDB ---');
  })
  .catch((err) => {
    console.error('--- MongoDB connection error: ---', err);
    // Optionally exit if DB connection is critical for the app to run
    // process.exit(1);
  });

// --- Mongoose Schema and Model for Enquiries ---
const enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Please use a valid email address.'],
  },
  subject: {
    type: String,
    required: [true, 'Subject is required'],
    trim: true,
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

const Enquiry = mongoose.model('Enquiry', enquirySchema);
console.log('--- Mongoose Enquiry model created ---');

// --- Nodemailer Transporter Setup (REMOVED) ---
// let transporter;
// try {
//   if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
//     console.warn('--- Email credentials (EMAIL_USER or EMAIL_PASS) not found in .env. Email sending will be disabled. ---');
//   } else {
//     transporter = nodemailer.createTransport({ // ... configuration ... });
//     console.log('--- Nodemailer transporter created ---');
//     transporter.verify((error, success) => { /* ... */ });
//   }
// } catch (err) {
//   console.error('Error creating Nodemailer transporter:', err);
// }


// --- API Routes ---
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend contact form API! (Database only)' });
});

app.post('/api/send-enquiry', async (req, res) => {
  console.log('--- Received POST to /api/send-enquiry ---'); // Debug
  const { name, email, subject, message } = req.body;

  // --- 1. Validate Input (Basic) ---
  if (!name || !email || !subject || !message) {
    console.log('Validation failed: Missing fields from request body'); // Debug
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  // --- 2. Save to MongoDB ---
  try {
    const newEnquiry = new Enquiry({
      name,
      email,
      subject,
      message,
    });
    const savedEnquiry = await newEnquiry.save();
    console.log('--- Enquiry saved to MongoDB: ---', savedEnquiry._id);

    // --- 3. Email Sending Logic (REMOVED) ---
    // if (!transporter) { /* ... */ }
    // const mailOptions = { /* ... */ };
    // const info = await transporter.sendMail(mailOptions);
    // console.log('Email sent: ' + info.response);

    res.status(200).json({
        success: true,
        message: 'Enquiry received and stored successfully!', // Updated message
        enquiryId: savedEnquiry._id
    });

  } catch (error) {
    console.error('--- Error processing enquiry: ---', error);
    if (error.name === 'ValidationError') { // Mongoose validation error
      let errors = {};
      for (let field in error.errors) {
        errors[field] = error.errors[field].message;
      }
      return res.status(400).json({ success: false, message: 'Validation failed.', errors });
    }
    // Generic server error for other issues (DB connection, etc.)
    res.status(500).json({ success: false, message: 'Failed to store enquiry. Please try again later.' });
  }
});

// --- Start the server ---
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
  if (mongoose.connection.readyState !== 1) {
      console.warn('--- Warning: Server started, but MongoDB is not connected. DB operations will fail. Check MONGODB_URI and DB server. ---')
  }
});

console.log('--- Script finished initial execution (server might be listening now) ---'); // Debug
