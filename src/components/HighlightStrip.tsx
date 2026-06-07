const items = [
  { label: "PhD Candidate", value: "Since Oct. 2024" },
  { label: "Laboratory", value: "L2S · CentraleSupélec / CNRS / Université Paris-Saclay" },
  { label: "Industry", value: "FORVIA Collaboration" },
  { label: "Certified", value: "GCP Professional ML Engineer" },
];

export default function HighlightStrip() {
  return (
    <div className="border-y border-slate-100 bg-slate-50/60">
      <div className="max-w-5xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-6">
        {items.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col gap-0.5 ${
              i < items.length - 1 ? "md:border-r md:border-slate-200 md:pr-6" : ""
            }`}
          >
            <p className="text-xs font-mono text-blue-600 uppercase tracking-wider">
              {item.label}
            </p>
            <p className="text-sm font-medium text-slate-800 leading-snug">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
