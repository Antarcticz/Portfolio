import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

const useProjectSlides = (project) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const isScrolling = useRef(false);
    const touchStartY = useRef(0);
    const containerRef = useRef(null);

    const slides = useMemo(() => {
        if (!project) return [];
        return [
            {
                id: 'demo',
                title: 'Demo',
                content: project.overview,
                // Index 0: frontend_MUI_Login
                images: project.imageDetails ? [project.imageDetails[0]] : []
            },
            {
                id: 'overview',
                title: 'Overview',
                content: project.overview,
                // Index 0: frontend_MUI_Login
                images: project.imageDetails ? [project.imageDetails[0]] : []
            },
            {
                id: 'design',
                title: 'Process & Design',
                content: project.design,
                // Index 1: frontend_MUI_Register (for the 3rd slide)
                images: project.imageDetails ? [project.imageDetails[1]] : []
            },
            {
                id: 'reflection',
                title: 'Reflection',
                content: project.reflection,
                // Index 5: frontend_MUI_Pages (for the 4th slide)
                // Adjust this index if you put the image somewhere else in the array!
                images: project.imageDetails ? [project.imageDetails[5]] : []
            }
        ].filter(slide => slide.content);
    }, [project]);

    const handleNext = useCallback(() => {
        if (activeSlide < slides.length - 1) setActiveSlide(prev => prev + 1);
    }, [activeSlide, slides.length]);

    const handlePrev = useCallback(() => {
        if (activeSlide > 0) setActiveSlide(prev => prev - 1);
    }, [activeSlide]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Native event listeners allow us to use e.preventDefault() without React's passive listener warnings
        const handleWheel = (e) => {
            e.preventDefault(); // Prevents the whole page from scrolling

            if (isScrolling.current) return;
            isScrolling.current = true;

            if (e.deltaY > 0) handleNext();
            else if (e.deltaY < 0) handlePrev();

            setTimeout(() => { isScrolling.current = false; }, 800);
        };

        const handleTouchStart = (e) => {
            touchStartY.current = e.touches[0].clientY;
        };

        const handleTouchMove = (e) => {
            e.preventDefault(); // Prevents the whole page from scrolling while swiping on the slides
        };

        const handleTouchEnd = (e) => {
            const swipeDistance = touchStartY.current - e.changedTouches[0].clientY;
            if (swipeDistance > 50) handleNext();
            else if (swipeDistance < -50) handlePrev();
        };

        // Attach listeners with { passive: false } so preventDefault() works
        container.addEventListener('wheel', handleWheel, { passive: false });
        container.addEventListener('touchstart', handleTouchStart, { passive: true });
        container.addEventListener('touchmove', handleTouchMove, { passive: false });
        container.addEventListener('touchend', handleTouchEnd, { passive: true });

        return () => {
            container.removeEventListener('wheel', handleWheel);
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchmove', handleTouchMove);
            container.removeEventListener('touchend', handleTouchEnd);
        };
    }, [handleNext, handlePrev]);

    return {
        slides,
        activeSlide,
        setActiveSlide,
        containerRef
    };
};

export default useProjectSlides;