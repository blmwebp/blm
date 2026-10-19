import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './RevealText.module.css';

interface RevealTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const RevealText: React.FC<RevealTextProps> = ({
  children,
  delay = 0,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const spans = container.querySelectorAll('span');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(spans, { clearProps: 'transform,opacity' });
      return;
    }

    gsap.fromTo(
      spans,
      {
        y: '100%',
        opacity: 0,
      },
      {
        y: '0%',
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.05,
        delay,
      }
    );
  }, [delay]);

  return (
    <div ref={containerRef} className={`${styles.revealText} ${className}`}>
      {React.Children.map(children, (child) => (
        <span>{child}</span>
      ))}
    </div>
  );
};
