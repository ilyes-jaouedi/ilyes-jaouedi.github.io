"use client";

import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import Image from "next/image";

const techTags = [
  "Optimal Transport",
  "Camera-Radar Fusion",
  "4D Radar",
  "Signal Processing",
  "PyTorch",
  "ADAS",
];

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-5xl mx-auto w-full py-32">
        <div className="grid md:grid-cols-[1fr_200px] gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-mono text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-5">
              PhD Researcher · L2S CentraleSupélec / CNRS / Université Paris-Saclay
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.05] mb-5">
              Ilyes<br />Jaouedi
            </h1>
            <p className="text-slate-500 dark:text-slate-300 text-lg leading-relaxed max-w-xl mb-7">
              Camera-radar fusion via{" "}
              <span className="text-slate-800 dark:text-slate-100 font-medium">optimal transport</span>
              {" "}— developing geometry-aware sensor fusion architectures for ADAS, at{" "}
              <a
                href="https://l2s.centralesupelec.fr/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                L2S
              </a>
              {" "}in collaboration with{" "}
              <a
                href="https://www.forvia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                FORVIA
              </a>
              .
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {techTags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <button
                onClick={() => scrollTo("#research")}
                className="px-5 py-2.5 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 text-sm font-medium rounded-lg transition-colors"
              >
                Research
              </button>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-slate-300 dark:border-slate-600 hover:border-slate-500 dark:hover:border-slate-400 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-sm font-medium rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <FileText size={14} />
                Curriculum Vitae
              </a>
              <button
                onClick={() => scrollTo("#contact")}
                className="px-5 py-2.5 border border-slate-300 dark:border-slate-600 hover:border-slate-500 dark:hover:border-slate-400 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-sm font-medium rounded-lg transition-colors"
              >
                Contact
              </button>
            </div>

            <div className="flex items-center gap-4">
              {[
                {
                  href: "https://github.com/ilyes-jaouedi",
                  icon: <GitHubIcon size={18} />,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/ilyes-jaouedi",
                  icon: <LinkedInIcon size={18} />,
                  label: "LinkedIn",
                },
                {
                  href: "mailto:ilyes.jaouedi@centralesupelec.fr",
                  icon: <Mail size={18} />,
                  label: "Email",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hidden md:flex flex-col items-center gap-3 pt-10"
          >
            <div className="w-44 h-44 relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 shadow-sm">
              <Image
                src="/photo.png"
                alt="Ilyes Jaouedi"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium text-center">Paris, France</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
