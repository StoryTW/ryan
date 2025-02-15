import React from 'react';
import styles from './InfoSection.module.scss';
import Image from 'next/image';

export default function InfoSection() {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <div className={styles.border}>
          <div className={styles.card}>
            <div className={styles.wrp}>
              <div className={styles.text}>
                Ryan the Lion, with his calm demeanor and dependable nature, is ready to lead the
                pride into new horizons. Now, he's taking his first brave steps into the vibrant
                world of BNB with $RYAN, a memecoin that captures his playful spirit, sense of
                unity, and love for adventure.
                <br />
                <br />
                Join the pride and embark on this wild adventure with Ryan the Lion! Let’s roar our
                way into a new era on BNB!
              </div>
            </div>
          </div>

          <div className={styles.btn}>HOW TO BUY?</div>

          <div className={styles.lion1}>
            <Image src={'/images/lion-1.svg'} alt='lion-1' fill />
          </div>

          <div className={styles.lion2}>
            <Image src={'/images/lion-2.svg'} alt='lion-2' fill />
          </div>

          <div className={styles.lion3}>
            <Image src={'/images/lion-3.svg'} alt='lion-3' fill />
          </div>
        </div>
      </div>
    </section>
  );
}
