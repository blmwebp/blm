
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Container } from '../../components/common/Container/Container';
import {
  portfolioProjects,
  type PortfolioCategory,
} from './projectsData';

import styles from './ProjectsPage.module.css';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  'All Work',
  'Websites',
  'Backdrops & Banners',
  'Brochures',
  'Emailers',
  'Event Creatives',
] as const;

type Filter = 'All Work' | PortfolioCategory;

export const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] =
    useState<Filter>('All Work');

  const pageRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeFilter === 'All Work'
      ? portfolioProjects
      : portfolioProjects.filter(
          (project) => project.category === activeFilter
        );

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const context = gsap.context(() => {
      gsap.from(`.${styles.heroContent} > *`, {
        y: 45,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, page);

    return () => context.revert();
  }, []);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = Array.from(
      grid.querySelectorAll(`.${styles.projectCard}`)
    );

    const animation = gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: grid,
          start: 'top 90%',
          once: true,
        },
      }
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [activeFilter]);

  return (
    <section ref={pageRef} className={styles.projectsPage}>
        
              <div className={styles.hero}>

                  {/* Background Video */}
                  <div className={styles.heroVideoWrapper} aria-hidden="true">
                      <video
                          className={styles.heroVideo}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          poster="/videos/projects/projects-poster.webp"
                      >
                          <source
                              src="/videos/projects/projects-hero.mp4"
                              type="video/mp4"
                          />
                      </video>
                  </div>

                  {/* Dark Overlay */}
                  <div className={styles.heroOverlay} aria-hidden="true" />

                  {/* Hero Content */}
                  <div className={styles.heroContent}>
                      <span className={styles.eyebrow}>
                         OUR WORK
                      </span>

                      <h1 className={styles.heroTitle}>
                          Ideas made
                          <br />
                          <span>visible.</span>
                      </h1>

                      <p className={styles.heroDescription}>
                          From digital experiences to bold visual
                          identities, we create work that connects
                          brands with people.
                      </p>
                  </div>

                  {/* Bottom Scroll Indicator */}
                  <div className={styles.scrollIndicator} aria-hidden="true">
                      <span>SCROLL TO EXPLORE</span>
                      <span>↓</span>
                  </div>

              </div>

      <Container>

        <div className={styles.portfolioSection}>
          <div className={styles.portfolioHeader}>
            <h2>Selected projects.</h2>
            <span>
              ({String(filteredProjects.length).padStart(2, '0')})
            </span>
          </div>

          <div
            className={styles.filters}
            role="group"
            aria-label="Filter projects"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`${styles.filterButton} ${
                  activeFilter === category
                    ? styles.activeFilter
                    : ''
                }`}
                aria-pressed={activeFilter === category}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div ref={gridRef} className={styles.projectsGrid}>
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.slug}`}
                className={styles.projectCard}
              >
                <div className={styles.imageWrapper}>
                  <picture>
                    {project.mobileCoverImage && (
                      <source
                        media="(max-width: 640px)"
                        srcSet={project.mobileCoverImage}
                      />
                    )}

                    <img
                      src={project.coverImage}
                      alt={project.title}
                      loading="lazy"
                    />
                  </picture>

                  <span className={styles.viewProject}>
                    ↗
                  </span>
                </div>

                <div className={styles.projectDetails}>
                  <div>
                    <span className={styles.projectCategory}>
                      {project.category}
                    </span>
                    <h3>{project.title}</h3>
                    <p>{project.client}</p>
                  </div>

                  <span className={styles.projectYear}>
                    {project.year}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className={styles.emptyState}>
              Projects in this category are coming soon.
            </p>
          )}
        </div>

        <div className={styles.bottomCta}>
          <span>HAVE A PROJECT IN MIND?</span>
          <h2>
            Let's create
            <br />
            something meaningful.
          </h2>
          <Link to="/#contact">
            Start a conversation ↗
          </Link>
        </div>
      </Container>
    </section>
  );
};
