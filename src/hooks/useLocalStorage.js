import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        const saved = localStorage.getItem(key);
        if (saved === 'light' || saved === 'dark') return saved;
        return defaultValue;
    });

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [key, value]);

    return [value, setValue];
};

export default useLocalStorage;