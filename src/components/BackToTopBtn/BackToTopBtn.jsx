import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BackToTopBtn.scss';

const BackToTopBtn = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="back-to-top">
            <button
                type="button"
                className="scroll-btn"
                onClick={scrollToTop}
                aria-label="Back to the top of the page"
            >
                <FontAwesomeIcon icon={['fas', 'arrow-up']} aria-hidden="true" />
                <span className="bold">Back to Top</span>
            </button>
        </section>
    );
};

export default BackToTopBtn;