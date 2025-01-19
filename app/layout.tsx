import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Footer from "@/components/Footer";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://zhaohongyu.netlify.app"),
  title: "Zhao Hongyu | Portfolio",
  description: "Zaho Hongyu's portfolio",
  applicationName: "Zhao Hongyu's portfolio",
  authors: [{ name: "Zhao Hongyu", url: "https://zhaohongyu.netlify.app" }],
  generator: "Next.js, React, TailwindCSS",
  keywords: ["Zhao Hongyu", "Portfolio", "React", "Next.js"],
  openGraph: {
    type: "website",
    title: "Zhao Hongyu | Portfolio",
    description: "Zhao Hongyu's portfolio website",
    url: "https://zhaohongyu.netlify.app",
    siteName: "Zhao Hongyu | Portfolio",
    images: [
      {
        url: "https://zhaohongyu.netlify.app/og-image.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "https://zhaohongyu.netlify.app/og-image.jpg",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
  },
  icons: {
    icon: "https://zhaohongyu.netlify.app/favicon.ico",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={navItems} />
          <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
