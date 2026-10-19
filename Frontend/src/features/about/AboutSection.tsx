
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '../../components/common/Container/Container';
import styles from './AboutSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const headlines = [
    'We think differently.',
    'We create impact.',
  ];

  const headlineRef = useRef<HTMLSpanElement>(null);
  const headlineIndexRef = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          once: true,
        },
      });

      timeline
        .fromTo(
          `.${styles.eyebrow}`,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
          }
        )
        .fromTo(
          `.${styles.annotation}`,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
          },
          '-=0.5'
        )
        .fromTo(
          `.${styles.description}`,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power2.out',
          },
          '-=0.4'
        )
        .fromTo(
          `.${styles.plantImage}`,
          {
            opacity: 0,
            y: 35,
            scale: 1.04,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.3,
            ease: 'power3.out',
          },
          '-=1'
        );
    }, section);

    return () => ctx.revert();
  }, []);


  useEffect(() => {
    const headline = headlineRef.current;
    if (!headline) return;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const rotation = gsap.timeline({
        repeat: -1,
        repeatDelay: 1.7,
      });

      rotation
        .to(headline, {
          yPercent: -100,
          opacity: 0,
          duration: 0.45,
          ease: 'power2.in',
        })
        .add(() => {
          headlineIndexRef.current =
            (headlineIndexRef.current + 1) % headlines.length;

          headline.textContent =
            headlines[headlineIndexRef.current];
        })
        .fromTo(
          headline,
          {
            yPercent: 100,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.55,
            ease: 'power3.out',
          }
        );
    }, headline);

    return () => ctx.revert();
  }, []);


  return (
    <section
      ref={sectionRef}
      id="about"
      className={styles.about}
    >
      <Container>
        <div className={styles.layout}>
          <div className={styles.textContent}>
            <p className={styles.eyebrow}>
              ABOUT BIG LEAF MEDIA
            </p>

            <h2 className={styles.heading}>
              <span className={styles.headingViewport}>
                <span
                  ref={headlineRef}
                  className={styles.rotatingHeadline}
                >
                  {headlines[0]}
                </span>
              </span>
            </h2>

            <div className={styles.annotations}>
              <span className={styles.annotation}>
               <b> EST. 2018 </b>
              </span>
              <span className={styles.annotation}>
               <b> CREATIVE × STRATEGIC </b>
              </span>
              <span className={styles.annotation}>
               <b> WEB / DIGITAL / GRAPHICS </b>
              </span>
            </div>

            <div className={styles.descriptionBlock}>
              <p className={styles.description}>
                Established in <b>2018 </b>, <b>Big Leaf Media</b> was built on
                a vision to deliver <b>innovative marketing solutions</b>.
                We specialize in creative <b>design, website
                development</b>, and strategic marketing that helps
                businesses engage audiences and achieve
                measurable growth.
              </p>

              <p className={styles.description}>
                From <b>trade fair execution</b> to <b>corporate events</b>,
                our commitment to <b>creativity and flawless
                execution</b> has enabled us to build lasting
                partnerships across multiple industries.
              </p>

              <p className={styles.description}>
                We believe great marketing goes beyond
                advertising—it creates <b>experiences</b>, builds <b>trust</b>,
                and <b>inspires action</b>. Every brand has a <b>unique
                story</b>, and we develop <b>customized strategies</b>
                designed to maximize <b>visibility and engagement</b>.
              </p>
            </div>
          </div>

          {/* Decorative plant composition */}
          <div className={styles.imageSide} aria-hidden="true">
            <div className={styles.backgroundImage}>
              <img
                src="/images/about/big_leaf.png"
                alt=""
                className={styles.plantImage}
                loading="lazy"
                width={928}
                height={1637}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
