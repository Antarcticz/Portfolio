import React from 'react';
import useProject from '../../../hooks/useProject';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './GithubProjectBtn.scss';

const GithubProjectBtn = () => {
    const project = useProject();

    if (!project?.githubLink) return null;

    return (
        <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="github-project-btn"
            aria-label="View source code on GitHub (opens in a new tab)"
        >
            <span className="bold">GitHub</span>
            <FontAwesomeIcon icon={['fab', 'github']} aria-hidden="true" />
        </a>
    );
};

export default GithubProjectBtn;