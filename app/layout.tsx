import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Footer from "@/components/Footer";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import type { Metadata } from "next";
import { getMetadata } from "@/lib/getMetadata";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  return await getMetadata();
}

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
