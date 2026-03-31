import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const highlights = [
  {
    label: "Problem",
    text: "Radar and camera are complementary but heterogeneous sensors. Radar offers precise radial velocity and operates in all weather, but has sparse, ambiguous spatial resolution. Cameras provide rich texture and geometry but are blind in fog and darkness. Fusing them effectively requires bridging a fundamental representational gap.",
  },
  {
    label: "Approach",
    text: "I use Optimal Transport (OT) as a principled framework to align multi-modal sensor distributions across their respective geometric spaces. OT provides a mathematically grounded way to compare and transform probability measures — enabling cross-modal matching that respects the underlying geometry rather than relying on heuristic hand-crafted features.",
  },
  {
    label: "Key Contributions",
    text: "Development of OT-based cross-modal fusion pipelines for 4D radar and camera data; uncertainty-aware detection architectures for downstream ADAS tasks including 3D object detection.",
  },
  {
    label: "Industrial Context",
    text: "The PhD is conducted in collaboration with FORVIA (FAURECIA · HELLA), a Tier-1 automotive supplier, applying research directly to real automotive radar datasets.",
  },
];

const keywords = [
  "Optimal Transport",
  "Camera-Radar Fusion",
  "4D Radar",
  "Object Detection",
  "ADAS / Autonomous Driving",
  "Deep Learning",
  "Probabilistic Geometry",
  "PyTorch",
  "Sensor Fusion",
];

export default function Research() {
  return (
    <SectionWrapper id="research" className="bg-slate-50">
      <SectionTitle label="PhD Research" title="Research" />

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {highlights.map((h) => (
            <div key={h.label} className="flex gap-4">
              <div className="shrink-0 mt-1">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5" />
              </div>
              <div>
                <p className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-1">
                  {h.label}
                </p>
                <p className="text-slate-600 leading-relaxed text-sm">{h.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
            <p className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-3">
              Affiliation
            </p>
            <a
              href="https://l2s.centralesupelec.fr/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-800 font-medium hover:text-blue-600 transition-colors"
            >
              Laboratory of Signals and Systems (L2S) ↗
            </a>
            <p className="text-xs text-slate-500 mt-1">
              CentraleSupélec · CNRS · Université Paris-Saclay
            </p>
            <p className="text-xs text-slate-400 mt-0.5">Signal & Statistics Group (GME)</p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
            <p className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-3">
              Industrial Partner
            </p>
            <a
              href="https://www.forvia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-800 font-medium hover:text-blue-600 transition-colors"
            >
              FORVIA ↗
            </a>
            <p className="text-xs text-slate-500 mt-1">
              FAURECIA · HELLA — Tier-1 Automotive Supplier
            </p>
            <p className="text-xs text-slate-400 mt-0.5">
              4D Radar · Camera Fusion · ADAS Perception
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
            <p className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-3">
              Keywords
            </p>
            <div className="flex flex-wrap gap-2">
              {keywords.map((k) => (
                <span
                  key={k}
                  className="text-xs px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700"
                >
                  {k}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
