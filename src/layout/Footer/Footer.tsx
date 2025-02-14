import React from 'react';
import styles from './Footer.module.scss';
// import { Socials } from '@/components/Socials/Socials';
// import { Logo } from '@/components/Logo/Logo';

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            {/* <Logo />
            <Socials /> */}
          </div>
          <button type='button' tabIndex={-1} className={styles.btn}>
            BUY $Zorg
          </button>
        </div>
      </div>
    </footer>
  );
};
