'use client';

import React, { useState } from 'react';
import styles from './Header.module.scss';
import Logo from '@/assets/images/icons/logo.svg';
import { SOCIALS } from './data';
import Link from 'next/link';
import IconBurger from '@/assets/images/icons/burger.svg';
import IconClose from '@/assets/images/icons/close.svg';

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  return (
    <header className={styles.header}>
      <div className={styles.innerHeader}>
        <div className={styles.left}>
          <Logo />
          <h1 className={styles.title}>ZORG NATION</h1>
        </div>
        <div className={styles.socials}>
          {SOCIALS.map((social, i) => (
            <Link href={social.href} key={i}>
              {social.icon}
            </Link>
          ))}
        </div>
        <Link href={'/'} className={styles.button}>
          BUY $ZORG
        </Link>
        <button className={styles.burger} onClick={() => setIsOpenMenu((props) => !props)}>
          {!isOpenMenu ? <IconBurger /> : <IconClose />}
        </button>
      </div>
      {isOpenMenu && (
        <div className={styles.menu}>
          <div className={styles.socials}>
            {SOCIALS.map((social, i) => (
              <Link href={social.href} key={i}>
                {social.icon}
              </Link>
            ))}
          </div>
          <Link href={'/'} className={styles.button}>
            BUY $ZORG
          </Link>
        </div>
      )}
    </header>
  );
};
