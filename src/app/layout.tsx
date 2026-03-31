import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ilyes Jaouedi — PhD Candidate",
  description:
    "PhD candidate at L2S, CentraleSupélec. Research at the intersection of computer vision, radar signal processing, and mathematical optimization for ADAS.",
  keywords: [
    "Ilyes Jaouedi",
    "camera radar fusion",
    "optimal transport",
    "ADAS",
    "CentraleSupélec",
    "L2S",
    "machine learning",
    "sensor fusion",
  ],
  authors: [{ name: "Ilyes Jaouedi" }],
  openGraph: {
    title: "Ilyes Jaouedi — PhD Candidate",
    description:
      "Camera-radar fusion for ADAS. PhD at L2S, CentraleSupélec.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f8f9fb] text-slate-700">{children}</body>
    </html>
  );
}
