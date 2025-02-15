import React from 'react';
import styles from './MeetSection.module.scss';
import Image from 'next/image';

export default function MeetSection() {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.text}>Meet Ryan the Lion</div>

          <div className={styles.roar}>
            <span>ROAR!</span>
          </div>

          <div className={styles.explorar2}>EXPLORE!</div>
        </div>
      </div>

      <div className={styles.explorar}>EXPLORE!</div>
    </section>
  );
}
