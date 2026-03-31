import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const certifications = [
  {
    name: "Professional Machine Learning Engineer",
    issuer: "Google Cloud",
    date: "2024",
    description:
      "Validates the ability to design, build, and productionize ML models to solve business challenges using Google Cloud technologies and established ML practices.",
    badgeImage: "/PMLE.png",
    verifyUrl:
      "https://www.credly.com/badges/55072af5-5964-455b-9310-0a770916e7f5/public_url",
  },
];

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <SectionTitle label="Credentials" title="Certifications" />
      <div className="flex flex-col gap-4">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="flex gap-6 p-6 rounded-xl bg-white border border-slate-200 hover:border-yellow-400/60 hover:shadow-md transition-all duration-200 max-w-2xl"
          >
            {/* Badge */}
            <div className="shrink-0 w-24 h-24 relative">
              <Image
                src={cert.badgeImage}
                alt={`${cert.name} badge`}
                fill
                className="object-contain drop-shadow-sm"
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-slate-400 mb-1 font-mono uppercase tracking-wider">
                    {cert.issuer}
                  </p>
                  <h3 className="text-sm font-semibold text-slate-900">{cert.name}</h3>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-yellow-50 border border-yellow-300 text-yellow-700 shrink-0 font-medium">
                  {cert.date}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                {cert.description}
              </p>
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-xs text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Verify on Credly <ExternalLink size={11} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
