"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";

import Button from "@/components/ui/Button";
import SectionOpacity from "@/components/ui/SectionOpacity";

const FinalCTA: FC = () => {
  const router = useRouter();

  return (
    <section
      className="
        relative
        overflow-hidden
        py-24
        text-white
        md:py-32
      "
    >
      {/* =========================================================
          AMBIENT BACKGROUND
          No solid bg-black so the global ShadowCursor stays visible
      ========================================================= */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          overflow-hidden
        "
      >
        {/* Orange Glow */}
        <div
          className="
            absolute
            left-[-120px]
            top-[-120px]
            h-[350px]
            w-[350px]
            rounded-full
            bg-orange-500/15
            blur-3xl
          "
        />

        {/* Amber Glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[300px]
            w-[300px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-amber-400/5
            blur-3xl
          "
        />

        {/* Purple Glow */}
        <div
          className="
            absolute
            bottom-[-120px]
            right-[-120px]
            h-[350px]
            w-[350px]
            rounded-full
            bg-purple-500/10
            blur-3xl
          "
        />

        {/* Bottom Fade */}
        <div
          className="
            absolute
            bottom-0
            left-0
            h-32
            w-full
            bg-gradient-to-t
            from-black/20
            to-transparent
          "
        />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}
      <SectionOpacity>
        <div
          className="
            relative
            z-10
            mx-auto
            max-w-4xl
            px-5
            text-center
            sm:px-8
            md:px-10
          "
        >
          {/* Brand Tag */}
          <p
            className="
              mb-4
              text-xs
              font-medium
              uppercase
              tracking-[0.3em]
              text-orange-300/70
              sm:text-sm
            "
          >
            Pie Tech Solutions
          </p>

          {/* Heading */}
          <h2
            className="
              text-3xl
              font-bold
              leading-[1.1]
              tracking-tight
              text-white
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            Let&apos;s work together
            <br />

            <span
              className="
                bg-gradient-to-r
                from-orange-400
                via-amber-300
                to-orange-400
                bg-clip-text
                text-transparent
              "
            >
              A Powerful Digital Experience
            </span>
          </h2>

          {/* Main Description */}
          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-relaxed
              text-gray-300
              sm:text-base
              md:text-lg
            "
          >
            At{" "}
            <span className="font-semibold text-white">
              Pie Tech Solutions
            </span>
            , we don&apos;t just build websites — we create scalable,
            high-performance digital solutions that help your business grow,
            attract customers, and stand out in today&apos;s competitive
            market.
          </p>

          {/* Supporting Description */}
          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-relaxed
              text-gray-400
              sm:text-base
            "
          >
            Whether you&apos;re launching a new idea or upgrading your
            existing product, our team is ready to bring your vision to life
            with modern design, clean code, and strategic thinking.
          </p>

          {/* =====================================================
              BUTTONS
          ===================================================== */}
          <div
            className="
              mt-10
              flex
              flex-col
              justify-center
              gap-4
              sm:flex-row
            "
          >
            {/* Primary CTA */}
            <Button
              onClick={() => router.push("/contact")}
              title="Start Your Project"
              classes="
                w-full
                rounded-xl
                bg-orange-400
                px-8
                py-4
                text-base
                font-semibold
                text-black
                shadow-md
                transition-all
                duration-300
                hover:bg-orange-500
                hover:shadow-lg
                hover:shadow-orange-500/20
                sm:w-auto
              "
            />

            {/* Secondary CTA */}
            <Button
              onClick={() => router.push("/about")}
              title="Learn More"
              classes="
                w-full
                rounded-xl
                border
                border-orange-400/70
                px-8
                py-4
                text-base
                font-semibold
                text-orange-300
                transition-all
                duration-300
                hover:border-orange-400
                hover:bg-orange-400/10
                hover:text-orange-200
                sm:w-auto
              "
            />
          </div>
        </div>
      </SectionOpacity>
    </section>
  );
};

export default FinalCTA;







// 'use client';

// import { useRouter } from 'next/navigation';
// import { FC } from 'react';

// import Button from '@/components/ui/Button';
// import SectionOpacity from '@/components/ui/SectionOpacity';

// const FinalCTA: FC = () => {
//   const router = useRouter();

//   return (
//     <section className="relative overflow-hidden py-24 md:py-32">
//       {/* Gradient Background */}
//       <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-gray-900 to-black" />

//       {/*  Glow Effects */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute left-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-orange-500/20 blur-3xl" />
//         <div className="absolute bottom-[-100px] right-[-100px] h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-3xl" />
//       </div>

//       <SectionOpacity>
//         <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
//           {/*  Brand Tag */}
//           <p className="mb-4 text-sm uppercase tracking-widest text-gray-400">Pie Tech Solutions</p>

//           {/*  Heading */}
//           <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
//             Let&apos;s work together
//             <br />
//             <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
//               A Powerful Digital Experience
//             </span>
//           </h2>

//           {/*  Subtext (Meaningful + Sales Driven) */}
//           <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
//             At <span className="font-semibold text-white">Pie Tech Solutions</span>, we don’t just build websites — we
//             create scalable, high-performance digital solutions that help your business grow, attract customers, and
//             stand out in today’s competitive market.
//           </p>

//           <p className="mx-auto mt-4 max-w-xl text-sm text-gray-400 sm:text-base">
//             Whether you&apos;re launching a new idea or upgrading your existing product, our team is ready to bring your
//             vision to life with modern design, clean code, and strategic thinking.
//           </p>

//           {/*  Buttons */}
//           <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
//             {/*  Primary CTA */}
//             <Button
//               onClick={() => router.push('/contact')}
//               title="Start Your Project"
//               classes="
//       px-8 py-4 text-base font-semibold
//       rounded-xl
//       bg-orange-400 text-black
//       hover:bg-orange-500
//       transition-all duration-300
//       shadow-md hover:shadow-lg
//     "
//             />

//             {/*  Secondary CTA */}
//             <Button
//               onClick={() => router.push('/about')}
//               title="Learn More"
//               classes="
//       px-8 py-4 text-base font-semibold
//       rounded-xl
//       border border-orange-400
//       text-orange-400
//       hover:bg-orange-400/10
//       transition-all duration-300
//     "
//             />
//           </div>
//         </div>
//       </SectionOpacity>
//     </section>
//   );
// };

// export default FinalCTA;
