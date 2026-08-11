import type { Metadata } from "next";

import ThemeProvider from "@/components/ThemeProvider";
import ShadowCursor from "@/components/ui/ShadowCursor";

import Footer from "@/widgets/Footer";
import Header from "@/widgets/Header";

import "@/shared/styles/globals.scss";

export const metadata: Metadata = {
  title: "Pie Tech Solutions",
  description: "Marketing and technology solutions for modern brands.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen overflow-x-hidden bg-black text-white">
        <ThemeProvider>
          {/* Global Shadow Cursor */}
          <ShadowCursor />

          {/* Website */}
          <div className="relative z-10 min-h-screen">
            <Header />

            <main className="min-h-screen pt-[80px]">
              {children}
            </main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}