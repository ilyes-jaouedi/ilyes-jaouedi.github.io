"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "./Icons";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

type Category = "All" | "AI Agents" | "ML / Vision";

const projects = [
  {
    title: "Gemini Voice Orchestrator",
    description:
      "Production-grade real-time voice agent built on Gemini 2.0 Flash Live API. Features bidirectional audio, multi-system tool orchestration (CRM, inventory, logistics), real-time UI synchronization via WebSockets, and parallel tool routing with asynchronous task queuing.",
    tags: ["Gemini Live API", "FastAPI", "WebSockets", "Next.js", "Python"],
    category: "AI Agents" as Category,
    github: "https://github.com/ilyes-jaouedi",
    featured: true,
  },
  {
    title: "AI Presentation Agent",
    description:
      "Autonomous agent that generates polished PowerPoint presentations by merging brand templates with content files. Uses Google ADK and Claude to write Python code, inspect slides visually, and iterate until output is correct — including animated GIF preservation and cross-file shape transplanting.",
    tags: ["Google ADK", "Claude API", "python-pptx", "Vision", "Python"],
    category: "AI Agents" as Category,
    github: "https://github.com/ilyes-jaouedi",
    featured: true,
  },
  {
    title: "Financial Intelligence Copilot",
    description:
      "Tool-augmented LLM agent for financial fraud investigation. Understands analyst requests, executes complex BigQuery queries, detects layering patterns and round-trip transactions, and produces structured investigative reports with temporal fund-flow analysis.",
    tags: ["Google ADK", "BigQuery", "FastAPI", "LLM Agents", "Python"],
    category: "AI Agents" as Category,
    github: "https://github.com/ilyes-jaouedi",
    featured: false,
  },
  {
    title: "Batbot — Personal AI Assistant",
    description:
      "Privacy-first AI assistant accessible via Telegram. Integrates local Whisper speech recognition, ChromaDB RAG for personal documents, email management (Gmail), academic paper search (arXiv, IEEE Xplore), NotebookLM automation, and safe terminal execution.",
    tags: ["Google ADK", "Whisper", "ChromaDB", "Telegram", "Python"],
    category: "AI Agents" as Category,
    github: "https://github.com/ilyes-jaouedi",
    featured: false,
  },
  {
    title: "Image Captioning — ViT + GPT-2",
    description:
      "End-to-end image captioning model combining Vision Transformer (ViT) for visual feature extraction with GPT-2 for autoregressive text generation. Trained on COCO captions with cross-attention bridging between the two modalities.",
    tags: ["ViT", "GPT-2", "PyTorch", "COCO", "Transformers"],
    category: "ML / Vision" as Category,
    github: "https://github.com/ilyes-jaouedi",
    featured: false,
  },
  {
    title: "Real-time Object Detection — YOLOv8",
    description:
      "Custom YOLOv8 fine-tuning pipeline for domain-specific object detection. Includes data augmentation, custom anchor optimization, TensorRT export for inference optimization, and a real-time video inference demo.",
    tags: ["YOLOv8", "PyTorch", "TensorRT", "OpenCV", "Python"],
    category: "ML / Vision" as Category,
    github: "https://github.com/ilyes-jaouedi",
    featured: false,
  },
];

const categories: Category[] = ["All", "AI Agents", "ML / Vision"];

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
            className={`px-4 py-1.5 rounded-full text-sm transition-all duration-200 border ${
              active === c
                ? "bg-blue-600 border-blue-600 text-white shadow-sm"
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
              className="flex flex-col p-5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 group"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  {p.featured && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600">
                      Featured
                    </span>
                  )}
                  <span className="text-xs text-slate-400">{p.category}</span>
                </div>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-blue-600 transition-colors"
                    aria-label="GitHub"
                  >
                    <GitHubIcon size={15} />
                  </a>
                )}
              </div>

              <h3 className="text-sm font-semibold text-slate-800 group-hover:text-slate-900 transition-colors mb-2 leading-snug">
                {p.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed flex-1">{p.description}</p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600"
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
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors"
        >
          More on GitHub <ExternalLink size={13} />
        </a>
      </div>
    </SectionWrapper>
  );
}
