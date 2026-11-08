import React, { useState, useRef, useEffect } from 'react';
import './ImageZoomModal.scss';

const ImageZoomModal = ({ image, onClose }) => {
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);

    const dragStart = useRef({ x: 0, y: 0 });

    useEffect(() => {
        if (image) {
            setScale(1);
            setPosition({ x: 0, y: 0 });
            setIsDragging(false);
        }
    }, [image]);

    if (!image) return null;

    const handleReset = () => {
        setScale(1);
        setPosition({ x: 0, y: 0 });
        setIsDragging(false);
    };

    const handleWheel = (e) => {
        const zoomDirection = e.deltaY > 0 ? -1 : 1;
        const step = 0.1;

        const newScale = Math.max(0.2, Math.min(scale + (zoomDirection * step), 5));
        setScale(newScale);
    };

    const handlePointerDown = (e) => {
        e.preventDefault();

        setIsDragging(true);
        e.target.setPointerCapture(e.pointerId);

        dragStart.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y
        };
    };

    const handlePointerMove = (e) => {
        if (!isDragging) return;
        setPosition({
            x: e.clientX - dragStart.current.x,
            y: e.clientY - dragStart.current.y
        });
    };

    const handlePointerUp = (e) => {
        setIsDragging(false);
        e.target.releasePointerCapture(e.pointerId);
    };

    return (
        <div className="zoom-modal-overlay">

            <div
                className="interactive-workspace"
                onWheel={handleWheel}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                onDragStart={(e) => e.preventDefault()}
                onMouseDown={(e) => e.preventDefault()}
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
                <div
                    className="canvas-container"
                    style={{
                        transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                        transition: isDragging ? 'none' : 'transform 0.1s ease-out'
                    }}
                >
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="workspace-image"
                        draggable="false"
                    />
                </div>
            </div>

            <div className="workspace-ui">

                <div className="zoom-controls">
                    <span className="zoom-stats">{Math.round(scale * 100)}%</span>
                    <input
                        type="range"
                        min="0.2"
                        max="5"
                        step="0.01"
                        value={scale}
                        onChange={(e) => setScale(parseFloat(e.target.value))}
                        className="zoom-slider"
                        aria-label="Zoom level"
                    />
                    <button className="reset-zoom-btn" onClick={handleReset} aria-label="Reset zoom" title="Reset zoom">
                        &#x21BA;
                    </button>
                </div>

                <button className="close-zoom-btn" onClick={onClose} aria-label="Close workspace">
                    &times;
                </button>

            </div>

        </div>
    );
};

export default ImageZoomModal;