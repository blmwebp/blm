import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { partners } from './data/partners';
import { Container } from '../../components/common/Container/Container';
import styles from './PartnersSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export const PartnersSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${styles.sectionHeading}`,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.partner-logo',
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.partners}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.sectionHeading}>
            Partners &amp; collaborators.
          </h2>
        </div>

        <div className={styles.partnersGrid} aria-label="Partner company logos">
          {partners.map((partner) => (
            <div key={partner.name} className={`${styles.partnerLogo} partner-logo`}>
              <img src={partner.image} alt={`${partner.name} logo`} loading="lazy" />
            </div>
          ))}
          
        </div>
      </Container>
    </section>
  );
};
