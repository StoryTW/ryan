import dynamic from 'next/dynamic';
import React from 'react';

const HowToBuySection = dynamic(() => import('@/sections/HowToBuySection/HowToBuySection'));

export const MainPage = () => {
  return (
    <main>
      <HowToBuySection />
    </main>
  );
};
