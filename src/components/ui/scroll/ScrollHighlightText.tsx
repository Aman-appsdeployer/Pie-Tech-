"use client";

import clsx from "clsx";
import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  forwardRef,
  useRef,
} from "react";

/* =========================================================
   TYPES
========================================================= */

interface Props {
  text: string;
  className?: string;
  highlightColor?: string;
  initialOpacity?: number;
}

interface WordProps {
  word: string;
  index: number;
  totalWords: number;
  scrollYProgress: MotionValue<number>;
  highlightColor: string;
  initialOpacity: number;
}

/* =========================================================
   SCROLL HIGHLIGHT TEXT
========================================================= */

export default function ScrollHighlightText({
  text,
  className,
  highlightColor = "text-white",
  initialOpacity = 0.25,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  /*
   * Split the paragraph into words.
   */
  const words = text.trim().split(/\s+/);

  /*
   * Scroll progress of the complete text block.
   *
   * Animation starts when the text enters the viewport.
   * Animation finishes when the text has moved further up.
   */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.2"],
  });

  return (
    <div
      ref={containerRef}
      className="
        relative
        z-10
        mx-auto
        w-full
        max-w-[1100px]
      "
    >
      <p
        className={clsx(
          /*
           * FONT
           */
          "!font-sans",

          /*
           * RESPONSIVE SIZE
           */
          "text-[clamp(1.5rem,3.4vw,3.5rem)]",

          /*
           * WEIGHT
           */
          "font-medium",

          /*
           * LINE HEIGHT
           */
          "leading-[1.18]",

          /*
           * LETTER SPACING
           */
          "tracking-[-0.025em]",

          /*
           * ALIGNMENT
           */
          "text-center",

          /*
           * NORMAL TEXT FLOW
           */
          "whitespace-normal",

          className
        )}
      >
        {words.map((word, index) => (
          <Word
            key={`${index}-${word}`}
            word={word}
            index={index}
            totalWords={words.length}
            scrollYProgress={scrollYProgress}
            highlightColor={highlightColor}
            initialOpacity={initialOpacity}
          />
        ))}
      </p>
    </div>
  );
}

/* =========================================================
   WORD COMPONENT
========================================================= */

const Word = forwardRef<HTMLSpanElement, WordProps>(
  function Word(
    {
      word,
      index,
      totalWords,
      scrollYProgress,
      highlightColor,
      initialOpacity,
    },
    ref
  ) {

    const safeTotal = Math.max(totalWords, 1);

  
    const wordPosition =
      totalWords <= 1
        ? 0
        : index / (totalWords - 1);

    
    const highlightWindow = Math.max(
      0.045,
      Math.min(0.1, 2.5 / safeTotal)
    );

    /*
     * Start and end of this word's animation.
     */
    const start =
      wordPosition * (1 - highlightWindow);

    const end =
      start + highlightWindow;

    /*
     * Animate opacity according to scroll.
     */
    const opacity = useTransform(
      scrollYProgress,
      [
        Math.max(0, start),
        Math.min(1, end),
      ],
      [
        initialOpacity,
        1,
      ],
      {
        clamp: true,
      }
    );

    return (
      <>
        <motion.span
          ref={ref}
          style={{
            opacity,
          }}
          className={clsx(
            "!font-sans",
            "inline",
            highlightColor
          )}
        >
          {word}
        </motion.span>

       
        {index < totalWords - 1 && " "}
      </>
    );
  }
);

Word.displayName = "Word";




// 'use client';

// import clsx from 'clsx';
// import {
//   motion,
//   MotionValue,
//   useScroll,
//   useTransform,
// } from 'framer-motion';
// import { useRef } from 'react';

// interface Props {
//   text: string;
//   className?: string;
//   highlightColor?: string;
// }

// export default function ScrollHighlightText({
//   text,
//   className,
//   highlightColor = 'text-white',
// }: Props) {
//   const ref = useRef<HTMLDivElement>(null);
//   const words = text.trim().split(' ');

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ['start 0.9', 'end 0.2'],
//   });

//   return (
//     <div ref={ref} className="max-w-[1100px] mx-auto">
//       <p
//         className={clsx(
//           'flex flex-wrap justify-center gap-x-2 leading-[1.35]',
//           className
//         )}
//       >
//         {words.map((word, index) => (
//           <Word
//             key={index}
//             word={word}
//             index={index}
//             total={words.length}
//             scrollYProgress={scrollYProgress}
//             highlightColor={highlightColor}
//           />
//         ))}
//       </p>
//     </div>
//   );
// }

// /* --------------------------------------------
//    Child Component (HOOKS ARE VALID HERE)
// --------------------------------------------- */

// interface WordProps {
//   word: string;
//   index: number;
//   total: number;
//   scrollYProgress: MotionValue<number>;
//   highlightColor: string;
// }

// function Word({
//   word,
//   index,
//   total,
//   scrollYProgress,
//   highlightColor,
// }: WordProps) {
//   const start = index / total;
//   const end = start + 1 / total;

//   const opacity = useTransform(
//     scrollYProgress,
//     [start, end],
//     [0.25, 1]
//   );

//   return (
//     <motion.span
//       style={{ opacity }}
//       className={clsx(
//         'transition-colors duration-200',
//         highlightColor
//       )}
//     >
//       {word}
//     </motion.span>
//   );
// }
