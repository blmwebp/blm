import React from 'react';
import styles from './TeamPreview.module.css';
import { Link } from 'react-router-dom';

export const TeamPreview: React.FC = () => (
  <section className={styles.teamPreview} aria-labelledby="team-preview-heading">
    <div className={styles.image} aria-hidden="true" />
    <div className={styles.content}>
      <span className={styles.eyebrow}>The people behind the work</span>
      <h2 id="team-preview-heading" className={styles.heading}>
        Human minds.
        <br />
        Unusual ideas.
      </h2>
      <Link className={styles.viewTeam} to="/team">
        <span>Meet the team</span>
        <span className={styles.arrow} aria-hidden="true">↗</span>
      </Link>
    </div>
    <span className={styles.index} aria-hidden="true">01 / 01</span>
  </section>
);
