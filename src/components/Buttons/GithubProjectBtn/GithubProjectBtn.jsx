import React from 'react';
import useProject from '../../../hooks/useProject';
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
            <span className="bold">View on GitHub</span>
        </a>
    );
};

export default GithubProjectBtn;