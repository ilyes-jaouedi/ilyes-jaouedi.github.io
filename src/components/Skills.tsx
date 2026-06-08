import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const groups = [
  {
    name: "Signal Processing & Radar",
    items: [
      "Radar Signal Processing",
      "4D Radar",
      "Sensor Fusion",
      "LiDAR-Camera Fusion",
      "Point Cloud Processing",
      "Detection & Estimation",
      "Statistical Signal Processing",
    ],
  },
  {
    name: "Computer Vision & Deep Learning",
    items: [
      "Object Detection",
      "3D Perception",
      "Deep Learning",
      "Transformers",
      "Generative Models",
    ],
  },
  {
    name: "Mathematical Foundations",
    items: [
      "Optimal Transport",
      "Probabilistic ML",
      "Convex Optimization",
      "Differential Geometry",
    ],
  },
  {
    name: "Frameworks & Libraries",
    items: [
      "PyTorch",
      "OpenCV",
      "NumPy / SciPy",
      "scikit-learn",
      "ONNX / TensorRT",
      "Hugging Face",
    ],
  },
  {
    name: "Languages & Tools",
    items: ["Python", "C++", "MATLAB", "Bash", "Docker", "FastAPI"],
  },
  {
    name: "Cloud & AI Platforms",
    items: [
      "Google Cloud Platform",
      "Vertex AI",
      "BigQuery",
      "Google ADK",
      "Claude API",
    ],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-slate-50 dark:bg-slate-800/40">
      <SectionTitle label="Expertise" title="Skills & Technologies" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((g) => (
          <div
            key={g.name}
            className="p-5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-600 hover:shadow-sm transition-all duration-200"
          >
            <p className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">
              {g.name}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
