import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

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
    <SectionWrapper id="research" className="bg-slate-50 dark:bg-slate-800/40">
      <SectionTitle label="PhD Research" title="Research" />

      <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed max-w-3xl mb-10 pl-4 border-l-2 border-blue-500">
        My PhD investigates the fusion of camera and 4D radar for robust autonomous driving perception.
        The central challenge — and contribution — is developing mathematically principled methods
        to align heterogeneous sensor representations, bridging the optical and RF domains using
        optimal transport theory.
      </p>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-8">
          <div className="p-5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <p className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">Pipeline</p>
            <div className="flex items-center gap-2 min-w-max">
              <div className="flex flex-col gap-2">
                <div className="px-3 py-1.5 rounded-lg border border-blue-200 dark:border-blue-700/50 bg-blue-50 dark:bg-blue-900/30 text-xs font-mono text-blue-700 dark:text-blue-300 text-center whitespace-nowrap">
                  Camera
                </div>
                <div className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-xs font-mono text-slate-600 dark:text-slate-300 text-center whitespace-nowrap">
                  4D Radar
                </div>
              </div>

              <div className="flex flex-col gap-2 items-center">
                <span className="text-slate-300 dark:text-slate-600 text-sm">→</span>
                <span className="text-slate-300 dark:text-slate-600 text-sm">→</span>
              </div>

              <div className="px-4 py-3 rounded-lg border-2 border-blue-400 dark:border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-center self-stretch flex items-center">
                <div>
                  <p className="text-xs font-mono font-semibold text-blue-700 dark:text-blue-300 whitespace-nowrap">Optimal Transport</p>
                  <p className="text-xs text-blue-500 dark:text-blue-400 mt-0.5 whitespace-nowrap">Cross-modal alignment</p>
                </div>
              </div>

              <span className="text-slate-300 dark:text-slate-600 text-sm">→</span>

              <div className="px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-center self-stretch flex items-center">
                <div>
                  <p className="text-xs font-mono text-slate-700 dark:text-slate-200 whitespace-nowrap">3D Object Detection</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5 whitespace-nowrap">Uncertainty-aware</p>
                </div>
              </div>

              <span className="text-slate-300 dark:text-slate-600 text-sm">→</span>

              <div className="px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-center self-stretch flex items-center">
                <div>
                  <p className="text-xs font-mono text-slate-700 dark:text-slate-200 whitespace-nowrap">ADAS Systems</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5 whitespace-nowrap">All-weather perception</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
            <p className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">Affiliation</p>
            <a
              href="https://l2s.centralesupelec.fr/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-800 dark:text-slate-100 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Laboratory of Signals and Systems (L2S) ↗
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              CentraleSupélec · CNRS · Université Paris-Saclay
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">Signal & Statistics Group (GME)</p>
            <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700">
              <p className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">Supervisors</p>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">Gilles Chardon</p>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-0.5">José Picheral</p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
            <p className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">Industrial Partner</p>
            <a
              href="https://www.forvia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-800 dark:text-slate-100 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              FORVIA ↗
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">FAURECIA · HELLA — Tier-1 Automotive Supplier</p>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">4D Radar · Camera Fusion · ADAS Perception</p>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
            <p className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">Keywords</p>
            <div className="flex flex-wrap gap-2">
              {keywords.map((k) => (
                <span
                  key={k}
                  className="text-xs px-2.5 py-1 rounded bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 text-blue-700 dark:text-blue-300"
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
