import React from 'react';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import BackToTopBtn from '../../components/BackToTopBtn/BackToTopBtn';
import profile from '../../assets/profile.svg';
import './About.scss';

const About = () => {
    return (
        <main className='about-container'>
            <section className="about-hero" aria-label="Professional Introduction">
                <div className="hero-inner">
                    <div className="profile-wrapper">
                        <img id="profile-img" src={profile} alt="Maximilian Hedman" />
                        <SocialLinks />
                    </div>
                    <div className="hero-text">
                        <h1>Building the Bridge Between Design and Code</h1>
                        <p className="intro-text">
                            With a background in <strong>Frontend Development</strong> and <strong>UX/UI Design</strong>, I specialize
                            in building robust, scalable systems.
                        </p>
                        <p className="intro-text">
                            I prioritize technical logic and seamless developer handoffs to ensure every build starts with a strong foundation.
                        </p>
                    </div>
                </div>
            </section>

            <div className="about-content">

                <section className="info-block">
                    <h2>The "Base-First" Philosophy</h2>
                    <p>
                        I believe a project is only as strong as its foundation. I find my flow in the
                        <strong> hidden structure</strong>, building systems that stay organized as they grow.
                    </p>
                    <p>
                        By using <strong>rem measures</strong> and robust icon libraries in Figma,
                        I ensure that the design is adaptable and ready for code from day one.
                    </p>
                </section>

                <section className="info-block">
                    <h2>Documentation for Developers</h2>
                    <p>
                        Because I've studied Frontend, I know exactly what a developer needs to build efficiently.
                        I provide informative documentation including:
                    </p>
                    <ul className="info-list">
                        <li>
                            <strong>Icon Tables:</strong> Detailed lists with press areas, hex codes, and library origins.
                        </li>
                        <li>
                            <strong>Typography Scales:</strong> Clear breakdowns of weight, line-height, and scaling logic.
                        </li>
                    </ul>
                </section>

                <section className="info-block">
                    <h2>Leadership & Mentorship</h2>
                    <p>
                        Whether acting as a <strong>Code Master</strong> or a <strong>Team Lead</strong>,
                        I focus on clear, pedagogical communication.
                    </p>
                    <p>
                        I adapt my style to help every team member find their optimal way of working,
                        ensuring the whole team follows an uniformed design.
                    </p>
                </section>
            </div>
            <BackToTopBtn />
        </main>
    );
};

export default About;