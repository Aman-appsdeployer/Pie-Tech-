"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Megaphone,
  Rocket,
  Search,
  Share2,
  Shield,
  Smartphone,
  Users,
} from "lucide-react";
import Link from "next/link";

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
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/* =========================================================
   SERVICES
========================================================= */

const SERVICES = [
  {
    title: "Digital Marketing",
    icon: <Megaphone size={27} />,
    desc: "We create data-driven digital marketing strategies that help you attract the right audience, generate quality leads, and increase conversions across multiple channels.",
    features: [
      "Google Ads & Meta Ads Campaigns",
      "Lead Generation & Funnel Optimization",
      "Conversion Rate Optimization (CRO)",
    ],
    outcome: "More leads, better ROI, and consistent business growth",
  },
  {
    title: "SEO Optimization",
    icon: <Search size={27} />,
    desc: "Boost your website’s visibility on search engines with advanced SEO strategies that drive long-term organic traffic and improve rankings.",
    features: [
      "On-page & Technical SEO",
      "Keyword Research & Competitor Analysis",
      "Content Strategy & Backlink Building",
    ],
    outcome: "Higher Google rankings and sustainable organic traffic",
  },
  {
    title: "Social Media Marketing",
    icon: <Share2 size={27} />,
    desc: "We build your brand presence on social media platforms through engaging content, targeted campaigns, and audience-focused strategies.",
    features: [
      "Content Creation & Reels Strategy",
      "Paid Social Media Campaigns",
      "Audience Engagement & Growth",
    ],
    outcome: "Stronger brand awareness and higher audience engagement",
  },
  {
    title: "Web Development",
    icon: <Globe size={27} />,
    desc: "We design and develop fast, responsive, and SEO-friendly websites that convert visitors into customers and support your business growth.",
    features: [
      "Custom Websites (Next.js / React)",
      "Landing Pages & Funnels",
      "E-commerce Development",
    ],
    outcome: "High-converting websites that drive sales and leads",
  },
  {
    title: "App Development",
    icon: <Smartphone size={27} />,
    desc: "Build scalable and user-friendly mobile applications for Android and iOS with seamless performance and modern UI/UX.",
    features: [
      "Android & iOS App Development",
      "UI/UX Design & Prototyping",
      "API Integration & Backend Support",
    ],
    outcome: "Smooth user experience with scalable mobile solutions",
  },
  {
    title: "Software Development",
    icon: <Code2 size={27} />,
    desc: "We create custom software solutions tailored to your business needs, helping you automate processes and improve efficiency.",
    features: [
      "Custom CRM & ERP Systems",
      "Business Automation Tools",
      "Dashboard & Analytics Systems",
    ],
    outcome: "Improved efficiency, automation, and business scalability",
  },
];

/* =========================================================
   WHY CHOOSE US
========================================================= */

const WHY_CHOOSE_US = [
  {
    icon: <Shield size={27} />,
    title: "Reliable & Secure",
    desc: "We follow industry best practices to ensure your website, app, or software is secure, scalable, and performs seamlessly under all conditions.",
    points: [
      "Secure architecture & data protection",
      "High-performance optimized systems",
      "Scalable solutions for future growth",
    ],
  },
  {
    icon: <Rocket size={27} />,
    title: "Growth Focused",
    desc: "Every solution we build is aligned with your business goals — helping you generate leads, increase conversions, and maximize ROI.",
    points: [
      "Conversion-driven strategies",
      "Performance tracking & analytics",
      "Marketing + technology combined approach",
    ],
  },
  {
    icon: <Users size={27} />,
    title: "Client-Centric Approach",
    desc: "We work closely with you at every stage, ensuring transparency, collaboration, and solutions tailored to your needs.",
    points: [
      "Regular updates & communication",
      "Customized solutions",
      "Dedicated support & guidance",
    ],
  },
  {
    icon: <Globe size={27} />,
    title: "Modern & Innovative",
    desc: "We use the latest technologies and trends to deliver modern digital experiences that stand out in the competitive market.",
    points: [
      "Latest tech stack (React, Next.js, AI)",
      "Modern UI/UX design standards",
      "Future-ready development approach",
    ],
  },
];

/* =========================================================
   PROCESS
========================================================= */

