"use client";

import {
  Briefcase,
  CalendarDays,
  ThumbsUp,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { FC } from "react";

import Button from "@/components/ui/Button";
import SectionOpacity from "@/components/ui/SectionOpacity";

const Index: FC = () => {
  const router = useRouter();

  const handleFormToggle = () => {
    router.push("/about");
  };

  return (
    <SectionOpacity
      className="
        relative
        flex
        items-center
        overflow-hidden
        px-5
        py-20
        text-white
        sm:px-8
        md:py-28
      "
    >
      {/* =====================================================
          AMBIENT BACKGROUND

          No solid bg-black here.
          This keeps the global cursor / ShadowCursor
          effect visible.
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          overflow-hidden
        "
      >
        {/* Orange glow — top left */}

        <div
          className="
            absolute
            left-[-120px]
            top-[-120px]
            h-[350px]
            w-[350px]
            rounded-full
            bg-orange-500/[0.08]
            blur-[130px]
          "
        />

        {/* Amber glow — center */}

        <div
          className="
            absolute
            left-1/2
            top-[35%]
            h-[450px]
            w-[450px]
            -translate-x-1/2
            rounded-full
            bg-orange-500/[0.025]
            blur-[160px]
          "
        />

        {/* Purple/amber glow — bottom right */}

        <div
          className="
            absolute
            bottom-[-120px]
            right-[-120px]
            h-[350px]
            w-[350px]
            rounded-full
            bg-amber-400/[0.045]
            blur-[130px]
          "
        />

        {/* Bottom subtle glow */}

        <div
          className="
            absolute
            bottom-[-180px]
            left-1/2
            h-[400px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-orange-400/[0.025]
            blur-[150px]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-1
          gap-12
          lg:grid-cols-2
          lg:gap-16
        "
      >
        {/* ===================================================
            LEFT CONTENT
        =================================================== */}

        <div className="flex flex-col justify-center text-center lg:text-left">

          {/* TAGLINE */}

          <span
            className="
              mb-6
              inline-block
              text-xs
              font-semibold
              tracking-[0.3em]
              text-white/45
              sm:text-sm
            "
          >
            DIGITAL • DESIGN • DEVELOPMENT
          </span>

          {/* HEADING */}

          <h1
            className="
              text-4xl
              font-bold
              leading-tight
              text-white
              sm:text-5xl
              md:text-6xl
              xl:text-7xl
            "
          >
            Let&apos;s Build
            <br />

            <span
              className="
                bg-gradient-to-r
                from-orange-400
                via-orange-300
                to-amber-300
                bg-clip-text
                text-transparent
              "
            >
              Something Remarkable
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-base
              leading-relaxed
              text-gray-300
              lg:mx-0
              sm:text-lg
            "
          >
            Partner with{" "}
            <span className="font-semibold text-white">
              Pie Tech Solutions
            </span>{" "}
            to create high-performance digital experiences that help your
            business grow, scale, and stand out.
          </p>

          {/* SECOND DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-relaxed
              text-gray-400
              lg:mx-0
              sm:text-base
            "
          >
            We design modern websites, scalable applications, and
            conversion-focused digital strategies tailored to your goals.
          </p>

          {/* =================================================
              CTA
          ================================================= */}

          <div
            className="
              mt-10
              flex
              justify-center
              gap-4
              sm:flex-row
              lg:justify-start
            "
          >
            <Button
              onClick={handleFormToggle}
              title="Get Free Consultation"
              classes="
                rounded-xl
                bg-gradient-to-r
                from-orange-500
                to-amber-400
                px-8
                py-4
                text-base
                font-semibold
                text-black
                shadow-[0_0_35px_rgba(249,115,22,0.12)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_0_45px_rgba(249,115,22,0.25)]
                sm:text-lg
              "
            />
          </div>
        </div>

        {/* ===================================================
            RIGHT CONTENT
        =================================================== */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            gap-8
            lg:items-start
            lg:gap-10
          "
        >
          {/* =================================================
              STATS
          ================================================= */}

          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-6
              sm:grid-cols-3
            "
          >
            {/* =================================================
                CARD 1
            ================================================= */}

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                p-6
                text-center
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-orange-400/30
                hover:bg-white/[0.07]
              "
            >
              {/* Card glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-0
                  h-24
                  w-24
                  -translate-x-1/2
                  rounded-full
                  bg-orange-500/10
                  blur-3xl
                  opacity-0
                  transition
                  duration-500
                  group-hover:opacity-100
                "
              />

              <div className="relative z-10">
                <Briefcase
                  className="
                    mx-auto
                    mb-3
                    h-6
                    w-6
                    text-orange-400
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <p className="text-3xl font-bold text-white">
                  50+
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  Projects Delivered
                </p>
              </div>
            </div>

            {/* =================================================
                CARD 2
            ================================================= */}

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                p-6
                text-center
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-orange-400/30
                hover:bg-white/[0.07]
              "
            >
              {/* Card glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-0
                  h-24
                  w-24
                  -translate-x-1/2
                  rounded-full
                  bg-orange-500/10
                  blur-3xl
                  opacity-0
                  transition
                  duration-500
                  group-hover:opacity-100
                "
              />

              <div className="relative z-10">
                <CalendarDays
                  className="
                    mx-auto
                    mb-3
                    h-6
                    w-6
                    text-orange-400
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <p className="text-3xl font-bold text-white">
                  5+
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  Years Experience
                </p>
              </div>
            </div>

            {/* =================================================
                CARD 3
            ================================================= */}

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                p-6
                text-center
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-orange-400/30
                hover:bg-white/[0.07]
              "
            >
              {/* Card glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-0
                  h-24
                  w-24
                  -translate-x-1/2
                  rounded-full
                  bg-orange-500/10
                  blur-3xl
                  opacity-0
                  transition
                  duration-500
                  group-hover:opacity-100
                "
              />

              <div className="relative z-10">
                <ThumbsUp
                  className="
                    mx-auto
                    mb-3
                    h-6
                    w-6
                    text-orange-400
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <p className="text-3xl font-bold text-white">
                  100%
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              TRUST TEXT
          ================================================= */}

          <p
            className="
              max-w-sm
              text-center
              text-sm
              leading-6
              text-gray-500
              lg:text-left
            "
          >
            Trusted by startups, entrepreneurs, and growing businesses to
            deliver impactful digital solutions.
          </p>
        </div>
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
    </SectionOpacity>
  );
};

export default Index;







// 'use client';

// import { Briefcase, CalendarDays, ThumbsUp } from 'lucide-react';
// import { useRouter } from 'next/navigation';
// import { FC } from 'react';

// import Button from '@/components/ui/Button';
// import SectionOpacity from '@/components/ui/SectionOpacity';

// const Index: FC = () => {
//   const router = useRouter();

//   const handleFormToggle = () => {
//     router.push('/about');
//   };

//   return (
//     <SectionOpacity className="relative flex items-center overflow-hidden bg-black px-5 py-20 text-white sm:px-8 md:py-28">

//       {/* Background Glow */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-orange-500/20 blur-3xl rounded-full" />
//         <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-500/20 blur-3xl rounded-full" />
//       </div>

//       <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

//         {/* LEFT CONTENT */}
//         <div className="flex flex-col justify-center text-center lg:text-left">

//           {/* TAGLINE */}
//           <span className="mb-6 inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] text-gray-400">
//             DIGITAL • DESIGN • DEVELOPMENT
//           </span>

//           {/* HEADING */}
//           <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
//             Let’s Build <br />
//             <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
//               Something Remarkable
//             </span>
//           </h1>

//           {/* DESCRIPTION */}
//           <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-base leading-relaxed text-gray-300 sm:text-lg">
//             Partner with{' '}
//             <span className="font-semibold text-white">
//               Pie Tech Solutions
//             </span>{' '}
//             to create high-performance digital experiences that help your
//             business grow, scale, and stand out.
//           </p>

//           <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-sm text-gray-400 sm:text-base">
//             We design modern websites, scalable applications, and
//             conversion-focused digital strategies tailored to your goals.
//           </p>

//           {/* CTA */}
//           <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//             <Button
//               onClick={handleFormToggle}
//               title="Get Free Consultation"
//               classes="
//                 px-8 py-4 text-base font-semibold
//                 rounded-xl
//                 bg-gradient-to-r from-orange-500 to-pink-500
//                 hover:opacity-90
//                 transition-all duration-300
//                 sm:text-lg
//               "
//             />
//           </div>
//         </div>

//         {/* RIGHT CONTENT */}
//         <div className="flex flex-col justify-center items-center lg:items-start gap-8 lg:gap-10">

//           {/* STATS */}
//           <div className="grid w-full grid-cols-1 sm:grid-cols-3 gap-6">

//             {/* CARD 1 */}
//             <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:bg-white/10">
//               <Briefcase className="mx-auto mb-3 h-6 w-6 text-orange-400" />
//               <p className="text-3xl font-bold text-white">50+</p>
//               <p className="mt-1 text-sm text-gray-400">
//                 Projects Delivered
//               </p>
//             </div>

//             {/* CARD 2 */}
//             <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:bg-white/10">
//               <CalendarDays className="mx-auto mb-3 h-6 w-6 text-purple-400" />
//               <p className="text-3xl font-bold text-white">5+</p>
//               <p className="mt-1 text-sm text-gray-400">
//                 Years Experience
//               </p>
//             </div>

//             {/* CARD 3 */}
//             <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:bg-white/10">
//               <ThumbsUp className="mx-auto mb-3 h-6 w-6 text-pink-400" />
//               <p className="text-3xl font-bold text-white">100%</p>
//               <p className="mt-1 text-sm text-gray-400">
//                 Client Satisfaction
//               </p>
//             </div>

//           </div>

//           {/* TRUST TEXT */}
//           <p className="max-w-sm text-center lg:text-left text-sm text-gray-500">
//             Trusted by startups, entrepreneurs, and growing businesses to
//             deliver impactful digital solutions.
//           </p>
//         </div>

//       </div>
//     </SectionOpacity>
//   );
// };

// export default Index;



