import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/maximilian-hedman-b10a2915b/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/MaximilianHedman" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                </li>
                <li>
                    <a href="https://sv-se.facebook.com/maximilian.hedman" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'facebook']} />
                    </a>
                </li>
                <li>
                    <a href="https://sv-se.facebook.com/maximilian.hedman" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fas', 'envelope']} />
                    </a>
                </li>
            </ul>
            <p>Maximilian Hedman &copy; 2026</p>
        </footer>
    )
}

export default Footer