import React, { useState, useRef, useEffect } from 'react';
import './ImageZoomModal.scss';

// Added onPrev and onNext props
const ImageZoomModal = ({ image, onClose, onPrev, onNext }) => {
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);

    const dragStart = useRef({ x: 0, y: 0 });

    useEffect(() => {
        if (image) {
            setScale(1);
            setPosition({ x: 0, y: 0 });
            setIsDragging(false);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [image]);

    if (!image) return null;

    const handleReset = () => {
        setScale(1);
        setPosition({ x: 0, y: 0 });
        setIsDragging(false);
    };

    const updateZoom = (newScale, clientX = window.innerWidth / 2, clientY = window.innerHeight / 2) => {
        const clampedScale = Math.max(0.2, Math.min(newScale, 5));
        if (clampedScale === scale) return;

        const ratio = clampedScale / scale;
        const diffX = clientX - window.innerWidth / 2;
        const diffY = clientY - window.innerHeight / 2;

        setPosition({
            x: diffX - (diffX - position.x) * ratio,
            y: diffY - (diffY - position.y) * ratio
        });

        setScale(clampedScale);
    };

    const handleWheel = (e) => {
        const zoomDirection = e.deltaY > 0 ? -1 : 1;
        const step = 0.1;
        updateZoom(scale + (zoomDirection * step), e.clientX, e.clientY);
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

                {/* Wrapped both control panels in a single flex group */}
                <div className="control-group">
                    <div className="zoom-controls">
                        <span className="zoom-stats">{Math.round(scale * 100)}%</span>
                        <input
                            type="range"
                            min="0.2"
                            max="5"
                            step="0.01"
                            value={scale}
                            onChange={(e) => updateZoom(parseFloat(e.target.value))}
                            className="zoom-slider"
                            aria-label="Zoom level"
                        />
                        <button className="reset-zoom-btn" onClick={handleReset} aria-label="Reset zoom" title="Reset zoom">
                            &#x21BA;
                        </button>
                    </div>

                    {/* NEW: Navigation Controls */}
                    {onPrev && onNext && (
                        <div className="nav-controls">
                            <button className="nav-btn" onClick={onPrev} aria-label="Previous image">
                                &#10094;
                            </button>
                            <div className="nav-divider"></div>
                            <button className="nav-btn" onClick={onNext} aria-label="Next image">
                                &#10095;
                            </button>
                        </div>
                    )}
                </div>

                <button className="close-zoom-btn" onClick={onClose} aria-label="Close workspace">
                    &times;
                </button>

            </div>

        </div>
    );
};

export default ImageZoomModal;