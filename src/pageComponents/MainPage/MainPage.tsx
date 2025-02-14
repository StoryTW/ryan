import dynamic from 'next/dynamic';
import React from 'react';

const InfoSection = dynamic(() => import('@/sections/InfoSection/InfoSection'));

export const MainPage = () => {
  return (
    <main>
      <InfoSection />
    </main>
  );
};
