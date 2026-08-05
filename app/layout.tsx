import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aurora | Modern Jewelry E-commerce",
  description:
    "A fictional jewelry e-commerce built with Next.js 16, React 19, TypeScript, Tailwind CSS, Motion, OGL, and Zustand. Designed to showcase immersive UI, WebGL animations, and modern frontend architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
