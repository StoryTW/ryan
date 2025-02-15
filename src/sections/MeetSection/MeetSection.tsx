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

          <div className={styles.explorar2}>
            EXPLORE!
          </div>

          {/* <Image
            src={'/images/explorar2.svg'}
            alt='explorar2'
            width={174}
            height={89}
            className={styles.explorar2}
          /> */}
        </div>
      </div>

      <div className={styles.explorar}>
        EXPLORE!
      </div>
    </section>
  );
}
