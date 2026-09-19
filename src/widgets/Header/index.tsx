'use client';

import { LogoIcon } from '@/icons/ApproachIcons/LogoIcon';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Approach', href: '/approach' },
  { name: 'Contact', href: '/contact' },
];

const isCurrentRoute = (pathname: string, href: string) =>
  href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

function MobileSidebar({ pathname, onClose }: { pathname: string; onClose: () => void }) {
  return (
    <motion.div className="fixed inset-0 z-[9999] md:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <button type="button" aria-label="Close navigation" className="absolute inset-0 h-full w-full cursor-default bg-black/75 backdrop-blur-md" onClick={onClose} />

      <motion.aside
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
        className="absolute right-0 top-0 flex h-full w-[min(86vw,340px)] flex-col border-l border-white/10 bg-[#070808] p-6 shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-orange-400">Navigation</span>
          <button type="button" aria-label="Close menu" onClick={onClose} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-orange-400/50 hover:text-white">
            <X size={18} />
          </button>
        </div>

        <nav className="mt-8 flex flex-col">
          {NAV_LINKS.map((link, index) => {
            const active = isCurrentRoute(pathname, link.href);
            return (
              <a key={link.href} href={link.href} className={`group flex items-center justify-between border-b border-white/[0.07] py-5 text-2xl font-medium tracking-[-0.03em] transition ${active ? 'text-orange-400' : 'text-white/65 hover:text-white'}`}>
                <span><span className="mr-3 text-[10px] text-white/25">0{index + 1}</span>{link.name}</span>
                <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:rotate-45" />
              </a>
            );
          })}
        </nav>

        <p className="mt-auto text-xs leading-5 text-white/30">Designing and engineering adaptive digital experiences.</p>
      </motion.aside>
    </motion.div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? 'hidden' : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[3000] border-b border-white/[0.08] bg-[#030404]/85 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="/" aria-label="Pie Tech Solutions home" className="group flex items-center gap-3">
            <LogoIcon className="h-9 w-9 text-white/75 transition-colors group-hover:text-orange-400" />
            <span className="text-sm font-semibold tracking-[-0.02em] sm:text-base">Pie Tech <span className="text-white/45">Solutions</span></span>
          </a>

          <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => {
              const active = isCurrentRoute(pathname, link.href);
              return (
                <a key={link.href} href={link.href} aria-current={active ? 'page' : undefined} className={`relative py-2 text-[13px] font-medium transition-colors ${active ? 'text-white' : 'text-white/45 hover:text-white'}`}>
                  {link.name}
                  <span className={`absolute inset-x-0 -bottom-[23px] h-px origin-left bg-orange-400 transition-transform duration-300 ${active ? 'scale-x-100' : 'scale-x-0'}`} />
                </a>
              );
            })}
          </nav>

          <button type="button" aria-label="Open navigation menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)} className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.035] md:hidden">
            <span className="h-px w-5 bg-white" />
            <span className="h-px w-3.5 translate-x-[3px] bg-orange-400" />
          </button>
        </div>
      </header>

      <AnimatePresence>{menuOpen && <MobileSidebar pathname={pathname} onClose={() => setMenuOpen(false)} />}</AnimatePresence>
    </>
  );
}
