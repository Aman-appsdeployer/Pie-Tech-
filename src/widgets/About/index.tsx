



'use client';

import ScrollHighlightText from '@/components/ui/scroll/ScrollHighlightText';

const story = [
  "The story of Pie-Tech Solutions begins with trust. We believe in partnering with ambitious brands, building meaningful digital experiences, and delivering technology that drives real growth.",

  "At Pie-Tech Solutions, success is measured not just by numbers, but by the relationships we build and the value we create.",

  "Every milestone achieved by our clients becomes a part of our own journey.",

  "As technology continues to evolve, so do we—constantly learning, adapting, and pushing boundaries.",

  "Because for us, this is more than business; it's about creating lasting impact, one brand at a time.",
];

export default function About() {
  return (
    <section
      className="
        relative overflow-hidden
        border-y border-white/[0.06]
        bg-[#050505] text-white
        px-5 py-16
        sm:px-8
        md:py-24
        lg:px-[6vw] lg:py-28
      "
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[100px]" />

      {/* Small Heading */}
      <p
        className="
          mb-12
          text-center
          text-xs
          uppercase
          tracking-[0.35em]
          text-white/45
          md:mb-16
          md:text-sm
          lg:text-base
        "
      >
        BUILT ON STRATEGY. DRIVEN BY TRUST.
      </p>

      {/* Story */}
      <div className="mx-auto max-w-[1200px] space-y-16">
        {story.map((paragraph, index) => (
          <ScrollHighlightText
            key={index}
            text={paragraph}
            className="
              text-center
              font-serif
              text-[5.4vw]
              leading-[1.22]
              text-white
              sm:text-[4.7vw]
              md:text-[3.2vw]
              lg:text-[2.65vw]
            "
          />
        ))}
      </div>
    </section>
  );
}