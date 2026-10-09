"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "./Icons";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

type Category = "All" | "Radar & ML" | "Computer Vision" | "AI Agents";

interface Project {
  title: string;
  description: string;
  tags: string[];
  category: Category;
  github?: string;
  link?: string;
  featured: boolean;
  ongoing?: boolean;
}

const projects: Project[] = [
  {
    title: "RadarFlows — Synthetic Radar Generation",
    description:
      "Generative model for realistic synthetic radar map synthesis conditioned on camera observations and 3D scene detections. Designed as a data augmentation pipeline for automotive radar perception.",
    tags: ["Generative Models", "Radar", "Data Augmentation", "Autonomous Driving"],
    category: "Radar & ML",
    featured: false,
  },
  {
    title: "Radar Foundation Model",
    description:
      "Self-supervised pretraining of a transformer encoder directly on raw 4D radar cubes (range, Doppler, azimuth, elevation), with no lidar, camera or labels, then fine-tuned for occupancy, segmentation and ego-motion.",
    tags: ["Self-Supervised Learning", "Masked Autoencoders", "Radar", "PyTorch"],
    category: "Radar & ML",
    featured: true,
    ongoing: true,
  },
  {
    title: "Image Captioning — ViT + GPT-2",
    description:
      "End-to-end image captioning model combining Vision Transformer (ViT) for visual feature extraction with GPT-2 for autoregressive text generation. Trained on COCO captions with cross-attention bridging between the two modalities.",
    tags: ["ViT", "GPT-2", "PyTorch", "COCO", "Transformers"],
    category: "Computer Vision",
    featured: true,
  },
  {
    title: "Real-time Object Detection — YOLOv8",
    description:
      "Custom YOLOv8 fine-tuning pipeline for domain-specific object detection. Includes data augmentation, custom anchor optimization, TensorRT export for inference optimization, and a real-time video inference demo.",
    tags: ["YOLOv8", "PyTorch", "TensorRT", "OpenCV", "Python"],
    category: "Computer Vision",
    featured: true,
  },
  {
    title: "Batbot — Personal AI Assistant",
    description:
      "Privacy-first AI assistant accessible via Telegram. Integrates local Whisper speech recognition, ChromaDB RAG for personal documents, email management (Gmail), academic paper search (arXiv, IEEE Xplore), NotebookLM automation, and safe terminal execution.",
    tags: ["Google ADK", "Whisper", "ChromaDB", "Telegram", "Python"],
    category: "AI Agents",
    github: "https://github.com/ilyes-jaouedi/batbot",
    featured: false,
  },
  {
    title: "FPL AI Assistant",
    description:
      "Fantasy Premier League agent combining XGBoost expected-points predictions, linear-programming squad optimisation and Gemini reasoning.",
    tags: ["Google ADK", "XGBoost", "Linear Programming", "Gemini", "Python"],
    category: "AI Agents",
    github: "https://github.com/ilyes-jaouedi/fpl-ai-assistant",
    featured: false,
  },
];

const categories: Category[] = ["All", "Radar & ML", "Computer Vision", "AI Agents"];

export default function Projects() {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <SectionWrapper id="projects">
      <SectionTitle label="Portfolio" title="Projects" />

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-4 py-1.5 rounded-lg text-sm transition-all duration-200 border ${
              active === c
                ? "bg-slate-900 dark:bg-white border-slate-900 dark:border-white text-white dark:text-slate-900 shadow-sm"
                : "border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-500 bg-white dark:bg-slate-800"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filtered.map((p) => (
            <div
              key={p.title}
              className="flex flex-col p-5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 flex-wrap">
                  {p.ongoing && (
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 text-blue-700 dark:text-blue-300">
                      Ongoing
                    </span>
                  )}
                  {p.featured && !p.ongoing && (
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300">
                      Featured
                    </span>
                  )}
                  <span className="text-xs text-slate-400 dark:text-slate-500">{p.category}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                      aria-label="GitHub"
                    >
                      <GitHubIcon size={15} />
                    </a>
                  )}
                  {p.link && !p.github && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label="View project"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-slate-900 dark:group-hover:text-white transition-colors mb-2 leading-snug">
                {p.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed flex-1">{p.description}</p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 text-center">
        <a
          href="https://github.com/ilyes-jaouedi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
        >
          More on GitHub <ExternalLink size={13} />
        </a>
      </div>
    </SectionWrapper>
  );
}
