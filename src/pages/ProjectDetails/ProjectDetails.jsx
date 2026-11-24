import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetails.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useProject from '../../hooks/useProject';
import usePageTitle from '../../hooks/usePageTitle';
import useProjectSlides from '../../hooks/useProjectSlides';

import BackToProjectsBtn from '../../components/Buttons/BackToProjectsBtn/BackToProjectsBtn';
import ProjectSourceBtn from '../../components/Buttons/ProjectSourceBtn/ProjectSourceBtn';
import GithubProjectBtn from '../../components/Buttons/GithubProjectBtn/GithubProjectBtn';

import WarningModal from '../../components/Modals/WarningModal/WarningModal';
import ImageZoomModal from '../../components/Modals/ImageZoomModal/ImageZoomModal';

const ProjectDetails = () => {
    const project = useProject();

    const {
        slides,
        activeSlide,
        setActiveSlide,
        containerRef
    } = useProjectSlides(project);

    usePageTitle(project?.title);

    const [showWarningModal, setShowWarningModal] = useState(false);
    const [zoomedImage, setZoomedImage] = useState(null);

    const handleSourceClick = (e) => {
        if (project?.imageWarning) {
            e.preventDefault();
            setShowWarningModal(true);
        }
    };

    const confirmNavigation = () => {
        setShowWarningModal(false);
        window.open(project.link, '_blank', 'noopener,noreferrer');
    };

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
            <div className="slider-interceptor-area">
                <header className="details-header">
                    <h1>{project.title}</h1>
                    <div className="metadata-row">
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

                        <div className="github-btn-desktop">
                            <GithubProjectBtn />
                        </div>
                    </div>
                </header>

                <section className="slides-layout-wrapper">
                    <div className="slide-navigation">
                        <div className="dots-group">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    className={`dot ${activeSlide === index ? 'active' : ''}`}
                                    onClick={() => setActiveSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        <div className="github-btn-mobile">
                            <GithubProjectBtn />
                        </div>
                    </div>

                    <div className="main-content-column">

                        <div className="active-slide-content" ref={containerRef}>

                            <div className={`slide-visuals ${currentSlideData?.images?.length > 1 ? 'multi-image' : ''}`}>

                                {currentSlideData?.figmaEmbed ? (
                                    <iframe
                                        className="figma-embed-frame"
                                        src={currentSlideData.figmaEmbed}
                                        allowFullScreen
                                        title={`${project.title} Interactive Prototype`}
                                    />
                                ) : currentSlideData?.images && currentSlideData.images.length > 0 ? (
                                    currentSlideData.images.map((img, idx) => {
                                        const altText = `${project.title} ${currentSlideData.title} visual ${idx + 1}`;

                                        const globalImageIndex = project.imagePreview?.indexOf(img) ?? -1;

                                        const highResImage = project.imageOverview && project.imageOverview[globalImageIndex]
                                            ? project.imageOverview[globalImageIndex]
                                            : img;

                                        return (
                                            <div
                                                key={`${activeSlide}-${idx}`}
                                                className="zoomable-image-wrapper"
                                                onClick={() => setZoomedImage({
                                                    src: highResImage,
                                                    alt: altText,
                                                    globalIndex: globalImageIndex
                                                })}
                                            >
                                                <img
                                                    src={img}
                                                    alt={altText}
                                                    className="zoomable-image"
                                                />

                                                <div className="zoom-icon-center" aria-hidden="true">
                                                    <FontAwesomeIcon icon={['fas', 'up-right-and-down-left-from-center']} aria-hidden="true" />
                                                </div>

                                                <div className="zoom-icon-corner-slot" aria-hidden="true">
                                                    <div className="zoom-icon-corner">
                                                        <FontAwesomeIcon icon={['fas', 'up-right-and-down-left-from-center']} aria-hidden="true" />
                                                        <span>Full view</span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <div className="placeholder">Visual assets coming soon</div>
                                )}
                            </div>

                            <div className="slide-text">
                                <h2>{currentSlideData?.title}</h2>
                                {currentSlideData?.content?.split('\n').map((paragraph, index) => (
                                    paragraph.trim() !== '' && (
                                        <p key={index}>{paragraph}</p>
                                    )
                                ))}
                            </div>
                        </div>

                        <div className="bottom-actions">
                            <ProjectSourceBtn onClick={handleSourceClick} />
                            <BackToProjectsBtn />
                        </div>
                    </div>
                </section>
                <WarningModal
                    isOpen={showWarningModal}
                    onClose={() => setShowWarningModal(false)}
                    onConfirm={confirmNavigation}
                    warningImage={project?.imageWarning}
                />

                {zoomedImage && (
                    <ImageZoomModal
                        image={zoomedImage}
                        onClose={() => setZoomedImage(null)}

                        onPrev={() => {
                            if (!project || zoomedImage.globalIndex === undefined || zoomedImage.globalIndex <= 0) return;

                            const newIndex = zoomedImage.globalIndex - 1;
                            const prevPreview = project.imagePreview[newIndex];
                            const prevHighRes = project.imageOverview && project.imageOverview[newIndex]
                                ? project.imageOverview[newIndex]
                                : prevPreview;

                            setZoomedImage({ ...zoomedImage, src: prevHighRes, globalIndex: newIndex });

                            const matchingSlideIndex = slides.findIndex(slide => slide.images && slide.images[0] === prevPreview);
                            if (matchingSlideIndex !== -1) setActiveSlide(matchingSlideIndex);
                        }}

                        onNext={() => {
                            if (!project || !project.imagePreview || zoomedImage.globalIndex === undefined) return;
                            if (zoomedImage.globalIndex >= project.imagePreview.length - 1) return;

                            const newIndex = zoomedImage.globalIndex + 1;
                            const nextPreview = project.imagePreview[newIndex];
                            const nextHighRes = project.imageOverview && project.imageOverview[newIndex]
                                ? project.imageOverview[newIndex]
                                : nextPreview;

                            setZoomedImage({ ...zoomedImage, src: nextHighRes, globalIndex: newIndex });

                            const matchingSlideIndex = slides.findIndex(slide => slide.images && slide.images[0] === nextPreview);
                            if (matchingSlideIndex !== -1) setActiveSlide(matchingSlideIndex);
                        }}
                    />
                )}
            </div>
        </main>
    );
};

export default ProjectDetails;