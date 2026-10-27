import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialLinks.scss';

const SocialLinks = () => {
    return (
        <section className="link-container" aria-label="Social Media Links">
            <ul>
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
        </section>
    )
}

export default SocialLinks;