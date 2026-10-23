
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { Link } from 'react-router-dom';

import styles from './TeamPreview.module.css';

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

export const TeamPreview: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const firstLineRef = useRef<HTMLSpanElement>(null);
  const secondLineRef = useRef<HTMLSpanElement>(null);
  const firstImageRef = useRef<HTMLImageElement>(null);
  const secondImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          once: true,
        },
      });

      tl.to(firstLineRef.current, {
        duration: 1.5,
        scrambleText: {
          text: 'Human minds.',
          chars: 'upperAndLowerCase',
          revealDelay: 0.25,
          speed: 0.5,
        },
      });

      tl.to(
        secondLineRef.current,
        {
          duration: 1.5,
          scrambleText: {
            text: 'Unusual ideas.',
            chars: 'upperAndLowerCase',
            revealDelay: 0.25,
            speed: 0.5,
          },
        },
        '-=0.7'
      );

      /* Two images move toward their meeting point */
      tl.fromTo(
        firstImageRef.current,
        { x: -110, opacity: 0, rotation: -8 },
        {
          x: 0,
          opacity: 1,
          rotation: 0,
          duration: 1.3,
          ease: 'power3.out',
        },
        0.4
      );

      tl.fromTo(
        secondImageRef.current,
        { x: 110, opacity: 0, rotation: 8 },
        {
          x: 0,
          opacity: 1,
          rotation: 0,
          duration: 1.3,
          ease: 'power3.out',
        },
        0.4
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.teamPreview}
      aria-labelledby="team-preview-heading"
    >
      <div className={styles.previewLayout}>
        {/* LEFT TEXT */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            The people behind the work
          </span>

          <h2
            id="team-preview-heading"
            className={styles.heading}
            aria-label="Human minds. Unusual ideas."
          >
            <span
              ref={firstLineRef}
              className={styles.headingLine}
              aria-hidden="true"
            >
              Human minds.
            </span>

            <span
              ref={secondLineRef}
              className={styles.headingLine}
              aria-hidden="true"
            >
              Unusual ideas.
            </span>
          </h2>

          <Link className={styles.viewTeam} to="/team">
            <span>Meet the team</span>
            <span className={styles.arrow} aria-hidden="true">
              ↗
            </span>
          </Link>
        </div>

        {/* RIGHT IMAGES */}
        {/* <div className={styles.imageComposition} aria-hidden="true">
          <img
            ref={firstImageRef}
            src="/images/team/leaf1.png"
            alt=""
            className={`${styles.teamImage} ${styles.imageOne}`}
            loading="lazy"
          />

          <img
            ref={secondImageRef}
            src="/images/team/leaf2.png"
            alt=""
            className={`${styles.teamImage} ${styles.imageTwo}`}
            loading="lazy"
          />
        </div> */}
      </div>

      <span className={styles.index} aria-hidden="true">
        01 / 01
      </span>
    </section>
  );
};
