import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ContactSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingText = 'Have a Project in Mind?';

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        gsap.set(coverRef.current, { y: '-100%' });
        gsap.set(contentRef.current, { opacity: 1, y: 0 });
        return;
      }

      // Animate cover sliding up to reveal content when section enters viewport
      gsap.fromTo(
        coverRef.current,
        {
          y: 0,
        },
        {
          y: '-100%',
          duration: 2,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            end: 'top 15%',
            scrub: 1,
          },
        }
      );

      // Fade in content as cover reveals
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 45%',
          },
        }
      );

      gsap.fromTo(
        contentRef.current?.querySelectorAll(`.${styles.headingLetter}`) ?? [],
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.035,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 45%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className={styles.contact}>
      <div className={styles.backgroundImage} />
      <div className={styles.overlay} />

      <div ref={coverRef} className={styles.cover} />

      <div ref={contentRef} className={styles.contactContent}>
        <h2 className={styles.heading} aria-label={headingText}>
          {Array.from(headingText).map((character, index) => (
            <span
              className={styles.headingLetter}
              key={`${character}-${index}`}
              aria-hidden="true"
            >
              {character === ' ' ? '\u00a0' : character}
            </span>
          ))}
        </h2>
        <p className={styles.description}>
          We're here to help bring your vision to life. Let's collaborate to create something extraordinary together.
        </p>
        <a
          href="mailto:bebig@blmindia.com"
          className={styles.cta}
        >
          Let's Talk <span className={styles.arrow}>↗</span>
        </a>
      </div>
    </section>
  );
};
