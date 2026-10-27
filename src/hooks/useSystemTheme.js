import { useState, useEffect } from 'react';

const useSystemTheme = () => {
    const [systemTheme, setSystemTheme] = useState(
        window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => setSystemTheme(e.matches ? 'dark' : 'light');

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return systemTheme;
};

export default useSystemTheme;