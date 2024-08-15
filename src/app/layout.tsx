// d:/Projects/code/novels-syiemlieh/src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Novels Syiemlieh",
  description: "Developed by Bimon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#F1EBE4]">
      <body className={`${inter.className} min-h-screen min-w-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
