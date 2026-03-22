import { Fraunces, IBM_Plex_Mono, Sora } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { createMetadata } from "@/lib/seo";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "optional",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  preload: false,
  display: "optional",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  preload: false,
  display: "optional",
});

export const metadata = createMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${sora.variable} ${fraunces.variable} ${ibmPlexMono.variable}`}
      >
        <div className="min-h-screen bg-bg-primary text-text-primary">
          <SiteHeader />
          <main className="relative overflow-hidden">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
