interface Props {
  label: string;
  title: string;
}

export default function SectionTitle({ label, title }: Props) {
  return (
    <div className="mb-12">
      <p className="text-blue-600 text-xs font-mono tracking-widest uppercase mb-2">{label}</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">{title}</h2>
      <div className="mt-3 h-px w-16 bg-gradient-to-r from-blue-600 to-transparent" />
    </div>
  );
}
