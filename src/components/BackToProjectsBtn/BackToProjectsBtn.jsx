import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BackToProjectsBtn.scss';

const BackToProjectsBtn = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

    return (
        <section className="back-to-projects">
            <button
                type="button"
                className="back-btn"
                onClick={handleBack}
                aria-label="Back to the projects page"
            >
                <FontAwesomeIcon icon={['fas', 'arrow-left']} aria-hidden="true" />
                <span className="bold">Back to Top</span>
            </button>
        </section>
    )
}

export default BackToProjectsBtn;