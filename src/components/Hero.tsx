"use client";

import { motion } from "framer-motion";
import { Mail, FileText, ChevronDown } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import Image from "next/image";

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden bg-slate-900"
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #93c5fd 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Soft glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full text-center">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto mb-8 w-28 h-28 rounded-full border-2 border-blue-400/40 bg-slate-800 flex items-center justify-center overflow-hidden shadow-xl"
        >
          <Image
            src="/photo.png"
            alt="Ilyes Jaouedi"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-blue-400 text-sm font-mono tracking-widest uppercase mb-3">
            PhD Candidate · CentraleSupélec
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-4">
            Ilyes Jaouedi
          </h1>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-5" />
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Researching{" "}
            <span className="text-slate-200">camera-radar fusion</span> via{" "}
            <span className="text-blue-400">optimal transport</span> for ADAS
            at{" "}
            <a
              href="https://l2s.centralesupelec.fr/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors underline decoration-dotted underline-offset-2"
            >
              L2S
            </a>
            {" "}·{" "}
            <a
              href="https://www.forvia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-blue-300 transition-colors underline decoration-dotted underline-offset-2"
            >
              FORVIA
            </a>{" "}
            collaboration
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => scrollTo("#research")}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-full transition-all duration-200 shadow-lg shadow-blue-600/30"
          >
            Read my Research
          </button>
          <button
            onClick={() => scrollTo("#projects")}
            className="px-6 py-2.5 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white text-sm rounded-full transition-all duration-200 hover:bg-white/5"
          >
            Explore Projects
          </button>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 border border-slate-600 hover:border-slate-400 text-slate-400 hover:text-slate-200 text-sm rounded-full transition-all duration-200 flex items-center gap-2 hover:bg-white/5"
          >
            <FileText size={14} />
            CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex items-center justify-center gap-5"
        >
          {[
            { href: "https://github.com/ilyes-jaouedi", icon: <GitHubIcon size={18} />, label: "GitHub" },
            { href: "https://www.linkedin.com/in/ilyes-jaouadi", icon: <LinkedInIcon size={18} />, label: "LinkedIn" },
            { href: "mailto:ilyes.jaouedi@centralesupelec.fr", icon: <Mail size={18} />, label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-slate-500 hover:text-blue-400 transition-colors p-2"
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => scrollTo("#about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600 hover:text-blue-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </motion.button>
    </section>
  );
}
