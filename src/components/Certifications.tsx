import { ExternalLink } from "lucide-react";
import Image from "next/image";

const certifications = [
  {
    name: "Professional Machine Learning Engineer",
    issuer: "Google Cloud",
    date: "2025",
    description:
      "Validates the ability to design, build, and productionize ML models to solve business challenges using Google Cloud technologies and established ML practices.",
    badgeImage: "/PMLE.png",
    verifyUrl:
      "https://www.credly.com/badges/55072af5-5964-455b-9310-0a770916e7f5/public_url",
  },
  {
    name: "Generative AI Leader",
    issuer: "Google Cloud",
    date: "2026",
    description:
      "Covers how generative AI can be used in a business, Google Cloud's generative AI products, and how to adopt AI responsibly.",
    badgeImage: "/GAIL.png",
    verifyUrl:
      "https://www.credly.com/badges/27745c52-ea91-48d1-8070-5bc5424ce931/public_url",
  },
  {
    name: "Associate Data Practitioner",
    issuer: "Google Cloud",
    date: "2026",
    description:
      "Covers managing and securing data on Google Cloud: data ingestion, transformation, pipelines, analysis, machine learning and visualization.",
    badgeImage: "/ADP.png",
    verifyUrl:
      "https://www.credly.com/badges/f98a92be-76c2-45b0-b820-17678cf4b580/public_url",
  },
];

export default function Certifications() {
  return (
    <div id="certifications" className="mt-8">
      <p className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">Certifications</p>
      <div className="flex flex-col gap-4">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="flex gap-5 p-5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-yellow-400/60 dark:hover:border-yellow-500/40 hover:shadow-md transition-all duration-200 max-w-2xl"
          >
            <div className="shrink-0 w-16 h-16 relative">
              <Image
                src={cert.badgeImage}
                alt={`${cert.name} badge`}
                fill
                className="object-contain drop-shadow-sm"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mb-1 font-mono uppercase tracking-wider">
                    {cert.issuer}
                  </p>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{cert.name}</h3>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700/50 text-yellow-700 dark:text-yellow-400 shrink-0 font-medium">
                  {cert.date}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                {cert.description}
              </p>
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
              >
                Verify on Credly <ExternalLink size={11} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
