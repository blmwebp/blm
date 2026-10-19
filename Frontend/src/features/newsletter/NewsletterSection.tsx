import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '../../components/common/Container/Container';
import styles from './NewsletterSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 32,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <section ref={sectionRef} className={styles.newsletter}>
      <Container>
        <div ref={contentRef} className={styles.newsletterContent}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>A LITTLE INSPIRATION, DELIVERED</p>
            <h2 className={styles.heading} id="newsletter-heading">
              <span>Stay </span>
              <span>Inspired.</span>
            </h2>
            <p className={styles.description}>
              Join our community and get the latest insights, inspiration, and updates delivered straight to your inbox.
            </p>
          </div>

          <div className={styles.signup}>
            <p className={styles.signupLabel}>GOOD THINGS, EVERY SO OFTEN.</p>
            <form onSubmit={handleSubmit} className={styles.form} aria-labelledby="newsletter-heading">
              <label className={styles.visuallyHidden} htmlFor="newsletter-email">
                Your email address
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  id="newsletter-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className={styles.input}
                  required
                  disabled={isSubmitted}
                  aria-describedby={isSubmitted ? 'newsletter-message' : undefined}
                />
                <button
                  type="submit"
                  className={styles.submit}
                  disabled={!isValidEmail(email) || isSubmitted}
                >
                  <span>{isSubmitted ? 'Subscribed' : 'Subscribe'}</span>
                  {!isSubmitted && <ArrowUpRight aria-hidden="true" size={20} />}
                </button>
              </div>
            </form>

            {isSubmitted && (
              <p className={styles.message} id="newsletter-message" role="status" aria-live="polite">
                Thanks for subscribing! You're on the list.
              </p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
