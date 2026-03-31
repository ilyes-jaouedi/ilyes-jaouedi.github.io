import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const groups = [
  {
    name: "Research & ML",
    items: [
      "Optimal Transport",
      "Sensor Fusion",
      "Object Detection",
      "3D Perception",
      "Generative Models",
      "Probabilistic ML",
      "Deep Learning",
    ],
  },
  {
    name: "Frameworks & Libraries",
    items: [
      "PyTorch",
      "scikit-learn",
      "Hugging Face",
      "OpenCV",
      "NumPy / SciPy",
      "ONNX / TensorRT",
    ],
  },
  {
    name: "AI Agents & LLMs",
    items: [
      "Google ADK",
      "Gemini API",
      "Claude API",
      "Vertex AI",
      "Gemini Live API",
      "LLM Tool Calling",
      "RAG Pipelines",
      "Prompt Engineering",
      "GCP Professional ML Engineer",
    ],
  },
  {
    name: "Cloud & Infrastructure",
    items: [
      "Google Cloud Platform",
      "BigQuery",
      "Cloud Run",
      "Cloud Functions",
      "GCS",
      "Vertex AI Platform",
      "Docker",
      "FastAPI",
    ],
  },
  {
    name: "Languages",
    items: ["Python", "TypeScript / JavaScript", "C++", "MATLAB", "SQL", "Bash"],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-slate-50">
      <SectionTitle label="Expertise" title="Skills & Technologies" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((g) => (
          <div
            key={g.name}
            className="p-5 rounded-xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-sm transition-all duration-200"
          >
            <p className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-3">
              {g.name}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700"
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
