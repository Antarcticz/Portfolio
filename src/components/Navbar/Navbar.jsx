import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.scss';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav aria-label="Main Navigation">
            <div className="nav-top-row">
                <div className="brand-container">
                    <h2>Maximilian Hedman</h2>
                </div>

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
                </div>
            </div>

            <div className={`mobile-menu-drawer ${isOpen ? 'open' : ''}`}>
                <div className="drawer-content">
                    <ul>
                        <li>
                            <NavLink to='/' className="navbar-link" onClick={closeMenu}>
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className="navbar-link" onClick={closeMenu}>
                                About
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='nav-links-container'>
                <ul className='nav-links-desktop'>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/about'
                            className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;