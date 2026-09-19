"use client";

import { FC } from "react";

import HoverCards from "@/components/ui/HoverCards";
import SectionOpacity from "@/components/ui/SectionOpacity";
import SectionTitle from "@/components/ui/SectionTitle";

import { APPROACH_CARDS } from "@/data";

interface Props {}

const Approach: FC<Props> = () => {
  return (
    <section
      id="approach"
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        text-white
        py-16
        md:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          AMBIENT BACKGROUND GLOW

          No solid bg-black here.
          This keeps the global cursor / ShadowCursor
          effect visible over this section.
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Left orange glow */}

        <div
          className="
            absolute
            -left-40
            top-[10%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-orange-500/[0.06]
            blur-[140px]
          "
        />

        {/* Right orange glow */}

        <div
          className="
            absolute
            -right-40
            top-[35%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-amber-400/[0.045]
            blur-[150px]
          "
        />

        {/* Center subtle glow */}

        <div
          className="
            absolute
            left-1/2
            top-[55%]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-orange-500/[0.025]
            blur-[170px]
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
            bg-orange-400/[0.03]
            blur-[150px]
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10">
        <SectionOpacity>
          {/* =================================================
              SECTION TITLE
          ================================================= */}

          <SectionTitle
            title="APPROACH."
            className="
              px-[6vw]
              pt-0
              md:px-[3vw]
              top-0
              z-20
            "
          />

          {/* =================================================
              CARDS
          ================================================= */}

          <div
            className="
              px-5
              pt-8
              sm:px-8
              md:px-[3vw]
              md:pt-10
            "
          >
            <HoverCards cards={APPROACH_CARDS} />
          </div>
        </SectionOpacity>
      </div>

      {/* =====================================================
          SUBTLE BOTTOM FADE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-0
          h-32
          w-full
          bg-gradient-to-t
          from-black/10
          to-transparent
        "
      />
    </section>
  );
};

export default Approach;


// 'use client';

// import { FC } from 'react';

// import HoverCards from '@/components/ui/HoverCards';
// import SectionOpacity from '@/components/ui/SectionOpacity';
// import SectionTitle from '@/components/ui/SectionTitle';

// import { APPROACH_CARDS } from '@/data';

// interface Props {}

// const Approach: FC<Props> = () => {
//   return (
//     <section
//       id="approach"
//       className="
//         border-t
//         border-white/10
//         bg-black text-white
//         py-16 md:py-24 lg:py-28
//       "
//     >
//       <SectionOpacity>
//         {/* SECTION TITLE */}
//         <SectionTitle
//           title="APPROACH."
//           className="
//             px-[6vw] md:px-[3vw]
//             pt-0
//             top-0
//             z-20
            
//           "
//         />

//         {/* CARDS */}
//         <div className="px-5 pt-8 sm:px-8 md:px-[3vw] md:pt-10">
//           <HoverCards cards={APPROACH_CARDS} />
//         </div>
//       </SectionOpacity>
//     </section>
//   );
// };

// export default Approach;
