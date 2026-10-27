import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectData } from '../../data/projectData';
import './ProjectDetails.scss';

const ProjectDetails = () => {
    const { id } = useParams();

    const project = projectData.find(p => p.id === Number(id));

    if (!project) {
        return (
            <main className="details-container">
                <h2>Project not found</h2>
                <Link to="/">Back to Home</Link>
            </main>
        );
    }

    return (
        <main className="details-container">
            <section className="details-content">
                <Link to="/" className="back-btn" aria-label="Go back to portfolio">
                    ← Back to Projects
                </Link>

                <header className="details-header">
                    <h1>{project.title}</h1>
                    <p className="category-tag">{project.description}</p>
                </header>

                <div className="details-visuals">
                    {project.image ? (
                        <img src={project.image} alt={`Screenshot of ${project.title}`} />
                    ) : (
                        <div className="details-placeholder">
                            <p>Full project preview coming soon</p>
                        </div>
                    )}
                </div>

                <div className="details-description">
                    <h3>About this project</h3>
                    //TODO Add longerDescription field in projectData
                    <p>
                        
                    </p>

                    {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="external-link">
                            View on Figma / Live Demo
                        </a>
                    )}
                </div>
            </section>
        </main>
    );
};

export default ProjectDetails;