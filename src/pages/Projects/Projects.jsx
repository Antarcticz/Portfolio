import React from 'react';
import { projectData } from '../../data/projectData';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import BackToTopBtn from '../../components/BackToTopBtn/BackToTopBtn';
import './Projects.scss';

const Projects = () => {
    return (
        <main className='projects-container'>
            <section className='card-container' aria-label="Projects">
                {projectData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </section>
            <BackToTopBtn />
        </main>
    )
}

export default Projects;