"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

/* =========================================================
   CONTACT HERO
========================================================= */

function ContactHero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      {/* Orange Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-10
          -z-10
          h-[450px]
          w-[450px]
          -translate-x-1/2
          rounded-full
          bg-orange-500/20
          blur-[180px]
        "
      />

      {/* Subtle Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          opacity-[0.08]
          [background-image:radial-gradient(#ffffff_1px,transparent_1px)]
          [background-size:32px_32px]
        "
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        {/* Badge */}
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="
            mb-8
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-orange-500/20
            bg-orange-500/10
            px-5
            py-2
            text-sm
            font-medium
            text-orange-300
            backdrop-blur-md
          "
        >
          <Sparkles size={16} />
          Contact Pie Tech Solutions
        </motion.span>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="
            max-w-5xl
            text-5xl
            font-extrabold
            leading-[1.05]
            tracking-tight
            text-white
            md:text-7xl
          "
        >
          Let's Build Something{" "}
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
            Extraordinary
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="
            mt-8
            max-w-3xl
            text-lg
            leading-8
            text-gray-400
            md:text-xl
          "
        >
          Whether you're launching a startup, scaling your business, or
          transforming digitally, our team is here to help you create secure,
          scalable, and high-performance solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <button
            type="button"
            className="
              rounded-full
              bg-gradient-to-r
              from-orange-500
              to-amber-400
              px-8
              py-4
              font-semibold
              text-black
              shadow-[0_0_35px_rgba(249,115,22,0.18)]
              transition
              duration-300
              hover:scale-105
              hover:shadow-[0_0_45px_rgba(249,115,22,0.3)]
            "
          >
            Book Free Consultation
          </button>

          <button
            type="button"
            className="
              rounded-full
              border
              border-white/10
              bg-white/5
              px-8
              py-4
              font-semibold
              text-white
              backdrop-blur-md
              transition
              duration-300
              hover:scale-105
              hover:border-orange-400/40
              hover:bg-orange-500/10
            "
          >
            View Our Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   WHY CONTACT US
========================================================= */

