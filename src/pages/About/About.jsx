import React from 'react';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import BackToTopBtn from '../../components/BackToTopBtn/BackToTopBtn';
import profile from '../../assets/profile.svg';
import './About.scss';

const About = () => {
    return (
        <main className='about-container'>
            <img id="profile-img" src={profile} alt="Maximilian Hedman - UX/UI Designer" />

            <section className='introduction-container' aria-label="Professional Introduction">
                <div className="introduction">
                    <p>My name is Maximilian and I'm an UX/UI designer with a passion for Graphics Design and App Development, based in Stockholm.</p>
                </div>
            </section>

            <SocialLinks />

            <section className="contact-info" aria-label="Contact Information">
                <p className="light-mode bold">Contact me:</p>
                <a href="mailto:maximilian_hedman@hotmail.com" className="email-link">
                    maximilian.hedman@chasacademy.se
                </a>
                <p className="light-mode">Full resume available on request</p>
            </section>

            <BackToTopBtn />
        </main>
    )
}

export default About;