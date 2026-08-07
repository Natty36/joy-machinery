import type { Metadata } from "next";
import { Archivo_Black, DM_Sans, Geist } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../../components/SmoothScroll";
import Navbar from "../../components/Navbar";
import { cn } from "../../lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-headline",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: "variable",
});

export const metadata: Metadata = {
  title: "Joy Machinery Solutions",
  description: "Gold Mining Equipment & Geological Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(archivoBlack.variable, dmSans.variable, "font-sans", geist.variable)}>
      <body>
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}