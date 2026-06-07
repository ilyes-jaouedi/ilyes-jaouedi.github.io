"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "./Icons";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

type Category = "All" | "Sensor Fusion" | "Perception & ML" | "AI Agents";

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
    title: "Acoustics-Camera Fusion for 3D Source Localization",
    description:
      "Sensor array and camera fusion for 3D acoustic source localization in real-world environments. Published at IEEE ICASSP 2026 in collaboration with L2S, CentraleSupélec.",
    tags: ["Sensor Fusion", "Source Localization", "Optimal Transport", "PyTorch"],
    category: "Sensor Fusion",
    link: "https://hal.science/hal-05572212v1",
    featured: true,
    ongoing: false,
  },
  {
    title: "High-Resolution Radar Imaging",
    description:
      "High-resolution radar point cloud generation from raw automotive radar ADC data. Evaluated on the RADIal real-world driving dataset.",
    tags: ["4D Radar", "Point Cloud", "ADAS", "RADIal"],
    category: "Sensor Fusion",
    featured: true,
  },
  {
    title: "Radar-Camera Fusion for Autonomous Driving",
    description:
      "Fusion of high-resolution radar imaging with camera-derived visual priors for robust 3D perception in autonomous driving scenarios.",
    tags: ["Radar-Camera Fusion", "Optimal Transport", "ADAS", "Autonomous Driving"],
    category: "Sensor Fusion",
    featured: true,
  },
  {
    title: "RadarFlows — Synthetic Radar Generation",
    description:
      "Generative model for realistic synthetic radar map synthesis conditioned on camera observations and 3D scene detections. Designed as a data augmentation pipeline for automotive radar perception.",
    tags: ["Generative Models", "Radar", "Data Augmentation", "Autonomous Driving"],
    category: "Sensor Fusion",
    featured: false,
  },
  {
    title: "PowerAnything — Visual Radar Power Prediction",
    description:
      "Predicts dense radar received-power maps from RGB camera frames, providing a learned visual prior for cross-modal radar-camera fusion pipelines.",
    tags: ["Camera-Radar", "Vision Foundation Models", "Deep Learning", "RADIal"],
    category: "Sensor Fusion",
    featured: false,
  },
  {
    title: "See Further Than CFAR",
    description:
      "Data-driven radar target detection for automotive ADAS, going beyond classical signal processing baselines. Includes a vision-enhanced extension leveraging camera priors.",
    tags: ["Radar Detection", "ADAS", "Deep Learning", "RADIal"],
    category: "Sensor Fusion",
    featured: false,
  },
  {
    title: "Image Captioning — ViT + GPT-2",
    description:
      "End-to-end image captioning model combining Vision Transformer (ViT) for visual feature extraction with GPT-2 for autoregressive text generation. Trained on COCO captions with cross-attention bridging between the two modalities.",
    tags: ["ViT", "GPT-2", "PyTorch", "COCO", "Transformers"],
    category: "Perception & ML",
    github: "https://github.com/ilyes-jaouedi",
    featured: true,
  },
  {
    title: "Real-time Object Detection — YOLOv8",
    description:
      "Custom YOLOv8 fine-tuning pipeline for domain-specific object detection. Includes data augmentation, custom anchor optimization, TensorRT export for inference optimization, and a real-time video inference demo.",
    tags: ["YOLOv8", "PyTorch", "TensorRT", "OpenCV", "Python"],
    category: "Perception & ML",
    github: "https://github.com/ilyes-jaouedi",
    featured: true,
  },
  {
    title: "Gemini Voice Orchestrator",
    description:
      "Production-grade real-time voice agent built on Gemini 2.0 Flash Live API. Features bidirectional audio, multi-system tool orchestration (CRM, inventory, logistics), real-time UI synchronization via WebSockets, and parallel tool routing with asynchronous task queuing.",
    tags: ["Gemini Live API", "FastAPI", "WebSockets", "Next.js", "Python"],
    category: "AI Agents",
    github: "https://github.com/ilyes-jaouedi",
    featured: false,
  },
  {
    title: "AI Presentation Agent",
    description:
      "Autonomous agent that generates polished PowerPoint presentations by merging brand templates with content files. Uses Google ADK and Claude to write Python code, inspect slides visually, and iterate until output is correct — including animated GIF preservation and cross-file shape transplanting.",
    tags: ["Google ADK", "Claude API", "python-pptx", "Vision", "Python"],
    category: "AI Agents",
    github: "https://github.com/ilyes-jaouedi",
    featured: false,
  },
  {
    title: "Financial Intelligence Copilot",
    description:
      "Tool-augmented LLM agent for financial fraud investigation. Understands analyst requests, executes complex BigQuery queries, detects layering patterns and round-trip transactions, and produces structured investigative reports with temporal fund-flow analysis.",
    tags: ["Google ADK", "BigQuery", "FastAPI", "LLM Agents", "Python"],
    category: "AI Agents",
    github: "https://github.com/ilyes-jaouedi",
    featured: false,
  },
  {
    title: "Batbot — Personal AI Assistant",
    description:
      "Privacy-first AI assistant accessible via Telegram. Integrates local Whisper speech recognition, ChromaDB RAG for personal documents, email management (Gmail), academic paper search (arXiv, IEEE Xplore), NotebookLM automation, and safe terminal execution.",
    tags: ["Google ADK", "Whisper", "ChromaDB", "Telegram", "Python"],
    category: "AI Agents",
    github: "https://github.com/ilyes-jaouedi",
    featured: false,
  },
];

const categories: Category[] = ["All", "Sensor Fusion", "Perception & ML", "AI Agents"];

export default function Projects() {
  const [active, setActive] = useState<Category>("Sensor Fusion");
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
                ? "bg-slate-900 border-slate-900 text-white shadow-sm"
                : "border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-300 bg-white"
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
              className="flex flex-col p-5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 flex-wrap">
                  {p.ongoing && (
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-700">
                      Ongoing
                    </span>
                  )}
                  {p.featured && !p.ongoing && (
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600">
                      Featured
                    </span>
                  )}
                  <span className="text-xs text-slate-400">{p.category}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-slate-700 transition-colors"
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
                      className="text-slate-400 hover:text-blue-600 transition-colors"
                      aria-label="View project"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-sm font-semibold text-slate-800 group-hover:text-slate-900 transition-colors mb-2 leading-snug">
                {p.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed flex-1">{p.description}</p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600"
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
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors"
        >
          More on GitHub <ExternalLink size={13} />
        </a>
      </div>
    </SectionWrapper>
  );
}
