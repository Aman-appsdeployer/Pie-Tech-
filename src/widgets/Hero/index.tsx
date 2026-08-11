import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  {
    ssr: false,
  }
); 


const globeConfig = {
  autoRotate: true,
  autoRotateSpeed: 0.0015,
};

const Hero = () => {
  const reduceMotion = useReducedMotion();

  function GlobeHero() {
  return (
    <section className="relative h-[72svh] min-h-[34rem] w-full overflow-hidden md:h-[90vh] bg-black">
      {/* Globe */}
      <div className="absolute inset-0">
        <World globeConfig={globeConfig} />
      </div>

      {/* Text on globe */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 mb-6">
            <Sparkles size={16} />
            About Pie Tech Solutions
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            A{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Perpetually Adaptive
            </span>{" "}
            Digital Enterprise
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-400">
            We help businesses innovate, transform, and scale globally through
            modern technology, digital strategy, and engineering excellence.
          </p>
        </div>
      </div>

      {/* Fade */}
      <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}


  return (
    <section id="home" className="relative isolate min-h-[calc(100svh-80px)] overflow-hidden bg-[#020303] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_72%,rgba(36,182,180,.065),transparent_30%),radial-gradient(circle_at_50%_46%,rgba(255,255,255,.025),transparent_43%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[55%] opacity-[0.16] [background-image:radial-gradient(rgba(111,224,226,.7)_0.7px,transparent_0.7px)] [background-size:8px_8px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_74%)]" />

      <OrbitalScene reduceMotion={Boolean(reduceMotion)} />

      <div className="relative z-20 mx-auto flex min-h-[calc(100svh-80px)] max-w-7xl flex-col items-center justify-end px-5 pb-[12vh] pt-32 text-center sm:px-8 md:justify-center md:pb-0 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mb-5 flex items-center gap-3 rounded-full border border-white/[0.09] bg-black/35 px-3 py-1.5 backdrop-blur-md"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#75e5e7] opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#75e5e7]" />
          </span>
          <span className="text-[9px] font-medium uppercase tracking-[0.24em] text-white/55 sm:text-[10px]">The future, engineered today</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl text-balance text-[clamp(2.6rem,7vw,6.75rem)] font-semibold leading-[0.93] tracking-[-0.065em]"
        >
          A Perpetually <span className="text-orange-400">Adaptive</span>
          <br />
          Digital Enterprise
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.58, duration: 0.7 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-sm leading-6 text-white/45 sm:text-base sm:leading-7"
        >
          We help businesses innovate, transform, and scale digitally through modern technology, intelligent strategy, and inspiring experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72, duration: 0.65 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Link href="/contact" className="group flex items-center gap-3 rounded-full bg-orange-400 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-orange-300 hover:shadow-[0_0_35px_rgba(251,146,60,.22)]">
            Start a project
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:rotate-45" />
          </Link>
          <Link href="/services" className="rounded-full border border-white/15 bg-white/[0.025] px-6 py-3 text-sm font-medium text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-[#75e5e7]/40 hover:text-white">
            Explore our capabilities
          </Link>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-24 w-[70%] -translate-x-1/2 bg-[#5ee2d5]/[0.035] blur-[60px]" />
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
        <ellipse cx="700" cy="430" rx="650" ry="205" stroke="url(#orbit)" strokeWidth="1" transform="rotate(-11 700 430)" />
        <ellipse cx="700" cy="425" rx="535" ry="135" stroke="url(#orbit)" strokeWidth="0.7" transform="rotate(8 700 425)" />
        <ellipse cx="700" cy="420" rx="365" ry="310" stroke="url(#orbit)" strokeWidth="0.65" strokeDasharray="2 8" />
        <ellipse cx="700" cy="420" rx="250" ry="390" stroke="url(#orbit)" strokeWidth="0.55" strokeDasharray="1 9" />
        <path d="M70 500C330 370 512 185 743 197C985 210 1110 410 1360 466" stroke="url(#orbit)" strokeWidth="0.8" />
        <path d="M-40 610C310 505 565 505 1440 485" stroke="url(#orbit)" strokeWidth="0.65" />
      </svg>
    </motion.div>

    <OrbitNode className="left-[3%] top-[34%]" delay={0} reduceMotion={reduceMotion} size="h-3 w-3 md:h-4 md:w-4" />
    <OrbitNode className="right-[7%] top-[42%]" delay={1.3} reduceMotion={reduceMotion} size="h-3.5 w-3.5 md:h-4 md:w-4" />
    <OrbitNode className="right-[4%] top-[55%]" delay={2.1} reduceMotion={reduceMotion} size="h-2 w-2" />
    <OrbitNode className="left-[25%] top-[22%] hidden md:block" delay={0.8} reduceMotion={reduceMotion} size="h-2 w-2" />
  </div>
);

const OrbitNode = ({ className, delay, reduceMotion, size }: { className: string; delay: number; reduceMotion: boolean; size: string }) => (
  <motion.span
    className={`absolute rounded-full bg-[#75e5e7] shadow-[0_0_18px_rgba(117,229,231,.55)] ${className} ${size}`}
    animate={reduceMotion ? undefined : { scale: [0.8, 1.25, 0.8], opacity: [0.55, 1, 0.55] }}
    transition={{ duration: 3.2, delay, repeat: Infinity, ease: 'easeInOut' }}
  />
);

export default Hero;
