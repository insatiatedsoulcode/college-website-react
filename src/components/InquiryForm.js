// src/components/InquiryForm.js
import React, { useState } from 'react';
// If you have specific styles for the form inputs/buttons beyond Tailwind,
// you can create an InquiryForm.css and import it.
// import './InquiryForm.css';

import collegeLogo from '../assets/images/logo.png'; // Adjust path and filename
// ... other imports

const InquiryForm = ({ onSuccess }) => { // Added onSuccess prop
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [submissionStatus, setSubmissionStatus] = useState({
        submitted: false,
        message: '',
        type: '' // 'success' or 'error'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error for the field being edited
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
        // Clear submission message on new input
        if (submissionStatus.submitted) {
            setSubmissionStatus({ submitted: false, message: '', type: '' });
        }
    };

    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formData.fullName.trim()) {
            tempErrors.fullName = 'Full name is required.';
            isValid = false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            tempErrors.email = 'Please enter a valid email address.';
            isValid = false;
        }
        const phoneRegex = /^[+\d\s-]{7,15}$/;
        if (formData.phone.trim() && !phoneRegex.test(formData.phone)) {
            tempErrors.phone = 'Please enter a valid phone number.';
            isValid = false;
        }
        if (!formData.subject.trim()) {
            tempErrors.subject = 'Subject is required.';
            isValid = false;
        }
        if (!formData.message.trim()) {
            tempErrors.message = 'Message cannot be empty.';
            isValid = false;
        }
        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Simulate API call
            console.log('Form Data Submitted:', formData);
            setSubmissionStatus({
                submitted: true,
                message: 'Thank you! Your inquiry has been submitted successfully. We will get back to you soon.',
                type: 'success'
            });
            setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' }); // Reset form
            setErrors({});
            if (onSuccess) { // Call onSuccess if provided (e.g., to close modal)
                setTimeout(onSuccess, 2000); // Close modal after 2 seconds
            }
        } else {
            setSubmissionStatus({
                submitted: true,
                message: 'Please correct the errors in the form before submitting.',
                type: 'error'
            });
        }
    };

    // Tailwind classes for inputs and textareas (can be refactored into a constant)
    const inputClass = "form-input block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm";
    const errorTextClass = "text-red-500 text-xs mt-1";

    return (
        <div> {/* Wrapper for the form content */}
            {/* Ensure all 'class' attributes are 'className' and <img> is self-closed '/>' */}
            <div className="text-center mb-6">
                <img
                    src={collegeLogo}
                    alt="Uday Pratap College Logo"
                    className="mx-auto h-16 w-16 rounded-full mb-3 object-cover shadow-sm"
                /> {/* Crucial: Self-closing tag for <img> */}
                <h1 className="text-2xl sm:text-3xl font-bold text-indigo-700">Uday Pratap College</h1>
                <p className="text-slate-600 mt-1 text-md">Inquiry Form</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`${inputClass} ${errors.fullName ? 'border-red-500' : 'border-slate-300'}`}
                        placeholder="e.g., John Doe"
                    />
                    {errors.fullName && <p className={errorTextClass}>{errors.fullName}</p>}
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`${inputClass} ${errors.email ? 'border-red-500' : 'border-slate-300'}`}
                        placeholder="you@example.com"
                    />
                    {errors.email && <p className={errorTextClass}>{errors.email}</p>}
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                        Phone Number (Optional)
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`${inputClass} ${errors.phone ? 'border-red-500' : 'border-slate-300'}`}
                        placeholder="+91 XXXXX XXXXX"
                    />
                    {errors.phone && <p className={errorTextClass}>{errors.phone}</p>}
                </div>

                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                        Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`${inputClass} ${errors.subject ? 'border-red-500' : 'border-slate-300'}`}
                        placeholder="e.g., Admission Inquiry"
                    />
                    {errors.subject && <p className={errorTextClass}>{errors.subject}</p>}
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                        Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className={`${inputClass} ${errors.message ? 'border-red-500' : 'border-slate-300'}`} // form-textarea equivalent
                        placeholder="Please type your inquiry here..."
                    />
                    {errors.message && <p className={errorTextClass}>{errors.message}</p>}
                </div>

                <div>
                    <button
                        type="submit"
                        className="btn-submit w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                    >
                        Submit Inquiry
                    </button>
                </div>
            </form>

            {submissionStatus.submitted && (
                <div
                    className={`mt-4 p-4 rounded-md font-medium text-sm ${submissionStatus.type === 'success' ? 'bg-green-100 text-green-800 border border-green-300' : 'bg-red-100 text-red-800 border border-red-300'}`}
                >
                    {submissionStatus.message}
                </div>
            )}
        </div>
    );
};

export default InquiryForm;
