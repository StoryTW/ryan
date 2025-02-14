import HowToBuySection from '@/sections/HowToBuySection/HowToBuySection';
import MeetSection from '@/sections/MeetSection/MeetSection';
import dynamic from 'next/dynamic';
import React from 'react';

const InfoSection = dynamic(() => import('@/sections/InfoSection/InfoSection'));

export const MainPage = () => {
  return (
    <main>
      <MeetSection />
      <InfoSection />
      <HowToBuySection />
    </main>
)
}