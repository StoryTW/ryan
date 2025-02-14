import React from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.privacy}>
            <Link href={'/'}>
              Privacy Policy
            </Link>
            <Link href={'/'}>
              Terms of Use
            </Link>
          </div>

          <div className={styles.logo}>
            <Image src={'/images/Logo.svg'} width={202} height={70} alt='logo' />
          </div>

          <div className={styles.socials}>
            <Link href={'https://x.com/RyanTheLionCoin'} target='_blank' className={styles.btn}>
              <Image src={'/images/twitter.svg'} width={48} height={48} alt='twitter' />
            </Link>

            <Link href={'https://t.me/RyanTheLionBNB'} target='_blank' className={styles.btn}>
              <Image src={'/images/tg.svg'} width={48} height={48} alt='tg' />
            </Link>
          </div>
        </div>
        <div className={styles.privacy2}>
          <Link href={'/'}>
            Privacy Policy
          </Link>
          <Link href={'/'}>
            Terms of Use
          </Link>
        </div>
      </div>
    </header>
  );
};
