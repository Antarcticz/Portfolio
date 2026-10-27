import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <ul className="footer-socials" aria-label="Social media links">
                <li>
                    <a
                        href="https://www.linkedin.com/in/maximilian-hedman-b10a2915b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn (opens in new tab)"
                    >
                        <FontAwesomeIcon icon={['fab', 'linkedin']} aria-hidden="true" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/MaximilianHedman"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub (opens in new tab)"
                    >
                        <FontAwesomeIcon icon={['fab', 'github']} aria-hidden="true" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://sv-se.facebook.com/maximilian.hedman"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook (opens in new tab)"
                    >
                        <FontAwesomeIcon icon={['fab', 'facebook']} aria-hidden="true" />
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:maximilian_hedman@hotmail.com"
                        aria-label="Send an email to Maximilian"
                    >
                        <FontAwesomeIcon icon={['fas', 'envelope']} aria-hidden="true" />
                    </a>
                </li>
            </ul>
            <p className="copyright">Maximilian Hedman &copy; 2026</p>
        </footer>
    )
}

export default Footer;