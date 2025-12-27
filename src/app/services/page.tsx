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

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ================= SERVICES ================= */
const SERVICES = [
  {
    title: "Digital Marketing",
    icon: <Megaphone className="text-orange-400" />,
    desc: "Data-driven strategies to attract, engage, and convert your ideal audience across digital platforms.",
  },
  {
    title: "SEO Optimization",
    icon: <Search className="text-amber-400" />,
    desc: "Improve rankings, increase organic traffic, and build long-term visibility on search engines.",
  },
  {
    title: "Social Media Marketing",
    icon: <Share2 className="text-orange-400" />,
    desc: "Build brand trust and awareness through impactful social media campaigns.",
  },
  {
    title: "Web Development",
    icon: <Globe className="text-amber-400" />,
    desc: "High-performance, SEO-friendly websites tailored to your business goals.",
  },
  {
    title: "App Development",
    icon: <Smartphone className="text-orange-400" />,
    desc: "Scalable Android & iOS apps designed for performance and usability.",
  },
  {
    title: "Software Development",
    icon: <Code2 className="text-amber-400" />,
    desc: "Custom software solutions built with modern, secure architectures.",
  },
];

/* ================= PAGE ================= */
export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pt-32 pb-24">

      {/* HERO */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mb-24 max-w-4xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Services That Drive <span className="text-orange-400">Growth</span>
        </h1>
        <p className="text-gray-400 text-lg">
          We combine technology, creativity, and marketing to build digital
          experiences that help businesses grow faster and smarter.
        </p>
      </motion.div>

      {/* SERVICES GRID */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3"
      >
        {SERVICES.map((service) => (
          <motion.div
            key={service.title}
            variants={fadeUp}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 group-hover:bg-orange-400/20 transition">
              {service.icon}
            </div>

            <h3 className="text-xl font-semibold text-white mb-3">
              {service.title}
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* WHY CHOOSE US */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-32 grid gap-10 lg:grid-cols-2"
      >
        {[
          {
            icon: <Shield />,
            title: "Reliable & Secure",
            desc: "We follow best practices to ensure performance, security, and scalability.",
          },
          {
            icon: <Rocket />,
            title: "Growth Focused",
            desc: "Every solution is designed to deliver measurable business results.",
          },
          {
            icon: <Users />,
            title: "Client-Centric",
            desc: "We work closely with clients to understand goals and deliver real value.",
          },
          {
            icon: <Globe />,
            title: "Innovative Solutions",
            desc: "We leverage the latest technologies to create cutting-edge digital experiences.",
          },
        ].map((item) => (
          <motion.div
            key={item.title}
            variants={fadeUp}
            className="rounded-2xl border border-white/10 bg-black/60 p-8"
          >
            <div className="mb-4 text-orange-400">{item.icon}</div>
            <h4 className="text-lg font-semibold text-white mb-2">
              {item.title}
            </h4>
            <p className="text-sm text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* PROCESS */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-32"
      >
        <h2 className="text-3xl font-bold text-white mb-12">
          Our Working Process
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          {[
            "Understand Requirements",
            "Plan & Design",
            "Develop & Optimize",
            "Launch & Scale",
          ].map((step, i) => (
            <motion.div
              key={step}
              variants={fadeUp}
              className="rounded-xl bg-white/5 p-6 border border-white/10"
            >
              <span className="text-orange-400 font-bold text-lg">
                0{i + 1}
              </span>
              <p className="mt-2 text-white font-medium">{step}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* STATS */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-32 grid gap-10 md:grid-cols-3 lg:grid-rows-1 text-center"
      >
        {[
          { value: "50+", label: "Projects Delivered" },
          { value: "100%", label: "Client Satisfaction" },
          { value: "24/7", label: "Support & Assistance" },
        ].map((stat) => (
          <motion.div key={stat.label} variants={fadeUp}>
            <p className="text-4xl font-bold text-orange-400">
              {stat.value}
            </p>
            <p className="text-gray-400 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* FINAL CTA */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-36 rounded-3xl bg-gradient-to-r from-orange-500 to-amber-400 p-14 text-center"
      >
        <h3 className="text-3xl font-bold text-black">
          Ready to Start Your Project?
        </h3>
        <p className="mt-3 text-black/80">
          Let’s build something impactful together.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 rounded-full bg-black px-10 py-3 font-semibold text-white hover:bg-black/90 transition"
        >
          Contact Us
        </Link>
      </motion.div>
    </section>
  );
}













// "use client";

// import { motion } from "framer-motion";
// import {
//   Code2,
//   Globe,
//   Megaphone,
//   Search,
//   Share2,
//   Smartphone,
// } from "lucide-react";

// /* ================= ANIMATION ================= */
// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0 },
// };

// /* ================= SERVICES DATA ================= */
// const SERVICES = [
//   {
//     title: "Digital Marketing",
//     icon: <Megaphone className="text-orange-400" />,
//     desc: "We create data-driven digital marketing strategies that help businesses attract the right audience, increase engagement, and drive measurable growth across multiple digital channels.",
//   },
//   {
//     title: "SEO Optimization",
//     icon: <Search className="text-amber-400" />,
//     desc: "Our SEO services improve your search engine visibility through keyword research, on-page optimization, technical SEO, and performance tracking to generate consistent organic traffic.",
//   },
//   {
//     title: "Social Media Marketing",
//     icon: <Share2 className="text-orange-400" />,
//     desc: "We help brands build a strong social media presence with engaging content, targeted campaigns, and consistent brand messaging that drives awareness and customer trust.",
//   },
//   {
//     title: "Web Development",
//     icon: <Globe className="text-amber-400" />,
//     desc: "We design and develop fast, secure, and scalable websites optimized for performance, SEO, and user experience—tailored to support your business objectives.",
//   },
//   {
//     title: "App Development",
//     icon: <Smartphone className="text-orange-400" />,
//     desc: "Our mobile app solutions focus on usability, performance, and scalability. We build Android and iOS applications that deliver seamless user experiences and long-term value.",
//   },
//   {
//     title: "Software Development",
//     icon: <Code2 className="text-amber-400" />,
//     desc: "We develop custom software solutions that streamline operations, improve efficiency, and scale with your business using modern, secure, and maintainable architectures.",
//   },
// ];

// /* ================= PAGE ================= */
// export default function ServicesPage() {
//   return (
//     <section className="mx-auto max-w-[1200px] px-6 pt-32 pb-24">
//       {/* ===== HEADER ===== */}
//       <motion.div
//         variants={fadeUp}
//         initial="hidden"
//         animate="visible"
//         transition={{ duration: 0.6 }}
//         className="max-w-3xl mb-16"
//       >
//         <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
//           Our Services
//         </h1>

//         <p className="text-gray-400 text-lg leading-relaxed">
//           We offer end-to-end digital services designed to help businesses
//           establish a strong online presence, attract the right customers, and
//           achieve sustainable growth through technology and marketing.
//         </p>
//       </motion.div>

//       {/* ===== SERVICES GRID ===== */}
//       <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
//         {SERVICES.map((service, i) => (
//           <motion.div
//             key={service.title}
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.1 }}
//             whileHover={{ y: -6 }}
//             className="rounded-2xl border border-white/10 bg-black/60 p-8 backdrop-blur hover:border-white/20 transition"
//           >
//             <div className="mb-4">{service.icon}</div>

//             <h3 className="text-xl font-semibold text-white mb-3">
//               {service.title}
//             </h3>

//             <p className="text-sm text-gray-400 leading-relaxed">
//               {service.desc}
//             </p>
//           </motion.div>
//         ))}
//       </div>

//       {/* ===== CTA ===== */}
//       <motion.div
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="mt-28 rounded-3xl bg-gradient-to-r from-orange-500 to-amber-400 p-12 text-center"
//       >
//         <h3 className="text-3xl font-bold text-black">
//           Let’s Build Something Great
//         </h3>
//         <p className="mt-3 text-black/80">
//           Tell us about your project and we’ll help you bring it to life.
//         </p>

//         <button className="mt-6 rounded-full bg-black px-8 py-3 font-semibold text-white hover:bg-black/90 transition">
//           Contact Us
//         </button>
//       </motion.div>
//     </section>
//   );
// }
