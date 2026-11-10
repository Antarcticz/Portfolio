import { useState, useRef, useEffect } from 'react';

const useImageZoom = (image) => {
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);

    const dragStart = useRef({ x: 0, y: 0 });
    const activePointers = useRef(new Map());
    const pinchSnapshot = useRef(null);

    useEffect(() => {
        if (image) {
            setScale(1);
            setPosition({ x: 0, y: 0 });
            setIsDragging(false);
            document.body.style.overflow = 'hidden';

            activePointers.current.clear();
            pinchSnapshot.current = null;
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [image]);

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
        e.target.setPointerCapture(e.pointerId);

        activePointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

        if (activePointers.current.size === 1) {
            setIsDragging(true);
            dragStart.current = {
                x: e.clientX - position.x,
                y: e.clientY - position.y
            };
        } else if (activePointers.current.size === 2) {
            setIsDragging(false);

            const pts = Array.from(activePointers.current.values());
            const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
            const centerX = (pts[0].x + pts[1].x) / 2;
            const centerY = (pts[0].y + pts[1].y) / 2;

            pinchSnapshot.current = {
                dist,
                scale,
                position,
                center: { x: centerX, y: centerY }
            };
        }
    };

    const handlePointerMove = (e) => {
        if (!activePointers.current.has(e.pointerId)) return;

        activePointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

        if (activePointers.current.size === 1 && isDragging) {
            setPosition({
                x: e.clientX - dragStart.current.x,
                y: e.clientY - dragStart.current.y
            });
        } else if (activePointers.current.size === 2 && pinchSnapshot.current) {
            const pts = Array.from(activePointers.current.values());
            const currentDist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);

            const { dist: initialDist, scale: initialScale, position: initialPos, center } = pinchSnapshot.current;

            const newScale = Math.max(0.2, Math.min(initialScale * (currentDist / initialDist), 5));

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
        activePointers.current.delete(e.pointerId);
        e.target.releasePointerCapture(e.pointerId);

        if (activePointers.current.size === 0) {
            setIsDragging(false);
            pinchSnapshot.current = null;
        } else {
            setIsDragging(false);
        }
    };

    return {
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
    };
};

export default useImageZoom;