import React from 'react';
import './WarningModal.scss';

const WarningModal = ({ isOpen, onClose, onConfirm, warningImage }) => {
    if (!isOpen) return null;

    return (
        < div className="modal-overlay" onClick={onClose} >

            < div className="warning-modal" onClick={(e) => e.stopPropagation()}>

                {warningImage && (
                    <img src={warningImage} alt="Epilepsy Warning Sign" className="modal-warning-icon" />
                )}
                <h3>Epilepsy Warning</h3>
                <p>The external site contains rapidly flashing colors and intense visual patterns that may trigger seizures for people with photosensitive epilepsy.</p>
                <div className="modal-actions">
                    <button className="back-btn" onClick={onClose}>
                        Go Back
                    </button>
                    <button className="continue-btn" onClick={onConfirm}>
                        I Understand, Continue
                    </button>
                </div>
            </div >
        </div >
    );
};

export default WarningModal;