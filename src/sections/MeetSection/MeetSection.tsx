import React from 'react';
import styles from './MeetSection.module.scss';
import Image from 'next/image';

export default function MeetSection() {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.text}>Meet Ryan the Lion</div>

          <Image
            src={'/images/roar.png'}
            alt='roar'
            width={189}
            height={135}
            className={styles.roar}
          />

          <Image
            src={'/images/explorar2.svg'}
            alt='explorar2'
            width={174}
            height={89}
            className={styles.explorar2}
          />
        </div>
      </div>

      <Image
        src={'/images/explorar.png'}
        alt='explorar'
        width={310}
        height={159}
        className={styles.explorar}
      />
    </section>
  );
}
