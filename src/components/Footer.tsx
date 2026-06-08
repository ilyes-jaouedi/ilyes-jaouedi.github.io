export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-slate-400 dark:text-slate-500">
          &copy; {new Date().getFullYear()} Ilyes Jaouedi
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500">
          PhD Candidate · L2S, CentraleSupélec / CNRS / Université Paris-Saclay
        </p>
      </div>
    </footer>
  );
}
