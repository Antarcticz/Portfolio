import React, { useState } from 'react';
import { NavLink, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTheme from '../../hooks/useTheme';
import './Navbar.scss';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    // Only show navigation links on the exact Home or Projects pages
    const showNavLinks = location.pathname === '/' || location.pathname === '/projects';

    return (
        <nav aria-label="Main Navigation">
            <div className="nav-top-row">
                <div className="brand-container">
                    <Link to="/" className="brand-link" aria-label="Go to home page">
                        <h2>Maximilian Hedman</h2>
                    </Link>
                </div>

                {showNavLinks && (
                    <div className='nav-links-container'>
                        <ul className='nav-links-desktop'>
                            <li className='home-btn'>
                                <NavLink
                                    to='/'
                                    className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className='projects-btn'>
                                <NavLink
                                    to='/projects'
                                    className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}
                                >
                                    Projects
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                )}

                <div className="nav-controls">
                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    >
                        <FontAwesomeIcon
                            icon={['fas', theme === 'dark' ? 'sun' : 'moon']}
                            aria-hidden="true"
                            className="toggle-icon"
                        />
                    </button>

                    {showNavLinks && (
                        <div className='nav-links-mobile'>
                            <button
                                className="menu-toggle"
                                onClick={toggleMenu}
                                aria-expanded={isOpen}
                                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                            >
                                <FontAwesomeIcon icon={['fas', isOpen ? 'xmark' : 'bars']} aria-hidden="true" />
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {showNavLinks && (
                <div className={`mobile-menu-drawer ${isOpen ? 'open' : ''}`}>
                    <div className="drawer-content">
                        <ul>
                            <li>
                                <NavLink to='/' className="navbar-link" onClick={closeMenu}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/projects' className="navbar-link" onClick={closeMenu}>
                                    Projects
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;