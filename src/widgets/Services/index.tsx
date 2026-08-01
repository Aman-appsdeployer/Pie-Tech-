'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Megaphone, PenTool } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const serviceCards: {
  title: string;
  eyebrow: string;
  description: string;
  services: string[];
  number: string;
  icon: LucideIcon;
  className: string;
}[] = [
  {
    title: 'Design',
    eyebrow: 'Ideas into identity',
    description:
      'Distinctive digital experiences that make your brand feel clear, credible, and impossible to overlook.',
    services: ['Web Design', 'Mobile UI/UX', 'Branding', 'Logo Design'],
    number: '01',
    icon: PenTool,
    className: 'lg:col-span-5',
  },
  {
    title: 'Fullstack Development',
    eyebrow: 'Built for tomorrow',
    description:
      'Fast, scalable products with thoughtful interfaces and robust engineering working seamlessly together.',
    services: ['Online Stores', 'Web Apps', 'CMS', 'API Development'],
    number: '02',
    icon: Code2,
    className: 'lg:col-span-7',
  },
  {
    title: 'Digital Marketing',
    eyebrow: 'Attention into growth',
    description:
      'Sharp, data-led campaigns that reach the right people, turn interest into action, and compound over time.',
    services: ['SEO', 'Meta Ads', 'Google Ads', 'Lead Generation'],
    number: '03',
    icon: Megaphone,
    className: 'lg:col-span-12',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative isolate overflow-hidden border-t border-white/10 bg-[#050505] px-5 py-24 text-white md:px-12 md:py-32 lg:px-20">
      <div className="pointer-events-none absolute left-[-12rem] top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-orange-500/[0.08] blur-[110px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.65 }}
          className="mb-14 grid items-end gap-8 md:mb-20 md:grid-cols-[1.4fr_1fr]"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-orange-400" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-orange-400">What we do best</p>
            </div>
            <h2 className="max-w-4xl text-[clamp(3.35rem,8vw,7.75rem)] font-semibold leading-[0.82] tracking-[-0.065em]">
              SERVICES<span className="text-orange-500">.</span>
            </h2>
          </div>

          <p className="max-w-xl border-l border-white/15 pl-5 text-sm leading-7 text-white/55 md:justify-self-end md:text-base">
            Strategy, design, and technology—brought together to build digital products people remember and businesses rely on.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid gap-4 lg:grid-cols-12"
        >
          {serviceCards.map((card) => (
            <ServiceCard key={card.title} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  card: (typeof serviceCards)[number];
}

const ServiceCard = ({ card }: ServiceCardProps) => {
  const Icon = card.icon;

  return (
    <motion.article
      variants={fadeUp}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative min-h-[25rem] overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-white/[0.035] p-6 transition-colors duration-500 hover:border-orange-400/35 hover:bg-white/[0.055] md:p-9 ${card.className}`}
    >
      <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-orange-500/0 blur-3xl transition-colors duration-500 group-hover:bg-orange-500/10" />
      <span className="absolute -bottom-8 right-3 select-none text-[9rem] font-black leading-none tracking-[-0.08em] text-white/[0.025] transition-colors duration-500 group-hover:text-orange-400/[0.055] md:text-[12rem]">
        {card.number}
      </span>

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-orange-400 shadow-[inset_0_1px_0_rgba(255,255,255,.08)]">
            <Icon size={21} strokeWidth={1.7} />
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/45 transition-all duration-300 group-hover:rotate-45 group-hover:border-orange-400 group-hover:bg-orange-400 group-hover:text-black">
            <ArrowUpRight size={19} />
          </div>
        </div>

        <div className="mt-14">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-orange-400/85">{card.eyebrow}</p>
          <h3 className="max-w-2xl text-3xl font-medium leading-[1.05] tracking-[-0.04em] md:text-4xl">{card.title}</h3>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-white/50 md:text-[15px]">{card.description}</p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-9">
          {card.services.map((service) => (
            <span key={service} className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-[11px] font-medium text-white/65 transition-colors group-hover:border-white/15 group-hover:text-white/85 md:text-xs">
              {service}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default ServicesSection;
