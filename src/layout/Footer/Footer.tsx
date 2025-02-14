import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <p>
          $RYAN is a meme coin with no intrinsic value or expectation of financial return. $RYAN is
          completely useless and for entertainment purposes only. By purchasing $RYAN, you agree
          that you have seen this disclaimer.
        </p>
        <Image src={'/images/stickerFooter.png'} width={385} height={345} alt='' />
      </div>
    </footer>
  );
};
