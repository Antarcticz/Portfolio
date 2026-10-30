import React from 'react';
import './ImageZoomModal.scss';

const ImageZoomModal = ({ image, onClose }) => {
    if (!image) return null;

    return (
        <div className="zoom-modal-overlay" onClick={onClose}>
            <div className="zoom-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-zoom-btn" onClick={onClose} aria-label="Close zoomed image">
                    &times;
                </button>
                <img src={image.src} alt={image.alt} className="zoomed-image" />
            </div>
        </div>
    );
};

export default ImageZoomModal;