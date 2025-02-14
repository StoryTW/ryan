import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import localFont from 'next/font/local';
import '@/assets/styles/index.scss';
import { Header } from '@/layout/Header/Header';
import { Footer } from '@/layout/Footer/Footer';
import FaviconPng from '/public/favicon.jpg';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const lonelyCoffee = localFont({
  src: [
    {
      path: './fonts/lonely-coffee/Lonely-Coffee-400.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/lonely-coffee/Lonely-Coffee-400.otf',
      weight: '400',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Ryan the Lion',
  description: 'Ryan the Lion',
  icons: {
    icon: FaviconPng.src,
    apple: FaviconPng.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${lonelyCoffee.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
