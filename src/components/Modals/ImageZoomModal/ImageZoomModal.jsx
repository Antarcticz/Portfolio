import React from 'react';
import './ImageZoomModal.scss';

const ImageZoomModal = ({ image, onClose }) => {
    if (!image) return null;

    return (
        <div className="zoom-modal-overlay" onClick={onClose}>
            <div className="zoom-modal-content">
                <img
                    src={image.src}
                    alt={image.alt}
                    className="zoomed-image"
                    onClick={(e) => e.stopPropagation()}
                />
                <button className="close-zoom-btn" onClick={onClose} aria-label="Close zoomed image">
                    &times;
                </button>
            </div>
        </div>
    );
};

export default ImageZoomModal;