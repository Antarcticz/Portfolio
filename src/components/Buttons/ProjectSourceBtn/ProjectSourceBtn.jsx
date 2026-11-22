import React from 'react';
import useProject from '../../../hooks/useProject';
import './ProjectSourceBtn.scss';

const ProjectSourceBtn = ({ onClick }) => {
    const project = useProject();

    if (!project?.link) return null;

    const buttonLabels = {
        Figma: 'Try Figma Prototype',
        Frontend: 'Visit Live Site',
    };

    const buttonText = buttonLabels[project.tagShowcase] || 'View Project';

    return (
        <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-source-btn"
            aria-label={`${buttonText} (opens in a new tab)`}
            onClick={onClick}
        >
            <span className="bold">{buttonText}</span>
        </a>
    );
};

export default ProjectSourceBtn;