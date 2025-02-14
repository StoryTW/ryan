'use client';

import React from 'react';
import styles from './HowToBuySection.module.scss';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';

const data = [
  {
    title: 'Create Wallet',
    description:
      'Download Phantom or your wallet of choice from the app store or Google Play for free. Desktop users, download the Google Chrome extension by going to Phantom.',
  },
  {
    title: ' GET SOME SOL',
    description:
      'Have SOL in your wallet to switch to $RYAN. If you don’t have any SOL, you can buy directly on Phantom, transfer from another wallet, or buy on another exchange and send it to your wallet.',
  },
  {
    title: 'GO TO JUPITER',
    description:
      'Connect to Jupiter. Connect your wallet in chrome. Paste the $RYAN token address, select $RYAN, and confirm. When Phantom prompts you for a wallet signature, sign.',
  },
  {
    title: 'SWAP FOR RYAN',
    description:
      'Switch SOL for $RYAN. We have Zero taxes so you don’t need to worry about buying with a specific slippage.',
  },
];

const HowToBuySection = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h1>HOW TO BUY $RYAN?</h1>
        <div className={styles.list}>
          {data.map((item, i) => (
            <div className={styles.item} key={i}>
              <div className={styles.headerItem}>
                <div className={styles.index}>{`0${i + 1}`}</div>
                <h2>{item.title}</h2>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.slider}>
          <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <div className={styles.item}>
                  <div className={styles.headerItem}>
                    <div className={styles.index}>{`0${i + 1}`}</div>
                    <h2>{item.title}</h2>
                  </div>
                  <p>{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Image
        src={'/images/stickerHowToBuy.png'}
        width={483}
        height={450}
        alt=''
        className={styles.sticker}
      />
    </div>
  );
};

export default HowToBuySection;
