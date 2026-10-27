import { useEffect } from 'react';

const usePageTitle = (title) => {
    useEffect(() => {
        const baseTitle = "Portfolio | Maximilian Hedman";
        
        document.title = title ? `${title} | Maximilian Hedman` : baseTitle;

        return () => {
            document.title = baseTitle;
        };
    }, [title]);
};

export default usePageTitle;