const PROCESS = [
  {
    title: "Understand Your Requirements",
    desc: "We start by deeply understanding your business, goals, target audience, and challenges to create the right strategy.",
    points: [
      "Business & competitor analysis",
      "Goal identification",
      "Target audience research",
    ],
  },
  {
    title: "Plan & Design Strategy",
    desc: "We create a clear roadmap and design user-focused experiences that align with your brand and business goals.",
    points: [
      "UI/UX design & wireframes",
      "Technology & platform selection",
      "Marketing strategy planning",
    ],
  },
  {
    title: "Develop & Optimize",
    desc: "Our team builds high-performance solutions and continuously optimizes them for speed, SEO, and conversions.",
    points: [
      "Clean & scalable development",
      "Performance optimization",
      "SEO & conversion setup",
    ],
  },
  {
    title: "Launch & Scale",
    desc: "After launch, we monitor performance, optimize campaigns, and help you scale your business efficiently.",
    points: [
      "Live deployment",
      "Performance tracking",
      "Growth & scaling strategies",
    ],
  },
];

/* =========================================================
   STATS
========================================================= */

const STATS = [
  {
    value: "100+",
    label: "Projects Delivered",
    desc: "Completed projects across web, mobile & marketing domains.",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    desc: "Trusted by clients for quality work and timely delivery.",
  },
  {
    value: "24/7",
    label: "Support & Assistance",
    desc: "Always available to support and grow your business.",
  },
];

