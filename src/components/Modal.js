// src/components/Modal.js
import React from 'react';
import './Modal.css'; // We'll create this CSS file next

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null; // Don't render anything if the modal is not open
    }

    return (
        <div className="modal-overlay-react active" onClick={onClose}>
            <div className="modal-content-react" onClick={(e) => e.stopPropagation()}> {/* Prevents closing when clicking inside content */}
                <button
                    className="modal-close-btn-react"
                    aria-label="Close modal"
                    onClick={onClose}
                >
                    &times;
                </button>
                {children} {/* This is where the content of the modal (e.g., our form) will go */}
            </div>
        </div>
    );
};

export default Modal;
