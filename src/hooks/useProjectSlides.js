import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

const useProjectSlides = (project) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const isScrolling = useRef(false);
    const touchStartX = useRef(0);
    const touchStartY = useRef(0);
    const containerRef = useRef(null);

    const slides = useMemo(() => {
        if (!project) return [];

        const rawSlides = [
            { id: 'overview', title: 'Overview', content: project.overview },
            { id: 'problem', title: 'Problem', content: project.problem },
            { id: 'research', title: 'Research', content: project.research },
            { id: 'design', title: 'Process & Design', content: project.design },
            { id: 'outcome', title: 'Outcome', content: project.outcome },
            { id: 'reflection', title: 'Reflection', content: project.reflection }
        ];

        const activeSlides = rawSlides.filter(slide => slide.content);

        return activeSlides.map((slide, index) => {
            const imageForSlide = project.imageDetails && project.imageDetails[index]
                ? [project.imageDetails[index]]
                : [];

            return {
                ...slide,
                images: imageForSlide
            };
        });
    }, [project]);

    const handleNext = useCallback(() => {
        slides && activeSlide < slides.length - 1 && setActiveSlide(prev => prev + 1);
    }, [activeSlide, slides]);

    const handlePrev = useCallback(() => {
        activeSlide > 0 && setActiveSlide(prev => prev - 1);
    }, [activeSlide]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (e) => {
            if (window.innerWidth < 768) return;

            const textContainer = e.target.closest('.slide-text');

            if (textContainer) {
                const { scrollTop, scrollHeight, clientHeight } = textContainer;
                const canScrollDown = Math.ceil(scrollTop + clientHeight) < scrollHeight;
                const canScrollUp = scrollTop > 0;

                if ((e.deltaY > 0 && canScrollDown) || (e.deltaY < 0 && canScrollUp)) return;
            }

            e.preventDefault();
            if (isScrolling.current) return;

            isScrolling.current = true;

            e.deltaY > 0 ? handleNext() : e.deltaY < 0 ? handlePrev() : null;

            setTimeout(() => { isScrolling.current = false; }, 100);
        };

        const handleTouchStart = (e) => {
            touchStartX.current = e.touches[0].clientX;
            touchStartY.current = e.touches[0].clientY;
        };

        const handleTouchMove = (e) => {
            if (!touchStartX.current || !touchStartY.current) return;

            const diffX = Math.abs(touchStartX.current - e.touches[0].clientX);
            const diffY = Math.abs(touchStartY.current - e.touches[0].clientY);

            diffY > diffX ? null : (e.cancelable && e.preventDefault());
        };

        const handleTouchEnd = (e) => {
            if (!touchStartX.current || !touchStartY.current) return;

            const diffX = touchStartX.current - e.changedTouches[0].clientX;
            const diffY = touchStartY.current - e.changedTouches[0].clientY;

            Math.abs(diffX) > Math.abs(diffY)
                ? (diffX > 50 ? handleNext() : diffX < -50 ? handlePrev() : null)
                : null;

            touchStartX.current = 0;
            touchStartY.current = 0;
        };

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