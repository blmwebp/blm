import React from 'react';
import { navigationConfig } from '../../../config/navigation.config';
import styles from './Navigation.module.css';

export const Navigation: React.FC = () => {
  return (
    <nav className={styles.navigation} aria-label="Main navigation">
      <ul className={styles.navList}>
        {navigationConfig.main.map((item) => (
          <li key={item.href}>
            <a href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
