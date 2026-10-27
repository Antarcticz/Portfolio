import React from 'react';
import useProject from '../../../hooks/useProject';
import './ProjectSourceBtn.scss';

const ProjectSourceBtn = () => {
    const project = useProject();

    if (!project?.link) return null;

    return (
        <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-source-btn"
            aria-label="View project source or prototype"
        >
            <span className="bold">View Project Source / Prototype</span>
        </a>
    );
};

export default ProjectSourceBtn;