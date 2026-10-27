import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from './context/ThemeContext';
import App from './App.jsx';
import './utils/icons.js';
import './index.scss';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider>
            <Router>
                <App />
            </Router>
        </ThemeProvider>
    </StrictMode>,
)