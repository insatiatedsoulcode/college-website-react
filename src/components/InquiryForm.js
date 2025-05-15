// src/components/InquiryForm.js
import React, { useState } from 'react';
import collegeLogo from '../assets/images/logo.png'; // Adjust path if necessary

const InquiryForm = ({ onSuccess }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState({
        submitted: false,
        message: '',
        type: '' // 'success' or 'error'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
        if (submissionStatus.submitted) {
            setSubmissionStatus({ submitted: false, message: '', type: '' });
        }
    };

    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            tempErrors.name = 'Full name is required.';
            isValid = false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            tempErrors.email = 'Please enter a valid email address.';
            isValid = false;
        }
        const phoneRegex = /^[+\d\s-()]{7,20}$/;
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

    // CORRECTED handleSubmit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmissionStatus({ submitted: false, message: '', type: '' }); // Clear previous status

        if (validateForm()) {
            setIsSubmitting(true);

            const dataToSend = {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
            };

            // Use environment variable for API URL
            // For local development, set REACT_APP_API_URL=http://localhost:3001 in your frontend's .env file
            // For Vercel deployment, set REACT_APP_API_URL in Vercel's environment variable settings
            // to your deployed backend URL (e.g., https://backend-correct.vercel.app)
            const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001'; // Fallback for safety
            const ENQUIRY_ENDPOINT = `${API_BASE_URL}/api/send-enquiry`;


            try {
                const response = await fetch(ENQUIRY_ENDPOINT, { // The options object starts here
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataToSend),
                }); // The options object and the fetch call end here

                // No stray comma or object after this line for the fetch call.
                // The next part is handling the response.

                const result = await response.json();

                if (response.ok && result.success) {
                    setSubmissionStatus({
                        submitted: true,
                        message: result.message || 'Thank you! Your inquiry has been submitted successfully.',
                        type: 'success'
                    });
                    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                    setErrors({});
                    if (onSuccess) {
                        setTimeout(onSuccess, 2000);
                    }
                } else {
                    let errorMessage = result.message || 'An error occurred. Please try again.';
                    if (result.errors) {
                        let fieldErrorMessages = Object.values(result.errors).join(' ');
                        errorMessage = `${errorMessage} ${fieldErrorMessages}`;
                    }
                    setSubmissionStatus({
                        submitted: true,
                        message: errorMessage,
                        type: 'error'
                    });
                    if (result.errors) {
                        setErrors(prev => ({ ...prev, ...result.errors }));
                    }
                }
            } catch (error) {
                console.error('Form submission network error:', error);
                setSubmissionStatus({
                    submitted: true,
                    message: 'A network error occurred. Please check your connection and try again.',
                    type: 'error'
                });
            } finally {
                setIsSubmitting(false);
            }
        } else {
            setSubmissionStatus({
                submitted: true,
                message: 'Please correct the errors in the form before submitting.',
                type: 'error'
            });
        }
    };

    const inputClass = "form-input block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm";
    const errorTextClass = "text-red-500 text-xs mt-1";

    return (
        <div>
            <div className="text-center mb-6">
                <img
                    src={collegeLogo}
                    alt="Uday Pratap College Logo"
                    className="mx-auto h-16 w-16 rounded-full mb-3 object-cover shadow-sm"
                />
                <h1 className="text-2xl sm:text-3xl font-bold text-indigo-700">Uday Pratap College</h1>
                <p className="text-slate-600 mt-1 text-md">Inquiry Form</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`${inputClass} ${errors.name ? 'border-red-500' : 'border-slate-300'}`}
                        placeholder="e.g., John Doe"
                        disabled={isSubmitting}
                    />
                    {errors.name && <p className={errorTextClass}>{errors.name}</p>}
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
                        disabled={isSubmitting}
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
                        disabled={isSubmitting}
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
                        disabled={isSubmitting}
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
                        className={`${inputClass} ${errors.message ? 'border-red-500' : 'border-slate-300'}`}
                        placeholder="Please type your inquiry here..."
                        disabled={isSubmitting}
                    />
                    {errors.message && <p className={errorTextClass}>{errors.message}</p>}
                </div>

                <div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-submit w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                    </button>
                </div>
            </form>

            {submissionStatus.submitted && submissionStatus.message && (
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
