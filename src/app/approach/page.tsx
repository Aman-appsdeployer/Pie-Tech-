"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Lightbulb,
  PenTool,
  TrendingUp,
} from "lucide-react";

/* ================= ANIMATION ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

/* ================= STEPS DATA ================= */
const STEPS = [
  {
    step: "Step 01",
    title: "Discovery & Strategy",
    icon: <Lightbulb className="text-orange-400" />,
    desc: "We start by understanding your business goals, challenges, target audience, and competitive landscape. This discovery phase allows us to define a clear, data-driven strategy aligned with your long-term growth objectives.",
  },
  {
    step: "Step 02",
    title: "Creative Design & Planning",
    icon: <PenTool className="text-amber-400" />,
    desc: "Our team designs intuitive user experiences and visually engaging interfaces while planning scalable technical architectures. Every design decision is guided by usability, performance, and brand consistency.",
  },
  {
    step: "Step 03",
    title: "Development & Execution",
    icon: <Code2 className="text-orange-400" />,
    desc: "We build fast, secure, and scalable digital products using modern technologies and best practices. Our development process ensures clean code, performance optimization, and seamless functionality across platforms.",
  },
  {
    step: "Step 04",
    title: "Launch, Optimize & Scale",
    icon: <TrendingUp className="text-amber-400" />,
    desc: "After launch, we monitor performance, analyze user behavior, and continuously optimize the solution. Our focus is on improving efficiency, maximizing ROI, and scaling your digital presence sustainably.",
  },
];

/* ================= PAGE ================= */
export default function ApproachPage() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pt-32 pb-24">
      {/* ===== HEADER ===== */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Our Approach
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed">
          Our proven approach combines strategy, creativity, and technology to
          deliver impactful digital solutions. We focus on clarity, execution,
          and continuous optimization to help businesses achieve measurable
          growth.
        </p>
      </motion.div>

      {/* ===== STEPS ===== */}
      <div className="grid gap-8 md:grid-cols-2">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-white/10 bg-black/60 p-8 backdrop-blur hover:border-white/20 transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm text-gray-500 font-medium">
                {step.step}
              </span>
            </div>

            <div className="mb-4">{step.icon}</div>

            <h3 className="text-xl font-semibold text-white mb-3">
              {step.title}
            </h3>

            <p className="text-gray-400 leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ===== CTA ===== */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-28 rounded-3xl bg-gradient-to-r from-orange-500 to-amber-400 p-12 text-center"
      >
        <h3 className="text-3xl font-bold text-black">
          Let’s Turn Ideas Into Impact
        </h3>
        <p className="mt-3 text-black/80">
          Work with a team that values strategy, execution, and results.
        </p>

        <button className="mt-6 rounded-full bg-black px-8 py-3 font-semibold text-white hover:bg-black/90 transition">
          Start Your Project
        </button>
      </motion.div>
    </section>
  );
}
