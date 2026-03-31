import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const experiences = [
  {
    role: "PhD Candidate — Sensor Fusion for ADAS",
    org: "L2S, CentraleSupélec / CNRS / Université Paris-Saclay",
    orgUrl: "https://l2s.centralesupelec.fr/en/",
    period: "Oct 2024 – Present",
    location: "Gif-sur-Yvette, France",
    description:
      "Researching camera-radar fusion via optimal transport theory for Advanced Driver Assistance Systems. Developing OT-based cross-modal alignment methods for 4D radar and camera data. Industrial collaboration with FORVIA.",
    tags: ["Optimal Transport", "PyTorch", "4D Radar", "ADAS", "Computer Vision"],
    current: true,
  },
  {
    role: "Computer Vision Researcher — Internship",
    org: "CAOR, Mines Paris – PSL",
    period: "2024",
    location: "Paris, France",
    description:
      "Developed a model for extracting and reconstructing vehicle trajectories from traffic camera video streams fused with LiDAR data. Worked on 3D reconstruction and tracking pipelines for urban traffic analysis.",
    tags: ["Computer Vision", "LiDAR", "Trajectory Estimation", "Python"],
    current: false,
  },
  {
    role: "Computer Vision Engineer — Internship",
    org: "Enova Robotics",
    period: "2023",
    location: "Tunis, Tunisia",
    description:
      "Implemented LiDAR-camera sensor fusion models using PV-RCNN and BiProDet architectures for 3D object detection. Benchmarked and fine-tuned multi-modal perception pipelines on custom robotic datasets.",
    tags: ["PV-RCNN", "BiProDet", "LiDAR-Camera Fusion", "3D Detection"],
    current: false,
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-slate-50">
      <SectionTitle label="Career" title="Experience" />
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-blue-600/60 via-slate-200 to-transparent hidden sm:block" />

        <div className="space-y-5">
          {experiences.map((e) => (
            <div key={e.role} className="sm:pl-12 relative">
              {/* Dot */}
              <div
                className={`hidden sm:block absolute left-[13px] top-2 w-[6px] h-[6px] rounded-full border-2 ${
                  e.current
                    ? "bg-blue-600 border-blue-600 shadow-[0_0_6px_rgba(37,99,235,0.5)]"
                    : "bg-white border-slate-300"
                }`}
              />

              <div className="p-5 rounded-xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-sm transition-all duration-200">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{e.role}</h3>
                    {e.orgUrl ? (
                      <a
                        href={e.orgUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:text-blue-700 transition-colors mt-0.5 inline-block"
                      >
                        {e.org} ↗
                      </a>
                    ) : (
                      <p className="text-xs text-blue-600 mt-0.5">{e.org}</p>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs text-slate-500">{e.period}</p>
                    <p className="text-xs text-slate-400">{e.location}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mt-2">{e.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {e.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
