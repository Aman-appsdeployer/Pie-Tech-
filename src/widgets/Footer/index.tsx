'use client';

import { LogoIcon } from "@/icons/ApproachIcons/LogoIcon";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ================= NAV LINKS ================= */
const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Approach", href: "/approach" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-[1200px] px-6 py-14 text-center text-gray-400">

        {/* LOGO */}
        <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <LogoIcon className="h-12 w-12 text-white" />
          <span className="text-lg font-semibold text-white">
            Pie Tech Solutions
          </span>
        </div>

        {/* SOCIAL ICONS */}
        <div className="mb-10 flex justify-center gap-5">
          {[
            {
              Icon: Mail,
              href: "mailto:contact@pietechsolutions.com",
              label: "Email",
            },
            {
              Icon: Instagram,
              href: "https://www.instagram.com/pietechsolutions",
              label: "Instagram",
            },
            {
              Icon: Facebook,
              href: "https://www.facebook.com/pietechsolutions",
              label: "Facebook",
            },
            {
              Icon: Linkedin,
              href: "https://www.linkedin.com/company/pietechsolutions",
              label: "LinkedIn",
            },
          ].map(({ Icon, href, label }, index) => (
            <Link
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full border border-white/10
                text-gray-400 transition-all duration-300
                hover:border-white/30 hover:text-white
              "
            >
              <Icon size={28} />
            </Link>
          ))}
        </div>

        {/* NAV LINKS WITH ACTIVE STATE */}
        <nav
          className="
            mb-10 flex flex-wrap justify-center
            gap-x-10 gap-y-4
            text-xl font-bold tracking-wide
          "
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  relative transition-all duration-300
                  ${
                    isActive
                      ? "text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white"
                      : "text-gray-400 hover:text-gray-300"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* COPYRIGHT */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Pie Tech Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
