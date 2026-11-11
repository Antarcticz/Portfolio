import React from 'react';
import { projectData } from '../../data/projectData';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import BackToTopBtn from '../../components/Buttons/BackToTopBtn/BackToTopBtn';
import './Projects.scss';

const Projects = () => {
    const visibleProjects = projectData.filter(project => project.isVisible);
    const figmaProjects = visibleProjects.filter(project => project.tagShowcase === 'Figma');
    const frontendProjects = visibleProjects.filter(project => project.tagShowcase === 'Frontend');

    return (
        <main className='projects-container'>

            <div className="mobile-carousels">
                <section className='carousel-section' aria-label="Figma Projects">
                    <h2 className="carousel-title">Figma</h2>
                    <div className='card-container carousel'>
                        {figmaProjects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </section>

                <section className='carousel-section' aria-label="Frontend Projects">
                    <h2 className="carousel-title">Frontend</h2>
                    <div className='card-container carousel'>
                        {frontendProjects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </section>
            </div>

            <section className='desktop-grid card-container' aria-label="Projects">
                {visibleProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </section>

            <BackToTopBtn />
        </main>
    );
};

export default Projects;