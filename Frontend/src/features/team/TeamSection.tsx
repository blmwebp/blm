import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { teamMembers } from './data/team';
import { Container } from '../../components/common/Container/Container';
import styles from './TeamSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export const TeamSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${styles.sectionHeading}`,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.team-member',
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.team}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.sectionHeading}>
            Human Minds.
            <br />
            Unusual Ideas.
          </h2>
        </div>

        <div className={styles.teamList}>
          {teamMembers.map((member, index) => (
            <article
              key={member.id}
              className={`${styles.teamMember} team-member ${index % 2 === 0 ? styles.imageLeft : styles.imageRight}`}
            >
              <div className={styles.memberImage}>
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                />
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>- {member.role}</p>
                <p className={styles.memberDescription}>
                  {member.name} {member.description} 
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
