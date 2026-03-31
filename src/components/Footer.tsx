export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Ilyes Jaouedi
        </p>
        <p className="text-xs text-slate-400">
          PhD Candidate · L2S, CentraleSupélec / CNRS / Université Paris-Saclay
        </p>
      </div>
    </footer>
  );
}
