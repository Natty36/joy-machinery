import type { Metadata } from "next";
import { Inter, Menbere } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../../components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const menbere = Menbere({
  subsets: ["latin"],
  variable: "--font-menbere",
  display: "swap",
  weight: "variable",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Your Site",
  description: "Description here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${menbere.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
