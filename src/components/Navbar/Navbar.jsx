import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav>
            <div className="brand-container">
                <h2>Maximilian Hedman</h2>
            </div>
            <div className='nav-links-container'>
                <ul className='nav-links-mobile'>
                    <li>
                        <Link to='/' className='navbar-link'>
                            <FontAwesomeIcon icon={['fas', 'bars']} />
                        </Link>
                    </li>
                </ul>
                <ul className='nav-links-desktop'>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}
                        >
                            Portfolio
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
    )
}

export default Navbar