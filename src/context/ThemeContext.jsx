import React, { createContext, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import useSystemTheme from '../hooks/useSystemTheme';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const systemTheme = useSystemTheme();
    const [theme, setTheme] = useLocalStorage('theme', systemTheme);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};