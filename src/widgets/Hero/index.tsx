import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import dynamic from 'next/dynamic';

const World = dynamic(() => import('@/components/ui/globe').then((m) => m.World), { ssr: false });

import Link from 'next/link';

const globeConfig = {
  autoRotate: true,
  autoRotateSpeed: 0.0015,
};

const Hero = () => {
  const reduceMotion = useReducedMotion();

  {
    /* Globe */
  }
  <div className="absolute inset-0">
    <World globeConfig={globeConfig} />
  </div>;

  {
    /* Hero Content */
  }
  <div className="relative z-20 flex min-h-[calc(100svh-80px)] items-center justify-center px-6 text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl"
    >
      <motion.span
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-sm text-gray-300 backdrop-blur-md"
      >
        <Sparkles size={16} />
        About Pie Tech Solutions
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl"
      >
        A{' '}
        <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
          Perpetually Adaptive
        </span>
        <br />
        Digital Enterprise
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
        className="mx-auto mt-6 max-w-3xl text-lg text-gray-400 md:text-xl"
      >
        We help businesses innovate, transform, and scale globally through modern technology, digital strategy, and
        engineering excellence.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75 }}
        className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
      >
        <Link
          href="/contact"
          className="group flex items-center gap-2 rounded-full bg-orange-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-300"
        >
          Start a Project
          <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
        </Link>

        <Link
          href="/services"
          className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/80 transition hover:border-cyan-300/40 hover:text-white"
        >
          Explore Our Capabilities
        </Link>
      </motion.div>
    </motion.div>
  </div>;

  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden bg-[#020303] text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_72%,rgba(36,182,180,.065),transparent_30%),radial-gradient(circle_at_50%_46%,rgba(255,255,255,.025),transparent_43%)]" />

      {/* Globe */}
      <div className="absolute inset-0 z-10">
        <World globeConfig={globeConfig} />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex min-h-screen items-center justify-center px-6 text-center">
        <div className="max-w-5xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-300 backdrop-blur-md">
            <Sparkles size={16} />
            Pie Tech Solutions
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-7xl">
            A{' '}
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Perpetually Adaptive
            </span>
            <br />
            Digital Enterprise
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400 md:text-xl">
            We help businesses innovate, transform, and scale globally through modern technology, digital strategy, and
            engineering excellence.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-orange-400 px-6 py-3 font-semibold text-black hover:bg-orange-300"
            >
              Start a Project
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-white/80 hover:border-cyan-300/40"
            >
              Explore Our Capabilities
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

const OrbitalScene = ({ reduceMotion }: { reduceMotion: boolean }) => (
  <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden" aria-hidden="true">
    <motion.div
      className="absolute left-1/2 top-[34%] h-[46rem] w-[86rem] -translate-x-1/2 -translate-y-1/2"
      animate={reduceMotion ? undefined : { rotate: [0, 1.2, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg viewBox="0 0 1400 760" className="h-full w-full overflow-visible" fill="none">
        <defs>
          <linearGradient id="orbit" x1="100" y1="100" x2="1290" y2="670" gradientUnits="userSpaceOnUse">
            <stop stopColor="#75E5E7" stopOpacity="0" />
            <stop offset="0.4" stopColor="#75E5E7" stopOpacity="0.32" />
            <stop offset="0.72" stopColor="#75E5E7" stopOpacity="0.12" />
            <stop offset="1" stopColor="#75E5E7" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="nodeGlow">
            <stop stopColor="#B7FFFF" />
            <stop offset="0.45" stopColor="#75E5E7" />
            <stop offset="1" stopColor="#75E5E7" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse
          cx="700"
          cy="430"
          rx="650"
          ry="205"
          stroke="url(#orbit)"
          strokeWidth="1"
          transform="rotate(-11 700 430)"
        />
        <ellipse
          cx="700"
          cy="425"
          rx="535"
          ry="135"
          stroke="url(#orbit)"
          strokeWidth="0.7"
          transform="rotate(8 700 425)"
        />
        <ellipse cx="700" cy="420" rx="365" ry="310" stroke="url(#orbit)" strokeWidth="0.65" strokeDasharray="2 8" />
        <ellipse cx="700" cy="420" rx="250" ry="390" stroke="url(#orbit)" strokeWidth="0.55" strokeDasharray="1 9" />
        <path d="M70 500C330 370 512 185 743 197C985 210 1110 410 1360 466" stroke="url(#orbit)" strokeWidth="0.8" />
        <path d="M-40 610C310 505 565 505 1440 485" stroke="url(#orbit)" strokeWidth="0.65" />
      </svg>
    </motion.div>

    <OrbitNode className="left-[3%] top-[34%]" delay={0} reduceMotion={reduceMotion} size="h-3 w-3 md:h-4 md:w-4" />
    <OrbitNode
      className="right-[7%] top-[42%]"
      delay={1.3}
      reduceMotion={reduceMotion}
      size="h-3.5 w-3.5 md:h-4 md:w-4"
    />
    <OrbitNode className="right-[4%] top-[55%]" delay={2.1} reduceMotion={reduceMotion} size="h-2 w-2" />
    <OrbitNode
      className="left-[25%] top-[22%] hidden md:block"
      delay={0.8}
      reduceMotion={reduceMotion}
      size="h-2 w-2"
    />
  </div>
);

const OrbitNode = ({
  className,
  delay,
  reduceMotion,
  size,
}: {
  className: string;
  delay: number;
  reduceMotion: boolean;
  size: string;
}) => (
  <motion.span
    className={`absolute rounded-full bg-[#75e5e7] shadow-[0_0_18px_rgba(117,229,231,.55)] ${className} ${size}`}
    animate={reduceMotion ? undefined : { scale: [0.8, 1.25, 0.8], opacity: [0.55, 1, 0.55] }}
    transition={{ duration: 3.2, delay, repeat: Infinity, ease: 'easeInOut' }}
  />
);

export default Hero;
