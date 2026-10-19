import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { gsap } from 'gsap';
import styles from './FullScreenMenu.module.css';

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FullScreenMenu: React.FC<FullScreenMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState(0);

  const menuItems = [
    {
      label: 'Work',
      href: '#projects',
      image: '/images/leaf2.png',
      potImages: ['/images/pots/tree2.png']
    },
    {
      label: 'About',
      href: '#about',
      image: '/images/about/big leaf image.webp',
      potImages: ['/images/pots/tree3.png',]
    },
    {
      label: 'Services',
      href: '#services',
      image: '/images/services.jpg',
      potImages: ['/images/pots/bonsoi1.png']
    },
    {
      label: 'Contact',
      href: '#contact',
      image: '/images/hero-studio.jpg',
      potImages: ['/images/pots/tree6.png']
    },
  ];

  useEffect(() => {
    if (!isOpen) return;

    gsap.fromTo(
      `.${styles.potImage}`,
      {
        opacity: 0,
        y: 50,
        scale: 0.85,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.65,
        ease: 'power3.out',
      }
    );
  }, [activeImage, isOpen]);

  const handleHover = (index: number) => {
    if (index === activeImage) return;

    gsap.to(`.${styles.potImage}`, {
      opacity: 0,
      y: 30,
      scale: 0.9,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        setActiveImage(index);
      },
    });
  };

  const handleLinkClick = (href: string) => {
    onClose();
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div ref={menuRef} className={styles.menuOverlay}>
      <div className={styles.overlay} />

      <div className={styles.backgroundTypography} aria-hidden="true">
        <span
          key={activeImage}
          className={styles.backgroundTitle}
        >
          {menuItems[activeImage].label}
        </span>
      </div>

      <div
        className={`
        ${styles.floatingArtwork}
        ${activeImage % 2 === 0
            ? styles.artworkLeft
            : styles.artworkRight}
      `}
        aria-hidden="true"
      >
        <div className={styles.potContainer}>
          {menuItems[activeImage]?.potImages?.map((potImage, index) => (
            <img
              key={`${activeImage}-${index}`}
              src={potImage}
              alt=""
              className={styles.potImage}
            />
          ))}
        </div>
      </div>
      <button
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Close menu"
      >
        <X size={32} />
      </button>

      <nav className={styles.menuNav}>
        <ul className={styles.menuList}>
          {menuItems.map((item, index) => (
            <li key={item.href} className="menu-item">
              <a
                href={item.href}
                className={styles.menuLink}
                onMouseEnter={() => handleHover(index)}
                onFocus={() => handleHover(index)}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
