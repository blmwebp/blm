import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '../../common/Container/Container';
import { navigationConfig } from '../../../config/navigation.config';
import { socialLinks } from '../../../config/social.config';
import styles from './Footer.module.css';

gsap.registerPlugin(ScrollTrigger);

const copyrightYear = new Date().getFullYear();
const footerTitle = 'web digital graphics';
const footerWords = ['web', 'digital', 'graphics'];
const socialIcons: Record<string, React.ReactNode> = {

  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.5 9.5v9M6.5 6.5v.05M10.5 18.5v-5a3 3 0 0 1 6 0v5M10.5 10v8.5" />
    </svg>
  ),
};

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const reveal = gsap.timeline({
        scrollTrigger: {
          trigger: footer,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
      });

      reveal
        .fromTo(
          contentRef.current,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' }
        )
        .fromTo(
          contentRef.current?.querySelectorAll(`.${styles.footerLetter}, .${styles.footerDot}`) ?? [],
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.035, ease: 'power2.out' },
          '-=0.15'
        );
    }, footer);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className={styles.footer}>
      <Container>
        <div ref={contentRef} className={styles.footerContent}>
          <div className={styles.socialLinks} aria-label="Social media">
            {Object.entries(socialLinks).map(([platform, url]) => {
              const icon = socialIcons[platform];
              if (!icon) return null;

              return url ? (
                <a
                  key={platform}
                  href={url}
                  className={styles.socialLink}
                  aria-label={`Visit our ${platform}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon}
                </a>
              ) : (
                <span key={platform} className={styles.socialLink} aria-label={`${platform} link not configured`}>
                  {icon}
                </span>
              );
            })}
          </div>

          <div className={styles.footerLinksGroup}>
            <h2 className={styles.footerHeading} aria-label={footerTitle}>
              {footerWords.map((word) => (
                <span className={styles.footerWord} key={word} aria-hidden="true">
                  {/* <span className={styles.footerDot} /> */}
                  {Array.from(word).map((character, index) => (
                    <span className={styles.footerLetter} key={`${character}-${index}`}>
                      {character}
                    </span>
                  ))}
                </span>
              ))}
            </h2>

            <nav className={styles.footerNav} aria-label="Footer navigation">
              <ul className={styles.navList}>
                {navigationConfig.footer.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className={styles.navLink}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

          </div>

          <div className={styles.footerBottom}>
            <p className={styles.copyright}>
              © {copyrightYear} BIG LEAF MEDIA. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
