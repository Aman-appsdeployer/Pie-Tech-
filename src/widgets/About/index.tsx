"use client";

import ScrollHighlightText from "@/components/ui/scroll/ScrollHighlightText";

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
        relative
        overflow-hidden
        border-y
        border-white/[0.08]
        text-white
        px-5
        py-16
        sm:px-8
        md:py-24
        lg:px-[6vw]
        lg:py-28
      "
    >
      {/* =====================================================
          AMBIENT BACKGROUND GLOW

          No solid bg-[#020303] here.
          This allows the global cursor / ShadowCursor
          background effect to remain visible.
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Left orange glow */}

        <div
          className="
            absolute
            -left-32
            top-0
            h-80
            w-80
            rounded-full
            bg-orange-500/10
            blur-[100px]
          "
        />

        {/* Right orange glow */}

        <div
          className="
            absolute
            -right-40
            top-[35%]
            h-96
            w-96
            rounded-full
            bg-orange-400/[0.045]
            blur-[130px]
          "
        />

        {/* Center subtle glow */}

        <div
          className="
            absolute
            left-1/2
            top-[55%]
            h-[450px]
            w-[450px]
            -translate-x-1/2
            rounded-full
            bg-orange-500/[0.025]
            blur-[160px]
          "
        />

        {/* Bottom glow */}

        <div
          className="
            absolute
            bottom-[-180px]
            left-1/2
            h-[400px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-amber-400/[0.035]
            blur-[150px]
          "
        />
      </div>

      {/* =====================================================
          SMALL HEADING
      ===================================================== */}

      <p
        className="
          relative
          z-10
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

      {/* =====================================================
          STORY
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1200px]
          space-y-16
          md:space-y-20
        "
      >
        {story.map((paragraph, index) => (
          <ScrollHighlightText
            key={index}
            text={paragraph}
            className="
              text-center
              font-serif
              text-[5.4vw]
              leading-[1.22]
              sm:text-[4.7vw]
              md:text-[3.2vw]
              lg:text-[2.65vw]
            "
          />
        ))}
      </div>

      {/* =====================================================
          BOTTOM AMBIENT FADE

          Very subtle so the cursor effect isn't hidden.
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-0
          h-40
          w-full
          bg-gradient-to-t
          from-black/10
          to-transparent
        "
      />
    </section>
  );
}








// 'use client';

// import ScrollHighlightText from '@/components/ui/scroll/ScrollHighlightText';

// const story = [
//   "The story of Pie-Tech Solutions begins with trust. We believe in partnering with ambitious brands, building meaningful digital experiences, and delivering technology that drives real growth.",

//   "At Pie-Tech Solutions, success is measured not just by numbers, but by the relationships we build and the value we create.",

//   "Every milestone achieved by our clients becomes a part of our own journey.",

//   "As technology continues to evolve, so do we—constantly learning, adapting, and pushing boundaries.",

//   "Because for us, this is more than business; it's about creating lasting impact, one brand at a time.",
// ];

// export default function About() {
//   return (
//     <section
//       className="
//         relative overflow-hidden
//         border-y border-white/[0.08]
//         bg-[#020303] text-white
//         px-5 py-16
//         sm:px-8
//         md:py-24
//         lg:px-[6vw] lg:py-28
//       "
//     >
//       {/* Background Glow */}
//       <div
//         className="
//           pointer-events-none
//           absolute -left-32 top-0
//           h-80 w-80
//           rounded-full
//           bg-orange-500/10
//           blur-[100px]
//         "
//       />

//       {/* Small Heading */}
//       <p
//         className="
//           mb-12
//           text-center
//           text-xs
//           uppercase
//           tracking-[0.35em]
//           text-white/45
//           md:mb-16
//           md:text-sm
//           lg:text-base
//         "
//       >
//         BUILT ON STRATEGY. DRIVEN BY TRUST.
//       </p>

//       {/* Story */}
//       <div className="mx-auto max-w-[1200px] space-y-16">
//         {story.map((paragraph, index) => (
//           <ScrollHighlightText
//             key={index}
//             text={paragraph}
//             className="
//               text-center
//               font-serif
//               text-[5.4vw]
//               leading-[1.22]
//               sm:text-[4.7vw]
//               md:text-[3.2vw]
//               lg:text-[2.65vw]
//             "
//           />
//         ))}
//       </div>
//     </section>
//   );
// }