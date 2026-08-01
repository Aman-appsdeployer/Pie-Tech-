
"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Lightbulb,
  Megaphone,
  PenTool,
  Rocket,
  Search,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import dynamic from "next/dynamic";

/* ================= GLOBE ================= */
const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  { ssr: false }
);

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

/* ================= GLOBE CONFIG ================= */
const globeConfig = {
  autoRotate: true,
  autoRotateSpeed: 0.0015,
};

/* ================= HERO ================= */
function GlobeHero() {
  return (
    <section className="relative h-[72svh] min-h-[34rem] w-full overflow-hidden md:h-[90vh]">
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

/* ================= STATS ================= */
function StatsSection() {
  const stats = [
    {
      label: "Services Offered",
      value: "15+",
      desc: "End-to-end digital solutions",
    },
    {
      label: "Projects Delivered",
      value: "100+",
      desc: "Across multiple industries",
    },
    {
      label: "Years of Experience",
      value: "5+",
      desc: "Building scalable products",
    },
  ];

  return (
    <section className="mx-auto max-w-[1200px] px-6 py-24">
      {/* Heading */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-4xl font-bold text-white text-center mb-14"
      >
        Our Impact in Numbers
      </motion.h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -10, scale: 1.03 }}
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-10 text-center transition"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/20 to-amber-300/20 opacity-0 blur-xl group-hover:opacity-100 transition" />

            <div className="relative z-10">
              <h3 className="text-5xl font-extrabold text-white mb-3">
                {item.value}
              </h3>

              <p className="text-lg font-semibold text-gray-200">
                {item.label}
              </p>

              <p className="mt-2 text-sm text-gray-400">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


/* ================= PROCESS ================= */
function ProcessSection() {
  const steps = [
    {
      title: "Discover",
      icon: <Lightbulb />,
      desc: "We analyze your business, audience, and challenges to uncover growth opportunities.",
    },
    {
      title: "Strategize",
      icon: <Target />,
      desc: "We design data-driven strategies aligned with your long-term vision.",
    },
    {
      title: "Build",
      icon: <Code2 />,
      desc: "We develop scalable, secure, and high-performance digital solutions.",
    },
    {
      title: "Scale",
      icon: <TrendingUp />,
      desc: "We optimize continuously and help you scale confidently in competitive markets.",
    },
  ];

  return (
  <section className="mx-auto max-w-[1200px] px-6 py-24 -mt-20">
    {/* Heading */}
    <motion.h2
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-4xl font-bold text-white mb-6 text-center"
    >
      How We Work
    </motion.h2>

    {/* Description */}
    <motion.p
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="mx-auto max-w-3xl text-center text-gray-400 mb-20"
    >
      At Pie Tech Solutions, we follow a structured yet flexible approach that
      combines strategy, creativity, and technology to deliver scalable digital
      solutions with real business impact.
    </motion.p>

    {/* Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* Discover (Left) */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ y: -10, scale: 1.02 }}
        className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-orange-400/40 hover:bg-white/10 transition"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="text-orange-400">{steps[0].icon}</div>
          <h4 className="text-xl font-semibold text-white">
            {steps[0].title}
          </h4>
        </div>
        <p className="text-gray-400 leading-relaxed">
          {steps[0].desc}
        </p>
      </motion.div>

      {/* Strategize (Left) */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ delay: 0.05 }}
        className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-orange-400/40 hover:bg-white/10 transition"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="text-orange-400">{steps[1].icon}</div>
          <h4 className="text-xl font-semibold text-white">
            {steps[1].title}
          </h4>
        </div>
        <p className="text-gray-400 leading-relaxed">
          {steps[1].desc}
        </p>
      </motion.div>

      {/* Build (Right) */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ delay: 0.1 }}
        className="md:col-span-2 md:col-start-3 rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-orange-400/40 hover:bg-white/10 transition"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="text-orange-400">{steps[2].icon}</div>
          <h4 className="text-xl font-semibold text-white">
            {steps[2].title}
          </h4>
        </div>
        <p className="text-gray-400 leading-relaxed">
          {steps[2].desc}
        </p>
      </motion.div>

      {/* Scale (Right) */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ delay: 0.15 }}
        className="md:col-span-2 md:col-start-3 rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-orange-400/40 hover:bg-white/10 transition"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="text-orange-400">{steps[3].icon}</div>
          <h4 className="text-xl font-semibold text-white">
            {steps[3].title}
          </h4>
        </div>
        <p className="text-gray-400 leading-relaxed">
          {steps[3].desc}
        </p>
      </motion.div>
    </div>
  </section>
);


}

