import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const SITE_URL = "https://ilyes-jaouedi.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ilyes Jaouedi | Machine Learning & Radar Perception Researcher",
  alternates: { canonical: "/" },
  description:
    "PhD candidate at L2S, CentraleSupélec, with FORVIA. Machine learning and signal processing for radar and camera perception: 3D radar imaging, vision foundation models and optimal-transport sensor fusion for ADAS.",
  keywords: [
    "Ilyes Jaouedi",
    "camera radar fusion",
    "optimal transport",
    "ADAS",
    "CentraleSupélec",
    "L2S",
    "machine learning",
    "sensor fusion",
    "radar machine learning",
    "vision foundation models",
  ],
  authors: [{ name: "Ilyes Jaouedi" }],
  openGraph: {
    title: "Ilyes Jaouedi | Machine Learning & Radar Perception Researcher",
    description:
      "PhD candidate at L2S, CentraleSupélec, with FORVIA: machine learning and signal processing for radar and camera perception.",
    url: SITE_URL,
    siteName: "Ilyes Jaouedi",
    images: ["/photo.png"],
    type: "profile",
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
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#f8f9fb] dark:bg-slate-900 text-slate-700 dark:text-slate-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
