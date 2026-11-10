import React from 'react';
import useImageZoom from '../../../hooks/useImageZoom';
import './ImageZoomModal.scss';

const ImageZoomModal = ({ image, onClose, onPrev, onNext }) => {
    const {
        scale,
        position,
        isDragging,
        activePointers,
        handleReset,
        updateZoom,
        handleWheel,
        handlePointerDown,
        handlePointerMove,
        handlePointerUp
    } = useImageZoom(image);

    if (!image) return null;

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
                        src={image.src || image}
                        alt={image.alt || "Zoomed project view"}
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