/* ================= MISSION / VISION ================= */
function MissionVision() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-24 grid lg:grid-cols-2 md:grid-cols-1 gap-8 -mt-16">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="rounded-3xl border border-white/10 bg-white/5 p-10 hover:border-orange-400/40 hover:bg-white/10 transition"
      >
        <Target className="text-orange-400 mb-4" />
        <h3 className="text-2xl font-semibold text-white mb-3">
          Our Mission
        </h3>
        <p className="text-gray-400 leading-relaxed">
          To empower businesses with scalable digital solutions that deliver
          measurable growth through innovation, strategy, and technology.
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="rounded-3xl border border-white/10 bg-white/5 p-10 hover:border-orange-400/40 hover:bg-white/10 transition"
      >
        <Rocket className="text-amber-400 mb-4" />
        <h3 className="text-2xl font-semibold text-white mb-3">
          Our Vision
        </h3>
        <p className="text-gray-400 leading-relaxed">
          To become a globally trusted digital partner helping brands innovate,
          adapt, and lead in the digital era.
        </p>
      </motion.div>
    </section>
  );
}

/* ================= SERVICES ================= */
function ServicesGrid() {
  const services = [
    {
      title: "Web Development",
      desc: "We build fast, responsive, and scalable websites tailored to your business goals using modern technologies.",
      icon: <Globe />,
    },
    {
      title: "App Development",
      desc: "Design and development of high-performance mobile applications for Android and iOS platforms.",
      icon: <Smartphone />,
    },
    {
      title: "SEO Optimization",
      desc: "Improve your search visibility and organic traffic with data-driven SEO strategies.",
      icon: <Search />,
    },
    {
      title: "Custom Software",
      desc: "End-to-end custom software solutions designed to streamline operations and drive efficiency.",
      icon: <Code2 />,
    },
    {
      title: "Digital Marketing",
      desc: "Result-oriented marketing campaigns that boost brand awareness, engagement, and conversions.",
      icon: <Megaphone />,
    },
    {
      title: "Content Creation",
      desc: "High-quality content that communicates your brand story and connects with your audience.",
      icon: <PenTool />,
    },
  ];

  return (
    <section className="mx-auto max-w-[1200px] px-6 py-24 -mt-20">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-4xl font-bold text-white mb-12 text-center"
      >
        Discover Our Expertise
      </motion.h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-orange-400/40 hover:bg-white/10 transition"
          >
            <div className="text-orange-400 mb-4 text-2xl">
              {service.icon}
            </div>

            <h4 className="text-white font-semibold text-lg mb-2">
              {service.title}
            </h4>

            <p className="text-gray-400 text-sm leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}



/* ================= CTA ================= */
function CTASection() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mx-auto max-w-[1200px] px-6 py-24"
    >
      <div className="rounded-3xl bg-gradient-to-r from-orange-500 to-amber-400 p-14 text-center">
        <h3 className="text-3xl font-bold text-black">
          Let’s Build Your Digital Future
        </h3>
        <p className="mt-3 text-black/80">
          Partner with Pie Tech Solutions to turn ideas into impactful digital
          products.
        </p>
      </div>
    </motion.section>
  );
}

/* ================= PAGE ================= */
export default function AboutPage() {
  return (
    <main className=" text-white">
      <GlobeHero />
      <StatsSection />
      <ProcessSection />
      <MissionVision />
      <ServicesGrid />
      <CTASection />
    </main>
  );
}











