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
    title: 'CREATE WALLET',
    description:
      'Download Phantom or your preferred BNB wallet from the App Store or Google Play. Desktop users can install the Metamask extension from their website.',
  },
  {
    title: 'GET SOME BNB',
    description:
      'Have BNB in your wallet to swap for $RYAN. If you don’t have any BNB, you can buy it directly in your wallet, transfer from another wallet, or purchase from an exchange and send it to your BNB wallet.',
  },
  {
    title: 'GO TO Four.Meme',
    description:
      'Head over to Four.Meme and paste the $RYAN contract address into the field to find the token. Watch out for fakes!',
  },
  {
    title: 'SWAP FOR RYAN',
    description:
      'Swap BNB for $RYAN on Four.Meme. There are zero taxes, but make sure to confirm slippage settings and avoid frontrunning bots!',
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
        src={'/images/stickerHowToBuy2.png'}
        width={433}
        height={450}
        alt=''
        className={styles.sticker}
      />
    </div>
  );
};

export default HowToBuySection;
