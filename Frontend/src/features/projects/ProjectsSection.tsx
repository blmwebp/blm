
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

import { projects } from './data/projects';
import styles from './ProjectsSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<
    'next' | 'previous'
  >('next');

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${styles.sectionHeading}`,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (projects.length <= 1) return;

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)')
        .matches
    ) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setSlideDirection('next');
      setCurrentIndex((index) => (index + 1) % projects.length);
    }, 5000);

    return () => window.clearTimeout(timeout);
  }, [currentIndex]);

  const selectProject = (
    index: number,
    direction: 'next' | 'previous'
  ) => {
    if (index === currentIndex) return;

    setSlideDirection(direction);
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    selectProject(
      (currentIndex + 1) % projects.length,
      'next'
    );
  };

  const prevSlide = () => {
    selectProject(
      (currentIndex - 1 + projects.length) % projects.length,
      'previous'
    );
  };

  const currentProject = projects[currentIndex];

  const imageAnimation =
    slideDirection === 'next'
      ? styles.imageNext
      : styles.imagePrevious;

  const copyAnimation =
    slideDirection === 'next'
      ? styles.copyNext
      : styles.copyPrevious;

  if (!currentProject) return null;

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={styles.projects}
    >
      <div className={styles.header}>
        {/* <span className={styles.sectionLabel}>
          LATEST
        </span>

        <h2 className={styles.sectionHeading}>
          PROJECTS.
        </h2> */}
      </div>

      <div className={styles.sliderContainer}>

        {/* IMAGE — NATURAL ASPECT RATIO */}
        <div className={styles.projectImage}>
          <picture
            key={currentProject.id}
            className={`${styles.projectPicture} ${imageAnimation}`}
          >
            {currentProject.mobileThumbnail && (
              <source
                media="(max-width: 640px)"
                srcSet={currentProject.mobileThumbnail}
              />
            )}

            <img
              src={currentProject.thumbnail}
              alt={currentProject.title}
              loading="eager"
              decoding="async"
              className={styles.responsiveImage}
            />
          </picture>

          {/* NAVIGATION */}
          <button
            type="button"
            className={`${styles.navButton} ${styles.previousButton}`}
            onClick={prevSlide}
            aria-label="Previous project"
            disabled={projects.length <= 1}
          >
            <span aria-hidden="true">←</span>
          </button>

          <button
            type="button"
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={nextSlide}
            aria-label="Next project"
            disabled={projects.length <= 1}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>

        {/* PROJECT DETAILS */}
        <div className={styles.projectInfo}>
          <div
            key={currentProject.id}
            className={`${styles.projectCopy} ${copyAnimation}`}
            aria-live="polite"
            aria-atomic="true"
          >
            <span className={styles.projectNumber}>
              {String(currentIndex + 1).padStart(2, '0')}

              <span className={styles.projectCount}>
                {' / '}
                {String(projects.length).padStart(2, '0')}
              </span>
            </span>

            <span className={styles.projectCategory}>
              {currentProject.category}
            </span>

            <h3 className={styles.projectTitle}>
              {currentProject.title}
            </h3>

            {currentProject.description && (
              <p className={styles.projectDescription}>
                {currentProject.description}
              </p>
            )}

            {currentProject.year && (
              <span className={styles.projectYear}>
                {currentProject.year}
              </span>
            )}
          </div>

          <Link
            to="/projects"
            className={styles.viewAllProjects}
          >
            View All Projects
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
