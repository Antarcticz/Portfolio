import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetails.scss';

import useProject from '../../hooks/useProject';
import usePageTitle from '../../hooks/usePageTitle';
import useProjectSlides from '../../hooks/useProjectSlides';

import BackToProjectsBtn from '../../components/Buttons/BackToProjectsBtn/BackToProjectsBtn';
import ProjectSourceBtn from '../../components/Buttons/ProjectSourceBtn/ProjectSourceBtn';

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
                    {/* ... (keep your existing header code exactly the same) ... */}
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

                                        // 1. Find the global index of this specific preview image in the main array
                                        const globalImageIndex = project.imagePreview?.indexOf(img) ?? -1;

                                        // 2. Safely grab the matching high-res overview image (fallback to preview if overview is missing)
                                        const highResImage = project.imageOverview && project.imageOverview[globalImageIndex]
                                            ? project.imageOverview[globalImageIndex]
                                            : img;

                                        return (
                                            <img
                                                key={idx}
                                                src={img} // The slide still displays the lightweight preview
                                                alt={altText}
                                                className="zoomable-image"
                                                onClick={() => setZoomedImage({
                                                    src: highResImage, // The modal opens the high-res overview
                                                    alt: altText,
                                                    globalIndex: globalImageIndex // Pass the index so prev/next works
                                                })}
                                            />
                                        )
                                    })
                                ) : (
                                    <div className="placeholder">Visual assets coming soon</div>
                                )}
                            </div>

                            <div className="slide-text">
                                {/* ... (keep your existing text code exactly the same) ... */}
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

                {/* 3. Update the Modal navigation logic to use the globalIndex and imageOverview */}
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