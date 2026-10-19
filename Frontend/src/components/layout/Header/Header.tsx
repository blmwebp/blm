import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FullScreenMenu } from '../FullScreenMenu/FullScreenMenu';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide header
        setIsVisible(false);
      } else {
        // Scrolling up - show header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <>
      <header className={`${styles.header} ${isVisible ? styles.visible : styles.hidden}`}>
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={styles.logo}>
          <a href="/" className={styles.logoLink}>
            <img src="/images/big leaf media logo png.png" alt="Big Leaf Media" className={styles.logoImage} />
          </a>
        </div>
      </header>

      <FullScreenMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
};