function WhyContactUs() {
  const points = [
    {
      icon: <ShieldCheck size={30} />,
      title: "Trusted Expertise",
      desc: "Our experienced professionals deliver secure, scalable digital solutions tailored to your business goals.",
    },
    {
      icon: <Clock size={30} />,
      title: "Fast Response",
      desc: "We ensure quick communication, transparent updates, and timely project delivery at every stage.",
    },
    {
      icon: <Users size={30} />,
      title: "Client First",
      desc: "Your success is our priority. We build long-term partnerships that create measurable business value.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-20">
      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-10
          -z-10
          h-[420px]
          w-[420px]
          -translate-x-1/2
          rounded-full
          bg-orange-500/10
          blur-[140px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span
            className="
              inline-flex
              rounded-full
              border
              border-orange-500/20
              bg-orange-500/10
              px-5
              py-2
              text-sm
              font-medium
              text-orange-400
            "
          >
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            Why Businesses{" "}
            <span
              className="
                bg-gradient-to-r
                from-orange-400
                to-amber-300
                bg-clip-text
                text-transparent
              "
            >
              Trust Pie Tech
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            We combine innovation, technology, and strategic thinking to help
            businesses grow faster with reliable digital solutions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {points.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                transition-colors
                duration-300
                hover:border-orange-400/30
              "
            >
              {/* Hover Glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />
              </div>

              <div className="relative z-10">
                <div
                  className="
                    mb-6
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-orange-500
                    to-amber-400
                    text-black
                    shadow-lg
                    shadow-orange-500/20
                  "
                >
                  {item.icon}
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-white transition group-hover:text-orange-400">
                  {item.title}
                </h3>

                <p className="leading-7 text-gray-400">
                  {item.desc}
                </p>

                <div className="mt-8 flex items-center gap-2 text-orange-400 opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100">
                  <span className="text-sm font-medium">Learn More</span>
                  <span>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CONTACT INFORMATION
========================================================= */

function ContactInfo() {
  const info = [
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      value: "info@pietechsolutions.com",
      desc: "Send us your project details anytime.",
      color: "from-orange-500 to-amber-400",
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      value: "+91 89100 34602",
      desc: "We're available Monday to Saturday.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <MapPin size={24} />,
      title: "Visit Our Office",
      value: "Kolkata, West Bengal, India",
      desc: "Let's discuss your next big idea in person.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span
          className="
            inline-flex
            rounded-full
            border
            border-orange-500/20
            bg-orange-500/10
            px-4
            py-2
            text-sm
            font-medium
            text-orange-400
          "
        >
          Get In Touch
        </span>

        <h2 className="mt-5 text-4xl font-bold text-white">
          We'd Love to{" "}
          <span
            className="
              bg-gradient-to-r
              from-orange-400
              to-amber-300
              bg-clip-text
              text-transparent
            "
          >
            Hear From You
          </span>
        </h2>

        <p className="mt-4 max-w-md leading-7 text-gray-400">
          Whether you have a project idea, business inquiry, or simply want to
          connect, our team is here to help.
        </p>
      </motion.div>

      {/* Contact Cards */}
      <div className="space-y-6">
        {info.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            transition={{ duration: 0.3 }}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
              backdrop-blur-xl
              hover:border-orange-400/30
            "
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />
            </div>

            <div className="relative z-10 flex items-start gap-5">
              <div
                className={`
                  flex
                  h-16
                  w-16
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  ${item.color}
                  text-black
                  shadow-lg
                `}
              >
                {item.icon}
              </div>

              <div className="flex-1">
                <h4 className="text-xl font-semibold text-white transition group-hover:text-orange-400">
                  {item.title}
                </h4>

                <p className="mt-2 break-all text-lg font-medium text-gray-200">
                  {item.value}
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {item.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="
          rounded-3xl
          border
          border-orange-500/20
          bg-gradient-to-br
          from-orange-500/10
          to-transparent
          p-6
          backdrop-blur-xl
        "
      >
        <h3 className="text-xl font-semibold text-white">
          Ready to Start Your Project?
        </h3>

        <p className="mt-3 text-gray-400">
          Let's create innovative digital solutions that drive your business
          forward.
        </p>

        <button
          type="button"
          className="
            mt-6
            rounded-full
            bg-gradient-to-r
            from-orange-500
            to-amber-400
            px-6
            py-3
            font-semibold
            text-black
            transition
            hover:scale-105
          "
        >
          Schedule a Free Consultation
        </button>
      </motion.div>
    </div>
  );
}

/* =========================================================
   CONTACT FORM
========================================================= */

function ContactForm() {
  return (
    <motion.form
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="
        space-y-6
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        md:p-10
      "
    >
      <div>
        <span className="text-sm font-medium uppercase tracking-[0.2em] text-orange-400">
          Start a Conversation
        </span>

        <h3 className="mt-3 text-3xl font-bold text-white">
          Send Us a Message
        </h3>

        <p className="mt-3 text-gray-400">
          Tell us about your project and our team will get back to you.
        </p>
      </div>

      <input
        type="text"
        placeholder="Your Name"
        className="
          w-full
          rounded-xl
          border
          border-white/10
          bg-black/60
          p-4
          text-white
          placeholder:text-gray-500
          outline-none
          transition
          focus:border-orange-500
          focus:ring-1
          focus:ring-orange-500
        "
      />

      <input
        type="email"
        placeholder="Your Email"
        className="
          w-full
          rounded-xl
          border
          border-white/10
          bg-black/60
          p-4
          text-white
          placeholder:text-gray-500
          outline-none
          transition
          focus:border-orange-500
          focus:ring-1
          focus:ring-orange-500
        "
      />

      <textarea
        rows={6}
        placeholder="Tell us about your project..."
        className="
          w-full
          resize-none
          rounded-xl
          border
          border-white/10
          bg-black/60
          p-4
          text-white
          placeholder:text-gray-500
          outline-none
          transition
          focus:border-orange-500
          focus:ring-1
          focus:ring-orange-500
        "
      />

      <button
        type="submit"
        className="
          inline-flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-full
          bg-gradient-to-r
          from-orange-500
          to-amber-400
          px-10
          py-4
          font-semibold
          text-black
          shadow-[0_0_30px_rgba(249,115,22,0.15)]
          transition
          hover:scale-[1.02]
          hover:shadow-[0_0_40px_rgba(249,115,22,0.25)]
        "
      >
        <Send size={16} />
        Send Message
      </button>
    </motion.form>
  );
}

/* =========================================================
   MAP
========================================================= */

function MapSection() {
  return (
    <section className="relative py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-orange-400">
            Our Location
          </span>

          <h3 className="mt-3 text-4xl font-bold text-white">
            Find Us in{" "}
            <span className="text-orange-400">
              Kolkata
            </span>
          </h3>

          <p className="mt-3 max-w-2xl text-gray-400">
            Visit us or connect with our team to discuss your next digital
            project.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            shadow-2xl
            shadow-black/30
          "
        >
          <iframe
            title="Pie Tech Solutions Kolkata"
            src="https://www.google.com/maps?q=Kolkata,India&output=embed"
            className="h-[420px] w-full border-0"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function ContactPage() {
  return (
    /*
      IMPORTANT:
      Do NOT use bg-black here.

      The global ShadowCursor is already mounted
      inside app/layout.tsx.

      Keeping this page transparent allows the
      cursor canvas to remain visible.
    */
    <main className="relative min-h-screen text-white">
      <ContactHero />

      <WhyContactUs />

      <section className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </section>

      <MapSection />
    </main>
  );
}




// 'use client';

// import { motion } from 'framer-motion';
// import { Clock, Mail, MapPin, Phone, Send, ShieldCheck, Sparkles, Users } from 'lucide-react';

// /* ================= ANIMATION ================= */

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0 },
// };

// /* ================= HERO ================= */

// function ContactHero() {
//   return (
//     <section className="relative overflow-hidden  md:py-36">
//       {/* Background Glow */}
//       <div className="absolute inset-0 -z-30 bg-black" />

//       <div className="absolute left-1/2 top-20 -z-10 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-orange-500/20 blur-[180px]" />

//       {/* Small Grid */}
//       <div className="absolute inset-0 -z-10 opacity-10 [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />

//       <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
//         <motion.span
//           variants={fadeUp}
//           initial="hidden"
//           animate="visible"
//           className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm font-medium text-orange-300 backdrop-blur-md"
//         >
//           <Sparkles size={16} />
//           Contact Pie Tech Solutions
//         </motion.span>

//         <motion.h1
//           variants={fadeUp}
//           initial="hidden"
//           animate="visible"
//           transition={{ delay: 0.1 }}
//           className="max-w-5xl text-5xl font-extrabold leading-tight text-white md:text-7xl"
//         >
//           Let's Build Something{' '}
//           <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-300 bg-clip-text text-transparent">
//             Extraordinary
//           </span>
//         </motion.h1>

//         <motion.p
//           variants={fadeUp}
//           initial="hidden"
//           animate="visible"
//           transition={{ delay: 0.2 }}
//           className="mt-8 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl"
//         >
//           Whether you're launching a startup, scaling your business, or transforming digitally, our team is here to help
//           you create secure, scalable, and high-performance solutions.
//         </motion.p>

//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           animate="visible"
//           transition={{ delay: 0.3 }}
//           className="mt-12 flex flex-col gap-4 sm:flex-row"
//         >
//           <button className="rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-8 py-4 font-semibold text-black transition hover:scale-105">
//             Book Free Consultation
//           </button>

//           <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:border-orange-400">
//             View Our Services
//           </button>
//         </motion.div>

        
//       </div>
//     </section>
//   );
// }

// /* ================= WHY CONTACT US ================= */

// function WhyContactUs() {
//   const points = [
//     {
//       icon: <ShieldCheck size={30} />,
//       title: "Trusted Expertise",
//       desc: "Our experienced professionals deliver secure, scalable digital solutions tailored to your business goals.",
//     },
//     {
//       icon: <Clock size={30} />,
//       title: "Fast Response",
//       desc: "We ensure quick communication, transparent updates, and timely project delivery at every stage.",
//     },
//     {
//       icon: <Users size={30} />,
//       title: "Client First",
//       desc: "Your success is our priority. We build long-term partnerships that create measurable business value.",
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden py-4">
//       {/* Background Glow */}
//       <div className="absolute left-1/2 top-10 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[140px]" />

//       <div className="mx-auto max-w-7xl px-6">
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="mb-16 text-center"
//         >
//           <span className="mb-4 inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm font-medium text-orange-400">
//             Why Choose Us
//           </span>

//           <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
//             Why Businesses
//             <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
//               {" "}
//               Trust Pie Tech
//             </span>
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
//             We combine innovation, technology, and strategic thinking to help
//             businesses grow faster with reliable digital solutions.
//           </p>
//         </motion.div>

//         <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
//           {points.map((item, i) => (
//             <motion.div
//               key={i}
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               whileHover={{
//                 y: -10,
//                 scale: 1.03,
//               }}
//               transition={{ duration: 0.3 }}
//               className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
//             >
//               {/* Hover Glow */}
//               <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
//                 <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />
//               </div>

//               <div className="relative z-10">
//                 <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 text-black shadow-lg shadow-orange-500/20">
//                   {item.icon}
//                 </div>

//                 <h3 className="mb-4 text-2xl font-semibold text-white transition group-hover:text-orange-400">
//                   {item.title}
//                 </h3>

//                 <p className="leading-7 text-gray-400">
//                   {item.desc}
//                 </p>

//                 <div className="mt-8 flex items-center gap-2 text-orange-400 opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100">
//                   <span className="text-sm font-medium">
//                     Learn More
//                   </span>
//                   →
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// /* ================= CONTACT INFO ================= */

// function ContactInfo() {
//   const info = [
//     {
//       icon: <Mail size={24} />,
//       title: "Email Us",
//       value: "info@pietechsolutions.com",
//       desc: "Send us your project details anytime.",
//       color: "from-orange-500 to-amber-400",
//     },
//     {
//       icon: <Phone size={24} />,
//       title: "Call Us",
//       value: "+91 89100 34602",
//       desc: "We're available Monday to Saturday.",
//       color: "from-cyan-500 to-blue-500",
//     },
//     {
//       icon: <MapPin size={24} />,
//       title: "Visit Our Office",
//       value: "Kolkata, West Bengal, India",
//       desc: "Let's discuss your next big idea in person.",
//       color: "from-purple-500 to-pink-500",
//     },
//   ];

//   return (
//     <div className="space-y-8">
//       {/* Heading */}
//       <motion.div
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400">
//           Get In Touch
//         </span>

//         <h2 className="mt-5 text-4xl font-bold text-white">
//           We'd Love to
//           <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
//             {" "}
//             Hear From You
//           </span>
//         </h2>

//         <p className="mt-4 max-w-md leading-7 text-gray-400">
//           Whether you have a project idea, business inquiry, or simply want to
//           connect, our team is here to help.
//         </p>
//       </motion.div>

//       {/* Contact Cards */}
//       <div className="space-y-6">
//         {info.map((item, i) => (
//           <motion.div
//             key={i}
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             whileHover={{
//               y: -8,
//               scale: 1.02,
//             }}
//             transition={{ duration: 0.3 }}
//             className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
//           >
//             {/* Hover Glow */}
//             <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
//               <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />
//             </div>

//             <div className="relative z-10 flex items-start gap-5">
//               <div
//                 className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-black shadow-lg`}
//               >
//                 {item.icon}
//               </div>

//               <div className="flex-1">
//                 <h4 className="text-xl font-semibold text-white transition group-hover:text-orange-400">
//                   {item.title}
//                 </h4>

//                 <p className="mt-2 text-lg font-medium text-gray-200 break-all">
//                   {item.value}
//                 </p>

//                 <p className="mt-2 text-sm leading-6 text-gray-400">
//                   {item.desc}
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Bottom CTA */}
//       <motion.div
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent p-6"
//       >
//         <h3 className="text-xl font-semibold text-white">
//           Ready to Start Your Project?
//         </h3>

//         <p className="mt-3 text-gray-400">
//           Let's create innovative digital solutions that drive your business
//           forward.
//         </p>

//         <button className="mt-6 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-3 font-semibold text-black transition hover:scale-105">
//           Schedule a Free Consultation
//         </button>
//       </motion.div>
//     </div>
//   );
// }

// /* ================= CONTACT FORM ================= */

// function ContactForm() {
//   return (
//     <motion.form
//       variants={fadeUp}
//       initial="hidden"
//       whileInView="visible"
//       className="space-y-6 rounded-3xl border border-gray-200 bg-white p-10 dark:border-white/10 dark:bg-white/5"
//     >
//       <h3 className="text-2xl font-semibold text-black dark:text-white">Send Us a Message</h3>

//       <input
//         type="text"
//         placeholder="Your Name"
//         className="w-full rounded-xl border border-gray-300 bg-gray-100 p-4 text-black placeholder:text-gray-500 focus:border-orange-500 focus:outline-none dark:border-white/10 dark:bg-black dark:text-white"
//       />

//       <input
//         type="email"
//         placeholder="Your Email"
//         className="w-full rounded-xl border border-gray-300 bg-gray-100 p-4 text-black placeholder:text-gray-500 focus:border-orange-500 focus:outline-none dark:border-white/10 dark:bg-black dark:text-white"
//       />

//       <textarea
//         rows={5}
//         placeholder="Your Message"
//         className="w-full rounded-xl border border-gray-300 bg-gray-100 p-4 text-black placeholder:text-gray-500 focus:border-orange-500 focus:outline-none dark:border-white/10 dark:bg-black dark:text-white"
//       />

//       <button
//         type="submit"
//         className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-10 py-4 font-semibold text-black transition hover:opacity-90"
//       >
//         <Send size={16} /> Send Message
//       </button>
//     </motion.form>
//   );
// }

// /* ================= MAP ================= */

// function MapSection() {
//   return (
//     <section className="mx-auto max-w-[1200px] px-6 pb-28">
//       <h3 className="mb-6 text-3xl font-bold text-black dark:text-white">Find Us in Kolkata</h3>

//       <div className="overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10">
//         <iframe
//           title="Pie Tech Solutions Kolkata"
//           src="https://www.google.com/maps?q=Kolkata,India&output=embed"
//           className="h-[380px] w-full border-0"
//           loading="lazy"
//         />
//       </div>
//     </section>
//   );
// }

// /* ================= PAGE ================= */

// export default function ContactPage() {
//   return (
//     <main className="bg-black text-white">
//       <ContactHero />
//       <WhyContactUs />

//       <section className="mx-auto grid max-w-[1200px] gap-14 px-6 py-24 lg:grid-cols-2">
//         <ContactInfo />
//         <ContactForm />
//       </section>

//       <MapSection />
//     </main>
//   );
// }



