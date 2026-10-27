import React from 'react';
import { Link } from 'react-router-dom';
import useProject from '../../hooks/useProject';
import usePageTitle from '../../hooks/usePageTitle';
import useProjectSlides from '../../hooks/useProjectSlides';
import BackToProjectsBtn from '../../components/Buttons/BackToProjectsBtn/BackToProjectsBtn';
import ProjectSourceBtn from '../../components/Buttons/ProjectSourceBtn/ProjectSourceBtn';
import './ProjectDetails.scss';

const ProjectDetails = () => {
    const project = useProject();

    const {
        slides,
        activeSlide,
        setActiveSlide,
        containerRef
    } = useProjectSlides(project);

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

    const currentSlideData = slides[activeSlide];

    return (
        <main className="details-container slide-mode">
            {/* The area inside this div acts as the scroll interceptor */}
            <div className="slider-interceptor-area" ref={containerRef}>
                <header className="details-header">
                    <h1>{project.title}</h1>
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
                </header>

                <section className="slides-layout-wrapper">
                    <div className="slide-navigation">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${activeSlide === index ? 'active' : ''}`}
                                onClick={() => setActiveSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    <div className="main-content-column">
                        <div className="active-slide-content">
                            <div className={`slide-visuals ${currentSlideData?.images?.length > 1 ? 'multi-image' : ''}`}>
                                {currentSlideData?.images && currentSlideData.images.length > 0 ? (
                                    currentSlideData.images.map((img, idx) => (
                                        <img key={idx} src={img} alt={`${project.title} ${currentSlideData.title} visual ${idx + 1}`} />
                                    ))
                                ) : (
                                    <div className="placeholder">Visual assets coming soon</div>
                                )}
                            </div>
                            <div className="slide-text">
                                <h2>{currentSlideData?.title}</h2>
                                <p>{currentSlideData?.content}</p>
                            </div>
                        </div>

                        <div className="bottom-actions">
                            <BackToProjectsBtn />
                            <ProjectSourceBtn />

                            {/* {project.link && (
                                <a href={project.link} target="_blank" rel="noreferrer" className="cta-link-bottom">
                                    View Project Source / Prototype
                                </a>
                            )} */}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default ProjectDetails;