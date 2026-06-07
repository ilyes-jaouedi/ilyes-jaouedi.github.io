import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f8f9fb] text-slate-700">{children}</body>
    </html>
  );
}
