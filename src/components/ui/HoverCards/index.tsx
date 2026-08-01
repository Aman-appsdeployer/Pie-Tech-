'use client';

import type { FC, SVGProps } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import { cn } from '@/shared/utils';

interface Props {
  cards: { title: string; icon: FC<SVGProps<SVGSVGElement>>; description: string }[];
  wrapperClasses?: string;
  itemClasses?: string;
}

const HoverCards: FC<Props> = ({ cards, itemClasses, wrapperClasses }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.13 } } }}
      className={cn('relative mx-auto max-w-6xl', wrapperClasses)}
    >
      <div className="absolute bottom-10 left-6 top-10 hidden w-px bg-gradient-to-b from-orange-400/70 via-orange-400/25 to-transparent md:block" />

      {cards.map((card, idx) => {
        const Icon = card.icon;

        return (
          <motion.article
            key={card.title}
            variants={{
              hidden: { opacity: 0, x: reduceMotion ? 0 : idx % 2 === 0 ? -42 : 42, y: reduceMotion ? 18 : 0 },
              visible: { opacity: 1, x: 0, y: 0 },
            }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            whileHover={reduceMotion ? undefined : { y: -7, scale: 1.012 }}
            className={cn('group relative mb-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-[0_18px_50px_rgba(0,0,0,.18)] transition-colors duration-500 hover:border-orange-400/40 hover:bg-white/[0.055] md:ml-16 md:rounded-3xl md:p-8', itemClasses)}
          >
            <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-orange-500/0 blur-3xl transition-colors duration-500 group-hover:bg-orange-500/15" />
            <div className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[550%]" />
            <span className="pointer-events-none absolute -bottom-6 right-4 select-none text-8xl font-black leading-none tracking-[-0.08em] text-white/[0.025] transition-colors duration-500 group-hover:text-orange-400/[0.07] md:text-9xl">
              {String(idx + 1).padStart(2, '0')}
            </span>

            <div className="relative z-10 grid gap-5 md:grid-cols-[auto_1fr] md:items-start md:gap-7">
              <motion.div
                whileHover={reduceMotion ? undefined : { rotate: 10, scale: 1.12 }}
                transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-400/25 bg-orange-400/10 shadow-[0_0_30px_rgba(251,146,60,.08)]"
              >
                <Icon className="!h-6 !w-6" />
              </motion.div>

              <div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-orange-400">Step {String(idx + 1).padStart(2, '0')}</span>
                  <span className="h-px w-8 origin-left bg-orange-400/60 transition-transform duration-500 group-hover:scale-x-150" />
                </div>
                <h3 className="mt-2 text-xl font-medium tracking-[-0.03em] text-white md:text-2xl">{card.title}</h3>
                <p className="mt-3 max-w-4xl text-sm leading-6 text-white/50 transition-colors duration-300 group-hover:text-white/70 md:text-[15px] md:leading-7">
                  {card.description}
                </p>
              </div>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: reduceMotion ? 0 : idx * 0.1 + 0.25 }}
              className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-orange-400/70 via-orange-400/20 to-transparent"
            />
          </motion.article>
        );
      })}
    </motion.div>
  );
};

export default HoverCards;
