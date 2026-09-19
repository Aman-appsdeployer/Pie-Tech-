
'use client';

import clsx from 'clsx';
import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
} from 'framer-motion';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

interface Props {
  text: string;
  className?: string;
  highlightColor?: string;
  initialOpacity?: number;
}

interface WordInfo {
  index: number;
  line: number;
}

export default function ScrollHighlightText({
  text,
  className,
  highlightColor = 'text-white',
  backgroundColor = 'bg-black',
  initialOpacity = 0.25,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const [wordInfo, setWordInfo] = useState<WordInfo[]>([]);
  const [lineCount, setLineCount] = useState(1);

 
  const words = text.trim().split(/\s+/);

  
  const calculateLines = useCallback(() => {
    const elements = wordRefs.current;

    if (!elements.length) return;

    const lineMap: WordInfo[] = [];

    let currentLine = -1;
    let previousTop: number | null = null;

    elements.forEach((element, index) => {
      if (!element) return;

      const top = element.offsetTop;

     
      if (
        previousTop === null ||
        Math.abs(top - previousTop) > 2
      ) {
        currentLine += 1;
        previousTop = top;
      }

      lineMap.push({
        index,
        line: currentLine,
      });
    });

    if (lineMap.length === 0) return;

    setWordInfo(lineMap);
    setLineCount(currentLine + 1);
  }, []);

  useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => {
      calculateLines();
    });

    return () => cancelAnimationFrame(frame);
  }, [calculateLines, text, className]);

  
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        calculateLines();
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', handleResize);
    };
  }, [calculateLines]);

 
  useEffect(() => {
    if (!document.fonts) return;

    document.fonts.ready.then(() => {
      calculateLines();
    });
  }, [calculateLines]);


  const { scrollYProgress } = useScroll({
    target: containerRef,

    
    offset: ['start 0.9', 'end 0.2'],
  });

  return (
    <div
      ref={containerRef}
      className="mx-auto max-w-[1100px]"
    >
      <p
        className={clsx(
          'flex flex-wrap justify-center',
          'gap-x-2',
          'leading-[1.35]',
          className
        )}
      >
        {words.map((word, index) => {
          /*
           * Find information about this word.
           */
          const info = wordInfo.find(
            (item) => item.index === index
          );

          /*
           * Before the browser has calculated the lines,
           * use line 0.
           */
          const line = info?.line ?? 0;

          /*
           * Get all words belonging to this line.
           */
          const wordsInLine = wordInfo.filter(
            (item) => item.line === line
          );

          /*
           * Find this word's position inside its line.
           */
          const positionInLine = wordsInLine.findIndex(
            (item) => item.index === index
          );

          /*
           * If line calculation hasn't completed,
           * keep a safe default.
           */
          const safePosition =
            positionInLine === -1 ? 0 : positionInLine;

          const wordsOnLine = Math.max(
            wordsInLine.length,
            1
          );

          
          const lineStart = line / lineCount;

          const lineEnd =
            (line + 1) / lineCount;

          const wordStart =
            lineStart +
            (safePosition / wordsOnLine) *
              (lineEnd - lineStart);

          const wordEnd =
            lineStart +
            ((safePosition + 1) / wordsOnLine) *
              (lineEnd - lineStart);

          return (
            <Word
              key={`${index}-${word}`}
              ref={(element) => {
                wordRefs.current[index] = element;
              }}
              word={word}
              scrollYProgress={scrollYProgress}
              start={wordStart}
              end={wordEnd}
              highlightColor={highlightColor}
              initialOpacity={initialOpacity}
            />
          );
        })}
      </p>
    </div>
  );
}



interface WordProps {
  word: string;
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
  highlightColor: string;
  initialOpacity: number;
}

interface WordComponentProps extends WordProps {
  ref?: (element: HTMLSpanElement | null) => void;
}

function Word({
  word,
  scrollYProgress,
  start,
  end,
  highlightColor,
  initialOpacity,
  ref,
}: WordComponentProps) {
  
  const opacity = useTransform(
    scrollYProgress,
    [start, end],
    [initialOpacity, 1]
  );

  return (
    <motion.span
      ref={ref}
      style={{ opacity }}
      className={clsx(
        'inline-block',
        highlightColor
      )}
    >
      {word}
    </motion.span>
  );
}





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
