import React, { useState, useRef, useEffect } from 'react';
import './ImageZoomModal.scss';

const ImageZoomModal = ({ image, onClose, onPrev, onNext }) => {
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);

    const dragStart = useRef({ x: 0, y: 0 });

    // NEW: Multi-touch tracking for mobile pinch-to-zoom
    const activePointers = useRef(new Map());
    const pinchSnapshot = useRef(null);

    useEffect(() => {
        if (image) {
            setScale(1);
            setPosition({ x: 0, y: 0 });
            setIsDragging(false);
            document.body.style.overflow = 'hidden';

            // Clear any lingering touches if the image changes
            activePointers.current.clear();
            pinchSnapshot.current = null;
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

    // --- UPDATED: Pointer Handlers with Multi-Touch Support ---
    const handlePointerDown = (e) => {
        e.preventDefault();
        e.target.setPointerCapture(e.pointerId);

        // Register the new finger touching the screen
        activePointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

        if (activePointers.current.size === 1) {
            // One finger: Standard dragging
            setIsDragging(true);
            dragStart.current = {
                x: e.clientX - position.x,
                y: e.clientY - position.y
            };
        } else if (activePointers.current.size === 2) {
            // Two fingers: Pinch-to-zoom initiated
            setIsDragging(false); // Stop dragging while zooming

            const pts = Array.from(activePointers.current.values());
            const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
            const centerX = (pts[0].x + pts[1].x) / 2;
            const centerY = (pts[0].y + pts[1].y) / 2;

            // Take a snapshot of the state the exact moment the second finger touches
            pinchSnapshot.current = {
                dist,
                scale,
                position,
                center: { x: centerX, y: centerY }
            };
        }
    };

    const handlePointerMove = (e) => {
        // If we aren't tracking this pointer, ignore it
        if (!activePointers.current.has(e.pointerId)) return;

        // Update the current location of this specific finger
        activePointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

        if (activePointers.current.size === 1 && isDragging) {
            // One finger moving
            setPosition({
                x: e.clientX - dragStart.current.x,
                y: e.clientY - dragStart.current.y
            });
        } else if (activePointers.current.size === 2 && pinchSnapshot.current) {
            // Two fingers moving
            const pts = Array.from(activePointers.current.values());
            const currentDist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);

            const { dist: initialDist, scale: initialScale, position: initialPos, center } = pinchSnapshot.current;

            // Calculate how much the scale changed relative to the initial pinch snapshot
            const newScale = Math.max(0.2, Math.min(initialScale * (currentDist / initialDist), 5));

            // Zoom directly into the center point between the two fingers
            const ratio = newScale / initialScale;
            const diffX = center.x - window.innerWidth / 2;
            const diffY = center.y - window.innerHeight / 2;

            setPosition({
                x: diffX - (diffX - initialPos.x) * ratio,
                y: diffY - (diffY - initialPos.y) * ratio
            });
            setScale(newScale);
        }
    };

    const handlePointerUp = (e) => {
        // Remove the finger that just left the screen
        activePointers.current.delete(e.pointerId);
        e.target.releasePointerCapture(e.pointerId);

        if (activePointers.current.size === 0) {
            setIsDragging(false);
            pinchSnapshot.current = null;
        } else {
            // If they lift one finger after a pinch, disable dragging until they lift all fingers.
            // This prevents the image from wildly snapping across the screen!
            setIsDragging(false);
        }
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
                style={{
                    cursor: isDragging ? 'grabbing' : 'grab',
                    // CRITICAL FIX: Tells mobile browsers NOT to intercept our touch gestures
                    touchAction: 'none'
                }}
            >
                <div
                    className="canvas-container"
                    style={{
                        transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                        transition: isDragging || (activePointers.current.size > 1) ? 'none' : 'transform 0.1s ease-out'
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