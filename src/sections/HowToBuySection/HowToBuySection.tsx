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
      'Download MetaMask or your wallet of choice from the App Store or Google Play for free. Desktop users can install the Google Chrome extension by going to MetaMask’s website.',
  },
  {
    title: 'GET SOME BNB',
    description:
      'Have BNB in your wallet to swap for $RYAN. If you don’t have any BNB, you can buy it directly on MetaMask, transfer from another wallet, or purchase from an exchange and send it to your wallet.',
  },
  {
    title: 'GO TO FOURMEME',
    description:
      'Go onto Fourmeme and paste the contract into the field to buy the token. Be careful of fakes!',
  },
  {
    title: 'SWAP FOR RYAN',
    description:
      'Swap BNB for $RYAN on Fourmeme. We have zero taxes, but be careful to use tight slippage so the BNB MEVs don’t get you!',
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
