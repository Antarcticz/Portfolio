import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.scss';

const ProjectCard = ({ project }) => {
    return (
        <Link to={`/project/${project.id}`} className='card-link'>
            <article className="card">
                <div className="card-img">
                    {project.image ? (
                        <img src={project.image} alt="" aria-hidden="true" />
                    ) : (
                        <div className="image-placeholder">
                            <span>Image coming soon</span>
                        </div>
                    )}
                </div>
                <div className="card-text">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                </div>
            </article>
        </Link>
    );
};

export default ProjectCard;