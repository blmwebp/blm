import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '../../components/common/Container/Container';
import styles from './MetricsSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  {
    value: 8,
    suffix: '',
    label: 'Years of experience',
    description: 'Building brands with intention',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Projects completed',
    description: 'From identity to digital experiences',
  },
  {
    value: 20,
    suffix: '+',
    label: 'Team members',
    description: 'Creative minds, one shared vision',
  },
];

export const MetricsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(`.${styles.metric}`);

      gsap.fromTo(
        items,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 78%',
            once: true,
          },
        }
      );

      items.forEach((item) => {
        const counter = item.querySelector<HTMLElement>(`.${styles.metricValue}`);
        if (!counter) return;

        const target = Number(counter.dataset.value);
        const suffix = counter.dataset.suffix ?? '';
        const count = { value: 0 };

        gsap.to(count, {
          value: target,
          duration: 1.4,
          delay: 0.15,
          ease: 'power2.out',
          snap: { value: 1 },
          scrollTrigger: {
            trigger: section,
            start: 'top 78%',
            once: true,
          },
          onUpdate: () => {
            counter.textContent = `${Math.round(count.value)}${suffix}`;
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.metrics} aria-label="Big Leaf Media in numbers">
      <Container>
        <div className={styles.metricsGrid}>
          {metrics.map((metric) => (
            <article
              className={styles.metric}
              key={metric.label}
              aria-label={`${metric.value}${metric.suffix} ${metric.label}`}
            >
              <span
                className={styles.metricValue}
                data-value={metric.value}
                data-suffix={metric.suffix}
                aria-hidden="true"
              >
                {metric.value}{metric.suffix}
              </span>
              <h2 className={styles.metricLabel}>{metric.label}</h2>
              <p className={styles.metricDescription}>{metric.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
