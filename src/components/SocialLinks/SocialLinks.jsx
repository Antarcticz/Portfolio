import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialLinks.scss';

const SocialLinks = () => {
    return (
        <section className="link-container">
            <ul>
                <a href="https://www.linkedin.com/in/maximilian-hedman-b10a2915b/" target="_blank" rel="noopener noreferrer">
                    <li>
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </li>
                </a>
                <a href="https://github.com/MaximilianHedman" target="_blank" rel="noopener noreferrer">
                    <li>
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </li>
                </a>
                <a href="https://sv-se.facebook.com/maximilian.hedman" target="_blank" rel="noopener noreferrer">
                    <li>
                        <FontAwesomeIcon icon={['fab', 'facebook']} />
                    </li>
                </a>
                <a href="mailto:maximilian.hedman@chasacademy.se" target="_blank" rel="noopener noreferrer">
                    <li>
                        <FontAwesomeIcon icon={['fas', 'envelope']} />
                    </li>
                </a>
            </ul>
        </section>
    )
}

export default SocialLinks