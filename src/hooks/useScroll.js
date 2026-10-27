import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

const useScroll = (autoScroll = false) => {
    const { pathname } = useLocation();

    const scrollToTop = useCallback((smooth = false) => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: smooth ? 'smooth' : 'auto'
        });
    }, []);

    useEffect(() => {
        if (autoScroll) {
            scrollToTop(false);
        }
    }, [pathname, autoScroll, scrollToTop]);

    return { scrollToTop };
};

export default useScroll;