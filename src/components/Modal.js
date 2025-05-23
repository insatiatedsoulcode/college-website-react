// src/components/Modal.js
import React, { useEffect } from 'react';
import './Modal.css'; // Make sure this CSS file contains responsive styles

const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        // Function to handle Escape key press
        const handleEscapeKey = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.body.classList.add('modal-open-react'); // Prevent background scroll
            document.addEventListener('keydown', handleEscapeKey);
        } else {
            document.body.classList.remove('modal-open-react');
        }

        // Cleanup function to remove event listener and body class
        return () => {
            document.body.classList.remove('modal-open-react');
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [isOpen, onClose]); // Re-run effect if isOpen or onClose changes

    if (!isOpen) {
        return null; // Don't render anything if the modal is not open
    }

    return (
        // The onClick on the overlay allows closing the modal by clicking outside the content
        <div className="modal-overlay-react active" onClick={onClose}>
            {/* Prevents closing when clicking inside the modal content itself */}
            <div className="modal-content-react" onClick={(e) => e.stopPropagation()}>
                <button
                    className="modal-close-btn-react"
                    aria-label="Close modal"
                    onClick={onClose}
                >
                    &times; {/* HTML entity for 'x' or close symbol */}
                </button>
                {children} {/* This is where the content of the modal (e.g., your InquiryForm) will be rendered */}
            </div>
        </div>
    );
};

export default Modal;
