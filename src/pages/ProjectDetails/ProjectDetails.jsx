import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import usePageTitle from '../../hooks/usePageTitle';
import { projectData } from '../../data/projectData';
import BackToProjectsBtn from '../../components/BackToProjectsBtn/BackToProjectsBtn';
import BackToTopBtn from '../../components/BackToTopBtn/BackToTopBtn';
import './ProjectDetails.scss';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectData.find(p => p.id === Number(id));

    usePageTitle(project?.title);

    if (!project) {
        return (
            <main className="details-container">
                <div className="not-found">
                    <h2>Project not found</h2>
                    <Link to="/" className="back-btn">Back to Portfolio</Link>
                </div>
            </main>
        );
    }

    return (
        <main className="details-container">
            <section className="details-content">
                <BackToProjectsBtn />

                <header className="details-header">
                    <h1>{project.title}</h1>
                    {project.subtitle && <p className="subtitle">{project.subtitle}</p>}
                </header>

                <div className="metadata-grid">
                    {project.role && (
                        <div className="meta-item">
                            <h3>Role</h3>
                            <p>{project.role}</p>
                        </div>
                    )}
                    {project.duration && (
                        <div className="meta-item">
                            <h3>Duration</h3>
                            <p>{project.duration}</p>
                        </div>
                    )}
                    {project.tools && (
                        <div className="meta-item">
                            <h3>Tools</h3>
                            <div className="tools-list">
                                {project.tools.map((tool, index) => (
                                    <span key={index} className="tool-tag">{tool}</span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="details-visuals">
                    {project.image ? (
                        <img src={project.image} alt={project.title} />
                    ) : (
                        <div className="details-placeholder">
                            <p>Visual assets coming soon</p>
                        </div>
                    )}
                </div>

                <article className="details-body">
                    {project.overview && (
                        <section>
                            <h2>Overview</h2>
                            <p>{project.overview}</p>
                        </section>
                    )}

                    {project.design && (
                        <section>
                            <h2>Process & Design</h2>
                            <p>{project.design}</p>
                        </section>
                    )}

                    {project.reflection && (
                        <section>
                            <h2>Reflection</h2>
                            <p>{project.reflection}</p>
                        </section>
                    )}
                </article>

                {project.link && (
                    <footer className="details-footer">
                        <a href={project.link} target="_blank" rel="noreferrer" className="cta-link">
                            View Project Source / Prototype
                        </a>
                    </footer>
                )}
            </section>
            <BackToTopBtn />
        </main>
    );
};

export default ProjectDetails;