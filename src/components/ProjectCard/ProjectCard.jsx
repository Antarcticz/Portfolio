import React from 'react';
import { projectData } from '../../data/projectData';
import './ProjectCard.scss';

const ProjectCard = () => {
    return (
        <>
            {projectData.map((project) => (
                <a 
                    className="card-link" 
                    href={project.link} 
                    key={project.id} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} (opens in new tab)`}
                >
                    <div className="card">
                        <div className="card-img">
                            <img src={project.image} alt="" aria-hidden="true" loading="lazy" />
                        </div>
                        <div className="card-text">
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                        </div>
                    </div>
                </a>
            ))}
        </>
    );
};

export default ProjectCard;