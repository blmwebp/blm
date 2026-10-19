
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { services } from './data/services';
import { Container } from '../../components/common/Container/Container';
import styles from './ServicesSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const serviceVisuals = [
  '/images/services/ser1.png',
  '/images/services/ser2.png',
  '/images/services/ser3.jpg',
];

export const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${styles.eyebrow}, .${styles.sectionHeading}, .${styles.intro}`,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 78%',
            once: true,
          },
        }
      );

      const rows = gsap.utils.toArray<HTMLElement>(
        `.${styles.serviceItem}`
      );

      rows.forEach((row, index) => {
        const card = row.querySelector<HTMLElement>(
          `.${styles.serviceCard}`
        );
        const content = row.querySelector<HTMLElement>(
          `.${styles.serviceContent}`
        );
        const image = row.querySelector<HTMLElement>(
          `.${styles.cardImage}`
        );

        if (!card || !content) return;

        const cardDirection = index % 2 === 0 ? -75 : 75;

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: 'top 82%',
            once: true,
          },
        });

        timeline
          .fromTo(
            card,
            {
              x: cardDirection,
              opacity: 0,
              scale: 0.94,
            },
            {
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 1.15,
              ease: 'power3.out',
            }
          )
          .fromTo(
            content.children,
            {
              y: 35,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.1,
              ease: 'power3.out',
            },
            '-=0.8'
          );

        if (image) {
          timeline.fromTo(
            image,
            { scale: 1.12 },
            {
              scale: 1,
              duration: 1.4,
              ease: 'power2.out',
            },
            0
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className={styles.services}
    >
      <Container>
        <header className={styles.header}>
          <p className={styles.eyebrow}>What we do</p>

          <h2 className={styles.sectionHeading}>
            Creative thinking.
            <br />
            Real impact.
          </h2>

          <p className={styles.intro}>
            Three disciplines. One creative mindset.
            We build powerful digital and visual
            experiences for brands.
          </p>
        </header>

        <div className={styles.servicesList}>
          {services.map((service, index) => (
            <article
              key={service.id}
              className={`${styles.serviceItem} ${
                index % 2 !== 0 ? styles.reversed : ''
              }`}
            >
              <div className={styles.serviceCard}>
                <div className={styles.cardMedia}>
                  <img
                    src={serviceVisuals[index] ?? ''}
                    alt=""
                    className={styles.cardImage}
                    loading="lazy"
                  />
                </div>

                <div className={styles.cardOverlay}>
                  <span className={styles.cardNumber}>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3 className={styles.cardTitle}>
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className={styles.serviceContent}>
                <span className={styles.serviceLabel}>
                  0{index + 1} / OUR EXPERTISE
                </span>

                {/* <h3 className={styles.contentTitle}>
                  {service.title}
                </h3> */}

                <p className={styles.serviceDescription}>
                  {service.description}
                </p>

                <div className={styles.serviceAccent}>
                  <span className={styles.accentLine} />
                  <span>CREATIVE EXPERTISE</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
