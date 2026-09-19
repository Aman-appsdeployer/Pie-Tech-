
// "use client";

// import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   Mail,
// } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// /* =========================================================
//    NAV LINKS
// ========================================================= */

// const NAV_LINKS = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Services", href: "/services" },
//   { name: "Approach", href: "/approach" },
//   { name: "Contact", href: "/contact" },
// ];

// /* =========================================================
//    FOOTER
// ========================================================= */

// export default function Footer() {
//   const pathname = usePathname();

//   return (
//     <footer
//       className="
//         border-t
//         border-white/10
//         bg-gradient-to-br
//         from-black
//         via-[#050606]
//         to-[#0a0a0a]
//         text-white
//       "
//     >
//       <div
//         className="
//           mx-auto
//           max-w-[1200px]
//           px-6
//           py-14
//           text-center
//         "
//       >
//         {/* =================================================
//             LOGO
//         ================================================= */}

//         <div
//           className="
//             mb-8
//             flex
//             flex-col
//             items-center
//             justify-center
//             gap-3
//             sm:flex-row
//           "
//         >
//           <Link
//             href="/"
//             aria-label="Pie Tech Solutions home"
//             className="
//               group
//               flex
//               items-center
//               justify-center
//             "
//           >
//             <Image
//               src="/images/logo.png"
//               alt="Pie Tech Solutions"
//               width={56}
//               height={56}
//               className="
//                 h-14
//                 w-14
//                 object-contain
//                 transition-transform
//                 duration-300
//                 group-hover:scale-105
//               "
//             />
//           </Link>

//           <span
//             className="
//               text-lg
//               font-semibold
//               tracking-[-0.02em]
//               text-white
//             "
//           >
//             Pie Tech Solutions
//           </span>
//         </div>

//         {/* =================================================
//             SOCIAL ICONS
//         ================================================= */}

//         <div className="mb-10 flex justify-center gap-5">
//           {[
//             {
//               Icon: Mail,
//               href: "mailto:contact@pietechsolutions.com",
//               label: "Email",
//             },
//             {
//               Icon: Instagram,
//               href: "https://www.instagram.com/pietechsolutions",
//               label: "Instagram",
//             },
//             {
//               Icon: Facebook,
//               href: "https://www.facebook.com/pietechsolutions",
//               label: "Facebook",
//             },
//             {
//               Icon: Linkedin,
//               href: "https://www.linkedin.com/company/pietechsolutions",
//               label: "LinkedIn",
//             },
//           ].map(({ Icon, href, label }) => (
//             <Link
//               key={label}
//               href={href}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label={label}
//               className="
//                 flex
//                 h-10
//                 w-10
//                 items-center
//                 justify-center
//                 rounded-full
//                 border
//                 border-white/10
//                 bg-white/[0.03]
//                 text-white/50
//                 transition-all
//                 duration-300
//                 hover:-translate-y-1
//                 hover:border-orange-400/50
//                 hover:bg-orange-400/10
//                 hover:text-orange-400
//               "
//             >
//               <Icon size={20} />
//             </Link>
//           ))}
//         </div>

//         {/* =================================================
//             NAV LINKS
//         ================================================= */}

//         <nav
//           aria-label="Footer navigation"
//           className="
//             mb-10
//             flex
//             flex-wrap
//             justify-center
//             gap-x-10
//             gap-y-4
//             text-lg
//             font-semibold
//             tracking-wide
//           "
//         >
//           {NAV_LINKS.map((link) => {
//             const isActive =
//               link.href === "/"
//                 ? pathname === "/"
//                 : pathname === link.href ||
//                   pathname.startsWith(`${link.href}/`);

//             return (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 aria-current={
//                   isActive ? "page" : undefined
//                 }
//                 className={`
//                   relative
//                   transition-all
//                   duration-300
//                   ${
//                     isActive
//                       ? "text-white"
//                       : "text-white/40 hover:text-white"
//                   }
//                 `}
//               >
//                 {link.name}

//                 {/* Active underline */}

//                 <span
//                   className={`
//                     absolute
//                     -bottom-2
//                     left-0
//                     h-[2px]
//                     w-full
//                     origin-left
//                     bg-orange-400
//                     transition-transform
//                     duration-300
//                     ${
//                       isActive
//                         ? "scale-x-100"
//                         : "scale-x-0"
//                     }
//                   `}
//                 />
//               </Link>
//             );
//           })}
//         </nav>

//         {/* =================================================
//             DIVIDER
//         ================================================= */}

//         <div className="mx-auto mb-6 h-px max-w-3xl bg-white/[0.07]" />

//         {/* =================================================
//             COPYRIGHT
//         ================================================= */}

//         <p className="text-sm text-white/30">
//           © {new Date().getFullYear()} Pie Tech Solutions.
//           All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }







'use client';

import { LogoIcon } from '@/icons/ApproachIcons/LogoIcon';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/* ================= NAV LINKS ================= */

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Approach', href: '/approach' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer
      className="
      border-t
      border-white/10 text-white
      bg-gradient-to-br from-black marker:selection:bg-slate-50
      "
    >
      <div
        className="
        mx-auto max-w-[1200px]
        px-6 py-14
        text-center
        text-gray-400
        "
      >
        {/* ================= LOGO ================= */}

        <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <LogoIcon className="h-12 w-12 text-white" />

          <span
            className="
            text-lg font-semibold
            text-white
            "
          >
            Pie Tech Solutions
          </span>
        </div>

        {/* ================= SOCIAL ICONS ================= */}

        <div className="mb-10 flex justify-center gap-5">
          {[
            {
              Icon: Mail,
              href: 'mailto:contact@pietechsolutions.com',
              label: 'Email',
            },
            {
              Icon: Instagram,
              href: 'https://www.instagram.com/pietechsolutions',
              label: 'Instagram',
            },
            {
              Icon: Facebook,
              href: 'https://www.facebook.com/pietechsolutions',
              label: 'Facebook',
            },
            {
              Icon: Linkedin,
              href: 'https://www.linkedin.com/company/pietechsolutions',
              label: 'LinkedIn',
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
              rounded-full
              border border-gray-200 text-gray-600
              transition-all duration-300
              hover:border-gray-400 hover:text-black
              dark:border-white/10 dark:text-gray-400
              dark:hover:border-white/30 dark:hover:text-white
              "
            >
              <Icon size={20} />
            </Link>
          ))}
        </div>

        {/* ================= NAV LINKS ================= */}

        <nav
          className="
          mb-10
          flex flex-wrap justify-center
          gap-x-10 gap-y-4
          text-lg font-semibold
          tracking-wide
          "
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                relative transition-all duration-300
                ${
                  isActive
                    ? 'text-black after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-black dark:text-white dark:after:bg-white'
                    : 'text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white'
                }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* ================= COPYRIGHT ================= */}

        <p className="text-sm text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} Pie Tech Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
