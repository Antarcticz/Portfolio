import React from 'react';
import './WarningModal.scss';

const WarningModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="warning-modal" onClick={(e) => e.stopPropagation()}>

                <p>I made this app a bit blinky, be aware of epilepsy! 🕺✨</p>

                <div className="modal-actions">
                    <button className="back-btn" onClick={onClose}>
                        Go Back
                    </button>
                    <button className="continue-btn" onClick={onConfirm}>
                        I Understand, Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WarningModal;