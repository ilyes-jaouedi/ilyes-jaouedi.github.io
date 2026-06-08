import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { GraduationCap, MapPin, Building2 } from "lucide-react";

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionTitle label="Who I am" title="About Me" />
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            I am a PhD candidate at the{" "}
            <a
              href="https://l2s.centralesupelec.fr/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-800 dark:text-slate-100 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline decoration-dotted underline-offset-2"
            >
              Laboratory of Signals and Systems (L2S)
            </a>
            , CentraleSupélec / CNRS / Université Paris-Saclay. My research sits
            at the intersection of{" "}
            <span className="text-blue-600 dark:text-blue-400 font-medium">computer vision</span>,{" "}
            <span className="text-blue-600 dark:text-blue-400 font-medium">radar signal processing</span>, and{" "}
            <span className="text-blue-600 dark:text-blue-400 font-medium">mathematical optimization</span>.
          </p>
          <p>
            Specifically, I work on fusing{" "}
            <span className="text-slate-800 dark:text-slate-100">camera and radar modalities</span> using{" "}
            <span className="text-slate-800 dark:text-slate-100">optimal transport theory</span> — a
            principled mathematical framework for comparing and aligning probability
            distributions — to build robust, geometry-aware perception systems for{" "}
            <span className="text-slate-800 dark:text-slate-100">Advanced Driver Assistance Systems (ADAS)</span>.
            This PhD is conducted in industrial collaboration with{" "}
            <a
              href="https://www.forvia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-800 dark:text-slate-100 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline decoration-dotted underline-offset-2"
            >
              FORVIA
            </a>
            .
          </p>
          <p>
            I hold an engineering degree from{" "}
            <span className="text-slate-800 dark:text-slate-100">Ecole Polytechnique de Tunisie</span>.
          </p>
        </div>

        <div className="space-y-3">
          {[
            {
              icon: <GraduationCap size={17} className="text-blue-600 dark:text-blue-400" />,
              title: "PhD Candidate",
              sub: "CentraleSupélec — L2S / CNRS / Université Paris-Saclay",
              tag: "2024 – Present",
              link: "https://l2s.centralesupelec.fr/en/",
            },
            {
              icon: <Building2 size={17} className="text-blue-600 dark:text-blue-400" />,
              title: "Industrial Partner",
              sub: "FORVIA — Camera-Radar Fusion for ADAS",
              tag: "PhD Collaboration",
              link: "https://www.forvia.com",
            },
            {
              icon: <GraduationCap size={17} className="text-blue-600 dark:text-blue-400" />,
              title: "Multidisciplinary Engineering Degree",
              sub: "Ecole Polytechnique de Tunisie",
              tag: "2021 – 2024",
            },
            {
              icon: <GraduationCap size={17} className="text-blue-600 dark:text-blue-400" />,
              title: "Preparatory Cycle — Math & Physics",
              sub: "IPEIM Monastir",
              tag: "2019 – 2021",
            },
            {
              icon: <MapPin size={17} className="text-blue-600 dark:text-blue-400" />,
              title: "Based in",
              sub: "Paris, France",
              tag: "",
            },
          ].map((item) => {
            const inner = (
              <>
                <div className="mt-0.5 shrink-0">{item.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{item.title}</p>
                    {item.tag && (
                      <span className="text-xs text-slate-400 dark:text-slate-500 shrink-0">{item.tag}</span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.sub}</p>
                </div>
              </>
            );
            const cls =
              "flex gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-sm transition-all duration-200";
            return "link" in item && item.link ? (
              <a key={item.title} href={item.link} target="_blank" rel="noopener noreferrer" className={cls}>
                {inner}
              </a>
            ) : (
              <div key={item.title} className={cls}>{inner}</div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
