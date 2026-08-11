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

/* =========================================================
   GLOBE
========================================================= */

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

/* =========================================================
   ANIMATIONS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* =========================================================
   HERO
========================================================= */

function GlobeHero() {
  return (
    <section
      className="
        relative
        min-h-[680px]
        w-full
        overflow-hidden
        bg-[#020303]
        md:min-h-[780px]
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-[20%]
            h-[500px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-orange-500/[0.045]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            bottom-[-150px]
            left-1/2
            h-[400px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-orange-400/[0.04]
            blur-[150px]
          "
        />
      </div>

      {/* =====================================================
          GLOBE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          opacity-90
        "
      >
        <World globeConfig={globeConfig} />
      </div>

      {/* =====================================================
          DARK OVERLAY
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-[radial-gradient(circle_at_center,transparent_10%,rgba(2,3,3,.18)_55%,rgba(2,3,3,.72)_100%)]
        "
      />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[680px]
          max-w-6xl
          items-center
          justify-center
          px-5
          py-28
          text-center
          md:min-h-[780px]
          md:px-8
        "
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-5xl"
        >
          {/* Badge */}

          <motion.div
            variants={fadeUp}
            className="
              mx-auto
              mb-7
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-black/35
              px-4
              py-2
              text-xs
              font-medium
              uppercase
              tracking-[0.18em]
              text-white/60
              backdrop-blur-xl
              sm:text-sm
            "
          >
            <Sparkles
              size={15}
              className="text-orange-400"
            />

            About Pie Tech Solutions
          </motion.div>

          {/* Heading */}

          <motion.h1
            variants={fadeUp}
            className="
              text-4xl
              font-bold
              leading-[1.02]
              tracking-[-0.04em]
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-8xl
            "
          >
            A Perpetually{" "}
            <span
              className="
                bg-gradient-to-r
                from-orange-400
                via-amber-300
                to-yellow-300
                bg-clip-text
                text-transparent
              "
            >
              Adaptive
            </span>
            <br />
            Digital Enterprise
          </motion.h1>

          {/* Description */}

          <motion.p
            variants={fadeUp}
            className="
              mx-auto
              mt-7
              max-w-3xl
              text-base
              leading-7
              text-white/45
              sm:text-lg
              sm:leading-8
              md:text-xl
            "
          >
            We help businesses innovate, transform, and scale globally through
            modern technology, digital strategy, and engineering excellence.
          </motion.p>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM FADE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-20
          h-48
          w-full
          bg-gradient-to-t
          from-[#020303]
          via-[#020303]/80
          to-transparent
        "
      />
    </section>
  );
}

/* =========================================================
   STATS
========================================================= */

function StatsSection() {
  const stats = [
    {
      value: "15+",
      label: "Services Offered",
      desc: "End-to-end digital solutions",
    },
    {
      value: "100+",
      label: "Projects Delivered",
      desc: "Across multiple industries",
    },
    {
      value: "5+",
      label: "Years of Experience",
      desc: "Building scalable products",
    },
  ];

  return (
    <section className="relative z-10 py-20 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400 sm:text-sm">
            Our Impact
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Our Impact in{" "}
            <span className="text-orange-400">
              Numbers
            </span>
          </h2>
        </motion.div>

        {/* Stats */}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {stats.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                p-8
                text-center
                backdrop-blur-xl
                transition
                duration-300
                hover:border-orange-400/30
                hover:bg-white/[0.07]
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-0
                  h-32
                  w-32
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
                <h3 className="text-5xl font-black text-orange-400">
                  {item.value}
                </h3>

                <p className="mt-3 text-lg font-semibold text-white">
                  {item.label}
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   PROCESS
========================================================= */

function ProcessSection() {
  const steps = [
    {
      title: "Discover",
      icon: <Lightbulb size={25} />,
      desc: "We analyze your business, audience, and challenges to uncover growth opportunities.",
    },
    {
      title: "Strategize",
      icon: <Target size={25} />,
      desc: "We design data-driven strategies aligned with your long-term vision.",
    },
    {
      title: "Build",
      icon: <Code2 size={25} />,
      desc: "We develop scalable, secure, and high-performance digital solutions.",
    },
    {
      title: "Scale",
      icon: <TrendingUp size={25} />,
      desc: "We optimize continuously and help you scale confidently in competitive markets.",
    },
  ];

  return (
    <section className="relative z-10 py-20 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400 sm:text-sm">
            Our Approach
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            How We{" "}
            <span className="text-orange-400">
              Work
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-400 sm:text-lg">
            At Pie Tech Solutions, we follow a structured yet flexible
            approach that combines strategy, creativity, and technology to
            deliver scalable digital solutions with real business impact.
          </p>
        </motion.div>

        {/* Process Grid */}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                p-7
                backdrop-blur-xl
                transition
                duration-300
                hover:border-orange-400/30
                hover:bg-white/[0.07]
                sm:p-8
              "
            >
              {/* Number */}

              <div
                className="
                  absolute
                  right-6
                  top-4
                  text-7xl
                  font-black
                  text-white/[0.035]
                "
              >
                0{index + 1}
              </div>

              <div className="relative z-10">
                {/* Icon */}

                <div
                  className="
                    mb-6
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-orange-500/10
                    text-orange-400
                    transition
                    duration-300
                    group-hover:bg-orange-500
                    group-hover:text-black
                  "
                >
                  {step.icon}
                </div>

                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400 sm:text-base">
                  {step.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   MISSION / VISION
========================================================= */

function MissionVision() {
  return (
    <section className="relative z-10 py-20 sm:py-24 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Mission */}

        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="
            group
            rounded-3xl
            border
            border-white/10
            bg-white/[0.04]
            p-8
            backdrop-blur-xl
            transition
            duration-300
            hover:border-orange-400/30
            hover:bg-white/[0.07]
            sm:p-10
          "
        >
          <div
            className="
              mb-6
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-orange-500/10
              text-orange-400
              transition
              duration-300
              group-hover:bg-orange-500
              group-hover:text-black
            "
          >
            <Target size={27} />
          </div>

          <h3 className="text-2xl font-semibold text-white sm:text-3xl">
            Our Mission
          </h3>

          <p className="mt-4 text-base leading-7 text-gray-400">
            To empower businesses with scalable digital solutions that deliver
            measurable growth through innovation, strategy, and technology.
          </p>
        </motion.article>

        {/* Vision */}

        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="
            group
            rounded-3xl
            border
            border-white/10
            bg-white/[0.04]
            p-8
            backdrop-blur-xl
            transition
            duration-300
            hover:border-orange-400/30
            hover:bg-white/[0.07]
            sm:p-10
          "
        >
          <div
            className="
              mb-6
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-orange-500/10
              text-orange-400
              transition
              duration-300
              group-hover:bg-orange-500
              group-hover:text-black
            "
          >
            <Rocket size={27} />
          </div>

          <h3 className="text-2xl font-semibold text-white sm:text-3xl">
            Our Vision
          </h3>

          <p className="mt-4 text-base leading-7 text-gray-400">
            To become a globally trusted digital partner helping brands
            innovate, adapt, and lead in the digital era.
          </p>
        </motion.article>
      </div>
    </section>
  );
}

/* =========================================================
   SERVICES
========================================================= */

function ServicesGrid() {
  const services = [
    {
      title: "Web Development",
      desc: "We build fast, responsive, and scalable websites tailored to your business goals using modern technologies.",
      icon: <Globe size={25} />,
    },
    {
      title: "App Development",
      desc: "Design and development of high-performance mobile applications for Android and iOS platforms.",
      icon: <Smartphone size={25} />,
    },
    {
      title: "SEO Optimization",
      desc: "Improve your search visibility and organic traffic with data-driven SEO strategies.",
      icon: <Search size={25} />,
    },
    {
      title: "Custom Software",
      desc: "End-to-end custom software solutions designed to streamline operations and drive efficiency.",
      icon: <Code2 size={25} />,
    },
    {
      title: "Digital Marketing",
      desc: "Result-oriented marketing campaigns that boost brand awareness, engagement, and conversions.",
      icon: <Megaphone size={25} />,
    },
    {
      title: "Content Creation",
      desc: "High-quality content that communicates your brand story and connects with your audience.",
      icon: <PenTool size={25} />,
    },
  ];

  return (
    <section className="relative z-10 py-20 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400 sm:text-sm">
            What We Do
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Discover Our{" "}
            <span className="text-orange-400">
              Expertise
            </span>
          </h2>
        </motion.div>

        {/* Grid */}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                p-7
                backdrop-blur-xl
                transition
                duration-300
                hover:border-orange-400/30
                hover:bg-white/[0.07]
              "
            >
              <div
                className="
                  mb-6
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-orange-500/10
                  text-orange-400
                  transition
                  duration-300
                  group-hover:bg-orange-500
                  group-hover:text-black
                "
              >
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold text-white sm:text-xl">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                {service.desc}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   CTA
========================================================= */

function CTASection() {
  return (
    <section className="relative z-10 px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="
          relative
          mx-auto
          max-w-6xl
          overflow-hidden
          rounded-[2rem]
          bg-gradient-to-r
          from-orange-500
          via-orange-400
          to-amber-400
          px-6
          py-12
          text-center
          shadow-[0_20px_80px_rgba(249,115,22,0.18)]
          sm:px-10
          sm:py-14
          md:px-14
          md:py-16
        "
      >
        {/* Glow */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-white/20 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-100/20 blur-3xl" />
        </div>

        <div className="relative z-10">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-black/60 sm:text-sm">
            Let&apos;s Work Together
          </span>

          <h3 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl">
            Let&apos;s Build Your Digital Future
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/80 sm:text-lg">
            Partner with Pie Tech Solutions to turn ideas into impactful
            digital products.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="/contact"
              className="
                rounded-full
                bg-black
                px-7
                py-3.5
                font-semibold
                text-white
                transition
                duration-300
                hover:-translate-y-1
                hover:bg-black/90
              "
            >
              Start a Project
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020303] text-white">
      {/* Global background */}

      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute left-[-200px] top-[35%] h-[500px] w-[500px] rounded-full bg-orange-500/[0.035] blur-[160px]" />

        <div className="absolute right-[-200px] top-[60%] h-[500px] w-[500px] rounded-full bg-amber-400/[0.03] blur-[160px]" />
      </div>

      <div className="relative z-10">
        <GlobeHero />
        <StatsSection />
        <ProcessSection />
        <MissionVision />
        <ServicesGrid />
        <CTASection />
      </div>
    </main>
  );
}



// "use client";

// import { motion } from "framer-motion";
// import {
//   Code2,
//   Globe,
//   Lightbulb,
//   Megaphone,
//   PenTool,
//   Rocket,
//   Search,
//   Smartphone,
//   Sparkles,
//   Target,
//   TrendingUp,
// } from "lucide-react";
// import dynamic from "next/dynamic";

// /* ================= GLOBE ================= */
// const World = dynamic(
//   () => import("@/components/ui/globe").then((m) => m.World),
//   { ssr: false }
// );

// /* ================= ANIMATIONS ================= */
// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0 },
// };

// /* ================= GLOBE CONFIG ================= */
// const globeConfig = {
//   autoRotate: true,
//   autoRotateSpeed: 0.0015,
// };

// /* ================= HERO ================= */
// function GlobeHero() {
//   return (
//     <section className="relative h-[72svh] min-h-[34rem] w-full overflow-hidden md:h-[90vh] bg-black">
//       {/* Globe */}
//       <div className="absolute inset-0">
//         <World globeConfig={globeConfig} />
//       </div>

//       {/* Text on globe */}
//       <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
//         <div>
//           <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 mb-6">
//             <Sparkles size={16} />
//             About Pie Tech Solutions
//           </span>

//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
//             A{" "}
//             <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
//               Perpetually Adaptive
//             </span>{" "}
//             Digital Enterprise
//           </h1>

//           <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-400">
//             We help businesses innovate, transform, and scale globally through
//             modern technology, digital strategy, and engineering excellence.
//           </p>
//         </div>
//       </div>

//       {/* Fade */}
//       <div className="absolute bottom-0 h-32 w-full bg-black" />
//     </section>
//   );
// }

// /* ================= STATS ================= */
// function StatsSection() {
//   const stats = [
//     {
//       label: "Services Offered",
//       value: "15+",
//       desc: "End-to-end digital solutions",
//     },
//     {
//       label: "Projects Delivered",
//       value: "100+",
//       desc: "Across multiple industries",
//     },
//     {
//       label: "Years of Experience",
//       value: "5+",
//       desc: "Building scalable products",
//     },
//   ];

//   return (
//     <section className="mx-auto max-w-[1200px] px-6 py-24">
//       {/* Heading */}
//       <motion.h2
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="text-4xl font-bold text-white text-center mb-14"
//       >
//         Our Impact in Numbers
//       </motion.h2>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {stats.map((item, i) => (
//           <motion.div
//             key={i}
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.15 }}
//             whileHover={{ y: -10, scale: 1.03 }}
//             className="group relative rounded-2xl border border-white/10 bg-white/5 p-10 text-center transition"
//           >
//             {/* Glow effect */}
//             <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/20 to-amber-300/20 opacity-0 blur-xl group-hover:opacity-100 transition" />

//             <div className="relative z-10">
//               <h3 className="text-5xl font-extrabold text-white mb-3">
//                 {item.value}
//               </h3>

//               <p className="text-lg font-semibold text-gray-200">
//                 {item.label}
//               </p>

//               <p className="mt-2 text-sm text-gray-400">
//                 {item.desc}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


// /* ================= PROCESS ================= */
// function ProcessSection() {
//   const steps = [
//     {
//       title: "Discover",
//       icon: <Lightbulb />,
//       desc: "We analyze your business, audience, and challenges to uncover growth opportunities.",
//     },
//     {
//       title: "Strategize",
//       icon: <Target />,
//       desc: "We design data-driven strategies aligned with your long-term vision.",
//     },
//     {
//       title: "Build",
//       icon: <Code2 />,
//       desc: "We develop scalable, secure, and high-performance digital solutions.",
//     },
//     {
//       title: "Scale",
//       icon: <TrendingUp />,
//       desc: "We optimize continuously and help you scale confidently in competitive markets.",
//     },
//   ];

//   return (
//   <section className="mx-auto max-w-[1200px] px-6 py-24 -mt-20">
//     {/* Heading */}
//     <motion.h2
//       variants={fadeUp}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       className="text-4xl font-bold text-white mb-6 text-center"
//     >
//       How We Work
//     </motion.h2>

//     {/* Description */}
//     <motion.p
//       variants={fadeUp}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       transition={{ delay: 0.1 }}
//       className="mx-auto max-w-3xl text-center text-gray-400 mb-20"
//     >
//       At Pie Tech Solutions, we follow a structured yet flexible approach that
//       combines strategy, creativity, and technology to deliver scalable digital
//       solutions with real business impact.
//     </motion.p>

//     {/* Grid */}
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

//       {/* Discover (Left) */}
//       <motion.div
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         whileHover={{ y: -10, scale: 1.02 }}
//         className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-orange-400/40 hover:bg-white/10 transition"
//       >
//         <div className="flex items-center gap-4 mb-4">
//           <div className="text-orange-400">{steps[0].icon}</div>
//           <h4 className="text-xl font-semibold text-white">
//             {steps[0].title}
//           </h4>
//         </div>
//         <p className="text-gray-400 leading-relaxed">
//           {steps[0].desc}
//         </p>
//       </motion.div>

//       {/* Strategize (Left) */}
//       <motion.div
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         whileHover={{ y: -10, scale: 1.02 }}
//         transition={{ delay: 0.05 }}
//         className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-orange-400/40 hover:bg-white/10 transition"
//       >
//         <div className="flex items-center gap-4 mb-4">
//           <div className="text-orange-400">{steps[1].icon}</div>
//           <h4 className="text-xl font-semibold text-white">
//             {steps[1].title}
//           </h4>
//         </div>
//         <p className="text-gray-400 leading-relaxed">
//           {steps[1].desc}
//         </p>
//       </motion.div>

//       {/* Build (Right) */}
//       <motion.div
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         whileHover={{ y: -10, scale: 1.02 }}
//         transition={{ delay: 0.1 }}
//         className="md:col-span-2 md:col-start-3 rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-orange-400/40 hover:bg-white/10 transition"
//       >
//         <div className="flex items-center gap-4 mb-4">
//           <div className="text-orange-400">{steps[2].icon}</div>
//           <h4 className="text-xl font-semibold text-white">
//             {steps[2].title}
//           </h4>
//         </div>
//         <p className="text-gray-400 leading-relaxed">
//           {steps[2].desc}
//         </p>
//       </motion.div>

//       {/* Scale (Right) */}
//       <motion.div
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         whileHover={{ y: -10, scale: 1.02 }}
//         transition={{ delay: 0.15 }}
//         className="md:col-span-2 md:col-start-3 rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-orange-400/40 hover:bg-white/10 transition"
//       >
//         <div className="flex items-center gap-4 mb-4">
//           <div className="text-orange-400">{steps[3].icon}</div>
//           <h4 className="text-xl font-semibold text-white">
//             {steps[3].title}
//           </h4>
//         </div>
//         <p className="text-gray-400 leading-relaxed">
//           {steps[3].desc}
//         </p>
//       </motion.div>
//     </div>
//   </section>
// );


// }

// /* ================= MISSION / VISION ================= */
// function MissionVision() {
//   return (
//     <section className="mx-auto max-w-[1200px] px-6 py-24 grid lg:grid-cols-2 md:grid-cols-1 gap-8 -mt-16">
//       <motion.div
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="rounded-3xl border border-white/10 bg-white/5 p-10 hover:border-orange-400/40 hover:bg-white/10 transition"
//       >
//         <Target className="text-orange-400 mb-4" />
//         <h3 className="text-2xl font-semibold text-white mb-3">
//           Our Mission
//         </h3>
//         <p className="text-gray-400 leading-relaxed">
//           To empower businesses with scalable digital solutions that deliver
//           measurable growth through innovation, strategy, and technology.
//         </p>
//       </motion.div>

//       <motion.div
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="rounded-3xl border border-white/10 bg-white/5 p-10 hover:border-orange-400/40 hover:bg-white/10 transition"
//       >
//         <Rocket className="text-amber-400 mb-4" />
//         <h3 className="text-2xl font-semibold text-white mb-3">
//           Our Vision
//         </h3>
//         <p className="text-gray-400 leading-relaxed">
//           To become a globally trusted digital partner helping brands innovate,
//           adapt, and lead in the digital era.
//         </p>
//       </motion.div>
//     </section>
//   );
// }

// /* ================= SERVICES ================= */
// function ServicesGrid() {
//   const services = [
//     {
//       title: "Web Development",
//       desc: "We build fast, responsive, and scalable websites tailored to your business goals using modern technologies.",
//       icon: <Globe />,
//     },
//     {
//       title: "App Development",
//       desc: "Design and development of high-performance mobile applications for Android and iOS platforms.",
//       icon: <Smartphone />,
//     },
//     {
//       title: "SEO Optimization",
//       desc: "Improve your search visibility and organic traffic with data-driven SEO strategies.",
//       icon: <Search />,
//     },
//     {
//       title: "Custom Software",
//       desc: "End-to-end custom software solutions designed to streamline operations and drive efficiency.",
//       icon: <Code2 />,
//     },
//     {
//       title: "Digital Marketing",
//       desc: "Result-oriented marketing campaigns that boost brand awareness, engagement, and conversions.",
//       icon: <Megaphone />,
//     },
//     {
//       title: "Content Creation",
//       desc: "High-quality content that communicates your brand story and connects with your audience.",
//       icon: <PenTool />,
//     },
//   ];

//   return (
//     <section className="mx-auto max-w-[1200px] px-6 py-24 -mt-20">
//       <motion.h2
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="text-4xl font-bold text-white mb-12 text-center"
//       >
//         Discover Our Expertise
//       </motion.h2>

//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {services.map((service, i) => (
//           <motion.div
//             key={i}
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             whileHover={{ y: -8 }}
//             transition={{ duration: 0.3 }}
//             className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-orange-400/40 hover:bg-white/10 transition"
//           >
//             <div className="text-orange-400 mb-4 text-2xl">
//               {service.icon}
//             </div>

//             <h4 className="text-white font-semibold text-lg mb-2">
//               {service.title}
//             </h4>

//             <p className="text-gray-400 text-sm leading-relaxed">
//               {service.desc}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }



// /* ================= CTA ================= */
// function CTASection() {
//   return (
//     <motion.section
//       variants={fadeUp}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       className="mx-auto max-w-[1200px] px-6 py-24"
//     >
//       <div className="rounded-3xl bg-gradient-to-r from-orange-500 to-amber-400 p-14 text-center">
//         <h3 className="text-3xl font-bold text-black">
//           Let’s Build Your Digital Future
//         </h3>
//         <p className="mt-3 text-black/80">
//           Partner with Pie Tech Solutions to turn ideas into impactful digital
//           products.
//         </p>
//       </div>
//     </motion.section>
//   );
// }

// /* ================= PAGE ================= */
// export default function AboutPage() {
//   return (
//     <main className=" text-white">
//       <GlobeHero />
//       <StatsSection />
//       <ProcessSection />
//       <MissionVision />
//       <ServicesGrid />
//       <CTASection />
//     </main>
//   );
// }











