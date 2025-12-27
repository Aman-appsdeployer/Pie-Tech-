'use client';

import ScrollHighlightText from '@/components/ui/scroll/ScrollHighlightText';

export default function About() {
  return (
    <section className="relative border-t border-white/10  px-[6vw] py-[12vw] md:py-[10vw]">
      
      {/* SMALL TAGLINE */}
      <p className="mb-[4vw] text-center text-[3.9vw] md:text-[2.4vw]
        tracking-[0.4em] uppercase text-gray-500">
        BUILT ON STRATEGY. DRIVEN BY TRUST.

      </p>

      {/* MAIN SCROLL TEXT */}
      <ScrollHighlightText
        text="
        The story of Pie Tech Solutions begins with trust.
        We believe in partnering with ambitious brands,
        building meaningful digital experiences,
        and delivering technology that drives real growth.
        "
        className="
          font-serif
          text-[5.6vw] md:text-[5vw]
          text-gray-500
          text-center
        "
        highlightColor="text-white"
      />
    </section>
  );
}
