// src/components/InquiryForm.js
import React, { useState } from 'react';
// If you have a logo image imported, use that. Otherwise, a placeholder or direct URL.
// import collegeLogo from '../assets/images/logo.png';

const InquiryForm = ({ onSuccess }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '', // Kept phone in state, but not sent to backend unless backend is updated
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
        // Clear error for the field being edited
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
        // Reset submission status message when user starts typing again
        if (submissionStatus.submitted) {
            setSubmissionStatus({ submitted: false, message: '', type: '' });
        }
    };

    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[+\d\s-()]{7,20}$/; // Allows more flexible phone numbers

        if (!formData.name.trim()) {
            tempErrors.name = 'Full name is required.';
            isValid = false;
        }
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            tempErrors.email = 'Please enter a valid email address.';
            isValid = false;
        }
        if (formData.phone.trim() && !phoneRegex.test(formData.phone)) { // Phone is optional but validated if filled
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmissionStatus({ submitted: false, message: '', type: '' }); // Clear previous status

        if (validateForm()) {
            setIsSubmitting(true);
            setErrors({}); // Clear previous errors before new submission

            const dataToSend = { // Only send data the backend expects
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
            };

            const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001'; // Fallback
            const ENQUIRY_ENDPOINT = `${API_BASE_URL}/api/send-enquiry`;

            try {
                const response = await fetch(ENQUIRY_ENDPOINT, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataToSend),
                });

                if (response.ok) {
                    const result = await response.json(); // Assuming backend sends JSON on success
                    if (result.success) {
                        setSubmissionStatus({
                            submitted: true,
                            message: result.message || 'Thank you! Your inquiry has been submitted successfully.',
                            type: 'success'
                        });
                        setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); // Reset form
                        if (onSuccess) setTimeout(onSuccess, 2000); // Call onSuccess prop (e.g., to close modal)
                    } else {
                        // Handle cases where response is ok (2xx) but backend indicates logical error
                        setSubmissionStatus({
                            submitted: true,
                            message: result.message || 'Submission was processed but indicated an issue.',
                            type: 'error'
                        });
                    }
                } else {
                    // Handle HTTP errors (4xx, 5xx)
                    let errorMessage = `An error occurred: ${response.status} ${response.statusText}.`;
                    try {
                        const errorResult = await response.json(); // Try to parse error response as JSON
                        errorMessage = errorResult.message || errorMessage;
                        if (errorResult.errors) {
                            let fieldErrorMessages = Object.values(errorResult.errors).join(' ');
                            errorMessage = `${errorMessage} ${fieldErrorMessages}`;
                            setErrors(prev => ({ ...prev, ...errorResult.errors }));
                        }
                    } catch (jsonError) {
                        // If response is not JSON, use the text or a generic message
                        try {
                            const textError = await response.text();
                            if (textError) errorMessage += ` Server response: ${textError.substring(0,100)}`;
                        } catch (e) {}
                    }
                    setSubmissionStatus({ submitted: true, message: errorMessage, type: 'error' });
                }
            } catch (networkError) {
                console.error('Form submission network error:', networkError);
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

    // Base Tailwind classes for inputs - can be customized further
    const inputBaseClass = "block w-full border border-slate-300 rounded shadow-sm focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out";
    const inputTextSizeAndPadding = "text-xs px-2 py-1 sm:text-sm sm:px-2.5 sm:py-1.5"; // More compact base
    const labelClass = "block text-xs font-medium text-slate-700 mb-0.5"; // Smaller base mb
    const errorTextClass = "text-red-500 text-xs mt-0.5";

    return (
        <> {/* Using Fragment as the form is already wrapped by modal-content div */}
            <div className={`text-center mb-1.5 sm:mb-2 md:mb-3 ${isSubmitting ? 'opacity-50' : ''}`}>
                <img
                    src="https://placehold.co/48x48/EBF4FF/333333?text=UPC" // Smaller placeholder
                    // src={collegeLogo} // If using imported logo
                    alt="Uday Pratap College Logo"
                    className={`mx-auto h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded-full mb-0.5 sm:mb-1 object-cover shadow-sm`}
                />
                <h1 className={`text-sm sm:text-base md:text-lg font-bold text-indigo-700`}>
                    Uday Pratap College
                </h1>
                <p className={`text-slate-600 mt-0 sm:mt-0.5 text-xs`}>
                    Inquiry Form
                </p>
            </div>

            <form onSubmit={handleSubmit} className={`space-y-1 sm:space-y-1.5 md:space-y-2 ${isSubmitting ? 'opacity-50 pointer-events-none' : ''}`}>
                <div>
                    <label htmlFor="name" className={labelClass}>
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`${inputBaseClass} ${inputTextSizeAndPadding} ${errors.name ? 'border-red-500' : 'border-slate-300'}`}
                        placeholder="e.g., John Doe"
                        disabled={isSubmitting}
                        required
                    />
                    {errors.name && <p className={errorTextClass}>{errors.name}</p>}
                </div>

                <div>
                    <label htmlFor="email" className={labelClass}>
                        Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`${inputBaseClass} ${inputTextSizeAndPadding} ${errors.email ? 'border-red-500' : 'border-slate-300'}`}
                        placeholder="you@example.com"
                        disabled={isSubmitting}
                        required
                    />
                    {errors.email && <p className={errorTextClass}>{errors.email}</p>}
                </div>

                <div>
                    <label htmlFor="phone" className={labelClass}>
                        Phone Number (Optional)
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`${inputBaseClass} ${inputTextSizeAndPadding} ${errors.phone ? 'border-red-500' : 'border-slate-300'}`}
                        placeholder="+91 XXXXX XXXXX"
                        disabled={isSubmitting}
                    />
                    {errors.phone && <p className={errorTextClass}>{errors.phone}</p>}
                </div>

                <div>
                    <label htmlFor="subject" className={labelClass}>
                        Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`${inputBaseClass} ${inputTextSizeAndPadding} ${errors.subject ? 'border-red-500' : 'border-slate-300'}`}
                        placeholder="e.g., Admission Inquiry"
                        disabled={isSubmitting}
                        required
                    />
                    {errors.subject && <p className={errorTextClass}>{errors.subject}</p>}
                </div>

                <div>
                    <label htmlFor="message" className={labelClass}>
                        Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        rows="2" // Further reduced rows for very small screens
                        value={formData.message}
                        onChange={handleChange}
                        className={`${inputBaseClass} ${inputTextSizeAndPadding} ${errors.message ? 'border-red-500' : 'border-slate-300'}`}
                        placeholder="Please type your inquiry here..."
                        disabled={isSubmitting}
                        required
                    />
                    {errors.message && <p className={errorTextClass}>{errors.message}</p>}
                </div>

                <div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`btn-submit w-full flex justify-center py-1.5 sm:py-2 px-3 sm:px-4 border border-transparent rounded-md shadow-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out text-xs sm:text-sm ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                    </button>
                </div>
            </form>

            {submissionStatus.submitted && submissionStatus.message && (
                <div
                    className={`mt-2 sm:mt-3 p-1.5 sm:p-2 rounded-md font-medium text-xs text-center ${submissionStatus.type === 'success' ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-red-100 text-red-700 border border-red-300'}`}
                >
                    {submissionStatus.message}
                </div>
            )}
        </>
    );
};

export default InquiryForm;