/* =========================================================
   SERVICES PAGE
========================================================= */

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      {/* =====================================================
          GLOBAL BACKGROUND
          Do not use another solid bg-black wrapper.
          This keeps the global ShadowCursor visible.
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-180px] top-[4%] h-[500px] w-[500px] rounded-full bg-orange-500/[0.08] blur-[160px]" />

        <div className="absolute right-[-180px] top-[30%] h-[500px] w-[500px] rounded-full bg-amber-400/[0.07] blur-[160px]" />

        <div className="absolute bottom-[20%] left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-orange-500/[0.05] blur-[170px]" />
      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-6 md:pb-28 md:pt-28 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            {/* Badge */}

            <div
              className="
                mb-7
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-orange-400/20
                bg-orange-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-orange-400
                backdrop-blur-md
              "
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-orange-400" />

              Our Services
            </div>

            {/* Heading */}

            <h1
              className="
                text-4xl
                font-bold
                leading-[1.05]
                tracking-tight
                text-white
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              We Help Businesses{" "}
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
                Grow Faster
              </span>{" "}
              with Powerful Digital Solutions
            </h1>

            {/* Description */}

            <p
              className="
                mt-7
                max-w-3xl
                text-base
                leading-7
                text-gray-400
                sm:text-lg
                md:text-xl
                md:leading-8
              "
            >
              From high-converting websites to result-driven marketing
              strategies, we help startups and businesses attract more
              customers, increase revenue, and scale confidently in the
              digital world.
            </p>

            {/* Buttons */}

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="
                  rounded-full
                  bg-gradient-to-r
                  from-orange-500
                  to-amber-400
                  px-7
                  py-3.5
                  text-center
                  font-semibold
                  text-black
                  shadow-[0_0_35px_rgba(249,115,22,0.15)]
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_0_45px_rgba(249,115,22,0.3)]
                "
              >
                Get Free Consultation
              </Link>

              <Link
                href="/portfolio"
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-7
                  py-3.5
                  text-center
                  font-semibold
                  text-white
                  backdrop-blur-md
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-orange-400/40
                  hover:bg-orange-500/10
                "
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-24 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {SERVICES.map((service, index) => (
              <motion.article
                key={service.title}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  group
                  relative
                  flex
                  h-full
                  flex-col
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
                "
              >
                {/* Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-orange-500/10
                    blur-3xl
                    transition
                    duration-500
                    group-hover:bg-orange-500/20
                  "
                />

                {/* Number */}

                <span className="absolute right-6 top-5 text-5xl font-black text-white/[0.035]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10 flex h-full flex-col">
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
                      group-hover:scale-110
                      group-hover:bg-orange-500
                      group-hover:text-black
                    "
                  >
                    {service.icon}
                  </div>

                  {/* Title */}

                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {service.title}
                  </h3>

                  {/* Description */}

                  <p className="mb-6 text-sm leading-7 text-gray-400">
                    {service.desc}
                  </p>

                  {/* Features */}

                  <ul className="mb-7 space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-gray-300"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Outcome */}

                  <div className="mt-auto border-t border-white/10 pt-5">
                    <p className="text-sm font-semibold leading-6 text-orange-400">
                      {service.outcome}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className="relative z-10 py-20 sm:py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14 max-w-3xl"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              Why Pie Tech
            </span>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Why Choose{" "}
              <span className="text-orange-400">
                Us?
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-400 sm:text-lg">
              We don’t just deliver services — we build long-term partnerships
              focused on growth, performance, and real business results.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-6 md:grid-cols-2"
          >
            {WHY_CHOOSE_US.map((item) => (
              <motion.article
                key={item.title}
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
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {item.desc}
                </p>

                <ul className="mt-6 space-y-3">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />

                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="relative z-10 py-20 sm:py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14 max-w-3xl"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              How We Work
            </span>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Our Proven{" "}
              <span className="text-orange-400">
                Process
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-400 sm:text-lg">
              We follow a structured and results-driven approach to ensure
              every project delivers maximum impact, performance, and
              long-term growth.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-6 md:grid-cols-2"
          >
            {PROCESS.map((step, index) => (
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
                    top-5
                    text-6xl
                    font-black
                    text-white/[0.04]
                  "
                >
                  0{index + 1}
                </div>

                <div className="relative z-10">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
                    Step 0{index + 1}
                  </span>

                  <h3 className="mt-5 text-xl font-semibold text-white sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {step.desc}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {step.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm text-gray-300"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />

                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="relative z-10 py-20 sm:py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              Our Impact
            </span>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Our Impact in{" "}
              <span className="text-orange-400">
                Numbers
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-400 sm:text-lg">
              We deliver measurable results that help businesses grow, scale,
              and succeed in the digital world.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-3"
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="
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
                <p
                  className="
                    text-4xl
                    font-black
                    text-orange-400
                    sm:text-5xl
                  "
                >
                  {stat.value}
                </p>

                <h3 className="mt-3 text-lg font-semibold text-white">
                  {stat.label}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative z-10 px-5 pb-20 pt-10 sm:px-6 sm:pb-28 lg:px-8">
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
            md:px-12
            md:py-16
          "
        >
          {/* Glow */}

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-white/20 blur-3xl" />

            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-100/20 blur-3xl" />
          </div>

          <div className="relative z-10">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-black/60">
              Start Your Growth Journey
            </span>

            <h3 className="mt-4 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl">
              Let&apos;s Turn Your Idea Into a{" "}
              <span className="underline decoration-black/50">
                High-Growth Business
              </span>
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/80 sm:text-lg">
              Whether you&apos;re launching a startup or scaling your
              business, we build high-performance digital solutions that
              attract customers, boost conversions, and accelerate your
              growth.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
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
                Get Free Consultation
              </Link>

              <Link
                href="/services"
                className="
                  rounded-full
                  border
                  border-black/30
                  px-7
                  py-3.5
                  font-semibold
                  text-black
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:bg-black
                  hover:text-white
                "
              >
                Explore Services
              </Link>
            </div>

            <p className="mt-6 text-xs font-medium text-black/70 sm:text-sm">
              No commitment • Free strategy call • Response within 24 hours
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}





// 'use client';

// import { motion } from 'framer-motion';
// import { Code2, Globe, Megaphone, Rocket, Search, Share2, Shield, Smartphone, Users } from 'lucide-react';
// import Link from 'next/link';


// /* ================= ANIMATIONS ================= */

// const fadeUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// const stagger = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.12 } },
// };

// /* ================= SERVICES ================= */

// const SERVICES = [
//   {
//     title: 'Digital Marketing',
//     icon: <Megaphone className="text-orange-500 dark:text-orange-400" />,
//     desc: 'We create data-driven digital marketing strategies that help you attract the right audience, generate quality leads, and increase conversions across multiple channels.',
//     features: [
//       'Google Ads & Meta Ads Campaigns',
//       'Lead Generation & Funnel Optimization',
//       'Conversion Rate Optimization (CRO)',
//     ],
//     outcome: 'More leads, better ROI, and consistent business growth',
//   },
//   {
//     title: 'SEO Optimization',
//     icon: <Search className="text-amber-500 dark:text-amber-400" />,
//     desc: 'Boost your website’s visibility on search engines with advanced SEO strategies that drive long-term organic traffic and improve rankings.',
//     features: [
//       'On-page & Technical SEO',
//       'Keyword Research & Competitor Analysis',
//       'Content Strategy & Backlink Building',
//     ],
//     outcome: 'Higher Google rankings and sustainable organic traffic',
//   },
//   {
//     title: 'Social Media Marketing',
//     icon: <Share2 className="text-orange-500 dark:text-orange-400" />,
//     desc: 'We build your brand presence on social media platforms through engaging content, targeted campaigns, and audience-focused strategies.',
//     features: ['Content Creation & Reels Strategy', 'Paid Social Media Campaigns', 'Audience Engagement & Growth'],
//     outcome: 'Stronger brand awareness and higher audience engagement',
//   },
//   {
//     title: 'Web Development',
//     icon: <Globe className="text-amber-500 dark:text-amber-400" />,
//     desc: 'We design and develop fast, responsive, and SEO-friendly websites that convert visitors into customers and support your business growth.',
//     features: ['Custom Websites (Next.js / React)', 'Landing Pages & Funnels', 'E-commerce Development'],
//     outcome: 'High-converting website that drives sales and leads',
//   },
//   {
//     title: 'App Development',
//     icon: <Smartphone className="text-orange-500 dark:text-orange-400" />,
//     desc: 'Build scalable and user-friendly mobile applications for Android and iOS with seamless performance and modern UI/UX.',
//     features: ['Android & iOS App Development', 'UI/UX Design & Prototyping', 'API Integration & Backend Support'],
//     outcome: 'Smooth user experience with scalable mobile solutions',
//   },
//   {
//     title: 'Software Development',
//     icon: <Code2 className="text-amber-500 dark:text-amber-400" />,
//     desc: 'We create custom software solutions tailored to your business needs, helping you automate processes and improve efficiency.',
//     features: ['Custom CRM & ERP Systems', 'Business Automation Tools', 'Dashboard & Analytics Systems'],
//     outcome: 'Improved efficiency, automation, and business scalability',
//   },
// ];

// /* ================= PAGE ================= */

// export default function ServicesPage() {
//   return (
//     <section className="mx-auto w-full bg-black px-5 pb-20 pt-20 text-white sm:px-6 md:pb-24 md:pt-28">
//       {/* HERO */}

//       <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-14 max-w-4xl md:mb-24">
//         <h1 className="mb-6 text-5xl font-bold leading-tight text-black dark:text-white md:text-6xl">
//           We Help Businesses <span className="text-orange-500">Grow Faster</span> with Powerful Digital Solutions
//         </h1>

//         <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
//           From high-converting websites to result-driven marketing strategies, we help startups and businesses attract
//           more customers, increase revenue, and scale confidently in the digital world.
//         </p>

//         <div className="mt-6 flex flex-wrap gap-4">
//           <a
//             href="/contact"
//             className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
//           >
//              Get Free Consultation
//           </a>

//           <a
//             href="/portfolio"
//             className="rounded-full border border-gray-300 px-6 py-3 font-semibold text-black transition hover:bg-black hover:text-white dark:text-white"
//           >
//             View Our Work
//           </a>
//         </div>
//       </motion.div>

//       {/* SERVICES GRID */}

//       <motion.div
//         variants={stagger}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="grid gap-6 sm:grid-cols-2 md:grid-cols-3"
//       >
//         {SERVICES.map((service) => (
//           <motion.div
//             key={service.title}
//             variants={fadeUp}
//             whileHover={{ y: -10, scale: 1.03 }}
//             className="group rounded-2xl border border-gray-200 bg-white p-8 transition hover:shadow-xl dark:border-white/10 dark:bg-white/5"
//           >
//             {/* ICON */}
//             <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 transition group-hover:bg-orange-400/20 dark:bg-white/10">
//               {service.icon}
//             </div>

//             {/* TITLE */}
//             <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">{service.title}</h3>

//             {/* DESCRIPTION */}
//             <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{service.desc}</p>

//             {/* FEATURES */}
//             <ul className="mb-4 space-y-2">
//               {service.features?.map((feature: string) => (
//                 <li key={feature} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
//                   <span className="h-2 w-2 rounded-full bg-orange-500"></span>
//                   {feature}
//                 </li>
//               ))}
//             </ul>

//             {/* OUTCOME */}
//             <p className="text-sm font-semibold text-orange-500">{service.outcome}</p>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* WHY CHOOSE US */}

//       <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-20 md:mt-32">
//         {/* SECTION HEADING */}
//         <div className="mb-14 max-w-2xl">
//           <h2 className="text-3xl font-bold text-black dark:text-white md:text-4xl">Why Choose Us?</h2>
//           <p className="mt-3 text-gray-600 dark:text-gray-400">
//             We don’t just deliver services — we build long-term partnerships focused on growth, performance, and real
//             business results.
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="grid gap-8 lg:grid-cols-2">
//           {[
//             {
//               icon: <Shield />,
//               title: 'Reliable & Secure',
//               desc: 'We follow industry best practices to ensure your website, app, or software is secure, scalable, and performs seamlessly under all conditions.',
//               points: [
//                 'Secure architecture & data protection',
//                 'High-performance optimized systems',
//                 'Scalable solutions for future growth',
//               ],
//             },
//             {
//               icon: <Rocket />,
//               title: 'Growth Focused',
//               desc: 'Every solution we build is aligned with your business goals — helping you generate leads, increase conversions, and maximize ROI.',
//               points: [
//                 'Conversion-driven strategies',
//                 'Performance tracking & analytics',
//                 'Marketing + tech combined approach',
//               ],
//             },
//             {
//               icon: <Users />,
//               title: 'Client-Centric Approach',
//               desc: 'We work closely with you at every stage, ensuring transparency, collaboration, and solutions tailored to your needs.',
//               points: [
//                 'Regular updates & communication',
//                 'Customized solutions (not templates)',
//                 'Dedicated support & guidance',
//               ],
//             },
//             {
//               icon: <Globe />,
//               title: 'Modern & Innovative',
//               desc: 'We use the latest technologies and trends to deliver modern digital experiences that stand out in the competitive market.',
//               points: [
//                 'Latest tech stack (React, Next.js, AI)',
//                 'Modern UI/UX design standards',
//                 'Future-ready development approach',
//               ],
//             },
//           ].map((item) => (
//             <motion.div
//               key={item.title}
//               variants={fadeUp}
//               whileHover={{ y: -6 }}
//               className="group rounded-2xl border border-gray-200 bg-white p-8 transition hover:shadow-xl dark:border-white/10 dark:bg-black/60"
//             >
//               {/* ICON */}
//               <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
//                 {item.icon}
//               </div>

//               {/* TITLE */}
//               <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">{item.title}</h4>

//               {/* DESCRIPTION */}
//               <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>

//               {/* POINTS */}
//               <ul className="space-y-2">
//                 {item.points.map((point) => (
//                   <li key={point} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
//                     <span className="h-2 w-2 rounded-full bg-orange-500"></span>
//                     {point}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       {/* PROCESS */}

//       <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-20 md:mt-32">
//         {/* HEADING */}
//         <div className="mb-14 max-w-2xl">
//           <h2 className="text-3xl font-bold text-black dark:text-white md:text-4xl">Our Proven Process</h2>
//           <p className="mt-3 text-gray-600 dark:text-gray-400">
//             We follow a structured and results-driven approach to ensure every project delivers maximum impact,
//             performance, and long-term growth.
//           </p>
//         </div>

//         {/* STEPS */}
//         <div className="grid gap-8 md:grid-cols-2">
//           {[
//             {
//               title: 'Understand Your Requirements',
//               desc: 'We start by deeply understanding your business, goals, target audience, and challenges to create the right strategy.',
//               points: ['Business & competitor analysis', 'Goal identification', 'Target audience research'],
//             },
//             {
//               title: 'Plan & Design Strategy',
//               desc: 'We create a clear roadmap and design user-focused experiences that align with your brand and business goals.',
//               points: ['UI/UX design & wireframes', 'Technology & platform selection', 'Marketing strategy planning'],
//             },
//             {
//               title: 'Develop & Optimize',
//               desc: 'Our team builds high-performance solutions and continuously optimizes them for speed, SEO, and conversions.',
//               points: ['Clean & scalable development', 'Performance optimization', 'SEO & conversion setup'],
//             },
//             {
//               title: 'Launch & Scale',
//               desc: 'After launch, we monitor performance, optimize campaigns, and help you scale your business efficiently.',
//               points: ['Live deployment', 'Performance tracking', 'Growth & scaling strategies'],
//             },
//           ].map((step, i) => (
//             <motion.div
//               key={step.title}
//               variants={fadeUp}
//               whileHover={{ y: -6 }}
//               className="relative rounded-2xl border border-gray-200 bg-white p-8 transition hover:shadow-xl dark:border-white/10 dark:bg-white/5"
//             >
//               {/* STEP NUMBER */}
//               <div className="absolute right-6 top-6 text-5xl font-extrabold text-gray-200 dark:text-white/10">
//                 0{i + 1}
//               </div>

//               {/* TITLE */}
//               <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">{step.title}</h4>

//               {/* DESCRIPTION */}
//               <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{step.desc}</p>

//               {/* POINTS */}
//               <ul className="space-y-2">
//                 {step.points.map((point) => (
//                   <li key={point} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
//                     <span className="h-2 w-2 rounded-full bg-orange-500"></span>
//                     {point}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       {/* STATS */}

//       <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-20 md:mt-32">
//         {/* HEADING */}
//         <div className="mx-auto mb-12 max-w-2xl text-center">
//           <h2 className="text-3xl font-bold text-black dark:text-white md:text-4xl">Our Impact in Numbers</h2>
//           <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 md:text-base">
//             We deliver measurable results that help businesses grow, scale, and succeed in the digital world.
//           </p>
//         </div>

//         {/* STATS GRID */}
//         <div className="grid gap-6 text-center sm:grid-cols-2 md:grid-cols-3">
//           {[
//             {
//               value: '100+',
//               label: 'Projects Delivered',
//               desc: 'Completed projects across web, mobile & marketing domains.',
//             },
//             {
//               value: '98%',
//               label: 'Client Satisfaction',
//               desc: 'Trusted by clients for quality work and timely delivery.',
//             },
//             {
//               value: '24/7',
//               label: 'Support & Assistance',
//               desc: 'Always available to support and grow your business.',
//             },
//           ].map((stat) => (
//             <motion.div
//               key={stat.label}
//               variants={fadeUp}
//               whileHover={{ y: -6 }}
//               className="rounded-2xl border border-gray-200 bg-white p-8 transition hover:shadow-xl dark:border-white/10 dark:bg-white/5"
//             >
//               {/* VALUE */}
//               <p className="text-3xl font-extrabold text-orange-500 sm:text-4xl md:text-5xl">{stat.value}</p>

//               {/* LABEL */}
//               <p className="mt-2 text-base font-semibold text-black dark:text-white md:text-lg">{stat.label}</p>

//               {/* DESCRIPTION */}
//               <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-base">{stat.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       {/* FINAL CTA */}

//       <motion.div
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="relative mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-12 text-center md:mt-36 md:px-12 md:py-14"
//       >
//         {/* BACKGROUND GLOW */}
//         <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_60%)]" />

//         {/* CONTENT */}
//         <div className="relative z-10">
//           {/* HEADING */}
//           <h3 className="text-2xl font-bold leading-tight text-black sm:text-3xl md:text-4xl">
//             Let&apos;s Turn Your Idea Into a <span className="underline decoration-black/70">High-Growth Business</span>
//           </h3>

//           {/* DESCRIPTION */}
//           <p className="mx-auto mt-4 max-w-2xl text-base text-black/90 sm:text-lg">
//             Whether you&apos;re launching a startup or scaling your business, we build high-performance digital solutions
//             that attract customers, boost conversions, and accelerate your growth.
//           </p>

//           {/* BUTTONS */}
//           <div className="mt-6 flex flex-col gap-4 sm:flex-row">
//             <Link
//               href="/contact"
//               className="rounded-full bg-black px-6 py-3 text-center font-semibold text-white transition hover:scale-105 hover:bg-black/90"
//             >
//                Get Free Consultation
//             </Link>

//             <Link
//               href="/services"
//               className="rounded-full border border-black/30 px-6 py-3 text-center font-semibold text-black transition hover:bg-black hover:text-white"
//             >
//               Explore Services
//             </Link>
//           </div>

//           {/* TRUST LINE */}
//           <p className="mt-5 text-xs text-black/80 sm:text-sm">
//             No commitment • Free strategy call • Response within 24 hours
//           </p>
//         </div>
//       </motion.div>
//     </section>
//   );
// }
