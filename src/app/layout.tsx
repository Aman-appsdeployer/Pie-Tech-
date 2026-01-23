'use client';

import Lenis from 'lenis';
import { Montserrat } from 'next/font/google';
import { useEffect } from 'react';

import ShadowCursor from '@/components/ui/ShadowCursor';
import Footer from '@/widgets/Footer';
import Header from '@/widgets/Header';

import '@/shared/styles/globals.scss';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08, // smoothness control (valid option)
    });

    let rafId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="en">
      <body className={montserrat.className}>
        {/* GLOBAL HEADER */}
        <Header />

        {/* GLOBAL CURSOR */}
        <ShadowCursor />

        {/* PAGE CONTENT */}
        <main className="pt-[80px] min-h-screen">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
