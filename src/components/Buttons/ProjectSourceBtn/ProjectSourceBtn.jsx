import React from 'react';
import useProject from '../../../hooks/useProject';
import './ProjectSourceBtn.scss';

const ProjectSourceBtn = ({ onClick }) => {
    const project = useProject();

    if (!project?.link) return null;

    return (
        <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-source-btn"
            aria-label="View project source or prototype (opens in a new tab)"
            onClick={onClick}
        >
            <span className="bold">View Project Source / Prototype</span>
        </a>
    );
};

export default ProjectSourceBtn;