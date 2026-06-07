import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const axes = [
  {
    index: "01",
    label: "Cross-Modal Sensor Alignment",
    text: "Developing mathematically principled methods to align camera and 4D radar representations across their respective geometric and statistical spaces — bridging the fundamental gap between optical and RF sensing modalities.",
  },
  {
    index: "02",
    label: "Uncertainty-Aware 3D Perception",
    text: "Building detection architectures that propagate and quantify fusion uncertainty through to downstream ADAS tasks, enabling reliable 3D object detection and localization under real-world sensor noise and occlusion.",
  },
  {
    index: "03",
    label: "Industrial Validation",
    text: "Applying and validating research directly on real automotive radar datasets in collaboration with FORVIA, closing the loop between theoretical frameworks and deployment-ready perception systems.",
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

      {/* Thesis statement */}
      <p className="text-slate-600 text-base leading-relaxed max-w-3xl mb-10 pl-4 border-l-2 border-blue-500">
        My PhD investigates the fusion of camera and 4D radar for robust autonomous driving perception.
        The central challenge — and contribution — is developing mathematically principled methods
        to align heterogeneous sensor representations, bridging the optical and RF domains using
        optimal transport theory.
      </p>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Left: schematic + research axes */}
        <div className="lg:col-span-2 space-y-8">

          {/* Inline pipeline schematic */}
          <div className="p-5 rounded-xl bg-white border border-slate-200 overflow-x-auto">
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">Pipeline</p>
            <div className="flex items-center gap-2 min-w-max">
              {/* Sensors */}
              <div className="flex flex-col gap-2">
                <div className="px-3 py-1.5 rounded-lg border border-blue-200 bg-blue-50 text-xs font-mono text-blue-700 text-center whitespace-nowrap">
                  Camera
                </div>
                <div className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-xs font-mono text-slate-600 text-center whitespace-nowrap">
                  4D Radar
                </div>
              </div>

              {/* Arrow */}
              <div className="flex flex-col gap-2 items-center">
                <span className="text-slate-300 text-sm">→</span>
                <span className="text-slate-300 text-sm">→</span>
              </div>

              {/* OT fusion box */}
              <div className="px-4 py-3 rounded-lg border-2 border-blue-400 bg-blue-50 text-center self-stretch flex items-center">
                <div>
                  <p className="text-xs font-mono font-semibold text-blue-700 whitespace-nowrap">Optimal Transport</p>
                  <p className="text-xs text-blue-500 mt-0.5 whitespace-nowrap">Cross-modal alignment</p>
                </div>
              </div>

              {/* Arrow */}
              <span className="text-slate-300 text-sm">→</span>

              {/* Perception */}
              <div className="px-4 py-3 rounded-lg border border-slate-200 bg-white text-center self-stretch flex items-center">
                <div>
                  <p className="text-xs font-mono text-slate-700 whitespace-nowrap">3D Object Detection</p>
                  <p className="text-xs text-slate-400 mt-0.5 whitespace-nowrap">Uncertainty-aware</p>
                </div>
              </div>

              {/* Arrow */}
              <span className="text-slate-300 text-sm">→</span>

              {/* ADAS */}
              <div className="px-4 py-3 rounded-lg border border-slate-200 bg-white text-center self-stretch flex items-center">
                <div>
                  <p className="text-xs font-mono text-slate-700 whitespace-nowrap">ADAS Systems</p>
                  <p className="text-xs text-slate-400 mt-0.5 whitespace-nowrap">All-weather perception</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right: sidebar */}
        <div className="space-y-4">
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
            <p className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-3">Affiliation</p>
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
            <div className="mt-3 pt-3 border-t border-slate-100">
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Supervisors</p>
              <p className="text-xs text-slate-600 font-medium">Gilles Chardon</p>
              <p className="text-xs text-slate-600 font-medium mt-0.5">José Picheral</p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
            <p className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-3">Industrial Partner</p>
            <a
              href="https://www.forvia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-800 font-medium hover:text-blue-600 transition-colors"
            >
              FORVIA ↗
            </a>
            <p className="text-xs text-slate-500 mt-1">FAURECIA · HELLA — Tier-1 Automotive Supplier</p>
            <p className="text-xs text-slate-400 mt-0.5">4D Radar · Camera Fusion · ADAS Perception</p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
            <p className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-3">Keywords</p>
            <div className="flex flex-wrap gap-2">
              {keywords.map((k) => (
                <span
                  key={k}
                  className="text-xs px-2.5 py-1 rounded bg-blue-50 border border-blue-200 text-blue-700"
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
