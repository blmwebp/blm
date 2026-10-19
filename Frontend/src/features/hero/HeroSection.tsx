import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { RevealText } from '../../components/common/RevealText/RevealText';
import styles from './HeroSection.module.css';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${styles.heroContents}`,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          delay: 0.5,
        }
      );

      gsap.fromTo(
        `.${styles.scrollIndicator}`,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          delay: 1.5,
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={styles.hero}>
      <div className={styles.videoBackground}>
        <video
          ref={videoRef}
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-studio.jpg"
          aria-hidden="true"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <div className={styles.heroContents}>
          <RevealText delay={0.2}>
            <h1 className={styles.headline}>
              We Make Brands Move.
            </h1>
          </RevealText>
          <p className={styles.subhead}>
            We turn bold ideas into brands people feel, remember, and choose.
          </p>
        </div>
      </div>

      <a
        className={styles.scrollIndicator}
        href="#about"
        aria-label="Scroll to learn about us"
      >
        <span className={styles.scrollMouse} aria-hidden="true">
          <span className={styles.scrollWheel} />
        </span>
        <span className={styles.scrollChevron} aria-hidden="true" />
      </a>
    </section>
  );
};
