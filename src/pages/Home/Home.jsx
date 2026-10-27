import React from 'react';
import './Home.scss';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import BackToTopBtn from '../../components/BackToTopBtn/BackToTopBtn';

const Home = () => {
    return (
        <main className='home-container'>
            <section className='card-container' aria-label="Projects Portfolio">
                <ProjectCard />
            </section>
            <BackToTopBtn />
        </main>
    )
}

export default Home;