import React from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'max';
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'max',
  className = '',
}) => {
  const sizeClass = styles[`container${size.charAt(0).toUpperCase() + size.slice(1)}`];

  return <div className={`${styles.container} ${sizeClass} ${className}`}>{children}</div>;
};
