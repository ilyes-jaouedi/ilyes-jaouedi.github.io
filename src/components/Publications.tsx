"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Loader2 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: string;
  url?: string;
  type: "conference" | "journal" | "preprint";
}

const typeColor: Record<Publication["type"], string> = {
  conference: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700/50",
  journal:    "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700/50",
  preprint:   "bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-700/50",
};

function docTypeToKind(s: string): Publication["type"] {
  if (s === "ART")  return "journal";
  if (s === "COMM") return "conference";
  return "preprint";
}

function extractHalId(url: string): string | null {
  const match = url.match(/hal-\d+/);
  return match ? match[0] : null;
}

function PublicationCard({ pub }: { pub: Publication }) {
  const [imgFailed, setImgFailed] = useState(false);

  const halId = pub.url ? extractHalId(pub.url) : null;
  const imgSrc = halId ? `/papers/${halId}.png` : null;
  const showImage = imgSrc && !imgFailed;

  return (
    <div className="flex gap-5 p-5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-sm transition-all duration-200 group">
      {showImage && (
        <div className="shrink-0 w-36 rounded-lg overflow-hidden border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 self-start">
          <img
            src={imgSrc}
            alt={pub.title}
            onError={() => setImgFailed(true)}
            className="w-full h-full object-contain"
          />
        </div>
      )}

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-2">
          <span className={`text-xs px-2 py-0.5 rounded border capitalize ${typeColor[pub.type]}`}>
            {pub.type}
          </span>
          {pub.year && <span className="text-xs text-slate-400 dark:text-slate-500">{pub.year}</span>}
        </div>

        <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-slate-900 dark:group-hover:text-white leading-snug mb-1.5">
          {pub.title}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5">{pub.authors.join(", ")}</p>
        {pub.venue && (
          <p className="text-xs text-slate-400 dark:text-slate-500 italic">{pub.venue}</p>
        )}

        {pub.url && (
          <a
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-2 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
          >
            View on HAL <ExternalLink size={11} />
          </a>
        )}
      </div>
    </div>
  );
}

export default function Publications() {
  const [pubs, setPubs] = useState<Publication[]>([]);
  const [status, setStatus] = useState<"loading" | "done" | "error">("loading");

  useEffect(() => {
    fetch(
      "https://api.archives-ouvertes.fr/search/?q=authLastName_t:jaouedi" +
        "&fl=title_s,authFullName_s,producedDate_s,uri_s,journalTitle_s,conferenceTitle_s,docType_s" +
        "&wt=json&rows=30&sort=producedDate_s+desc"
    )
      .then((r) => r.json())
      .then((data) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const docs: any[] = data?.response?.docs ?? [];
        setPubs(
          docs.map((d) => ({
            title:   Array.isArray(d.title_s) ? d.title_s[0] : (d.title_s ?? "Untitled"),
            authors: d.authFullName_s ?? [],
            venue:   d.conferenceTitle_s ?? d.journalTitle_s ?? "",
            year:    d.producedDate_s ? String(d.producedDate_s).slice(0, 4) : "",
            url:     d.uri_s,
            type:    docTypeToKind(d.docType_s ?? ""),
          }))
        );
        setStatus("done");
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <SectionWrapper id="publications" className="bg-slate-50 dark:bg-slate-900" compact>
      <SectionTitle label="Academic Output" title="Publications" />

      {status === "loading" && (
        <div className="flex items-center justify-center py-16 text-slate-400 dark:text-slate-500 gap-2">
          <Loader2 size={18} className="animate-spin" />
          <span className="text-sm">Fetching from HAL…</span>
        </div>
      )}

      {status === "error" && (
        <div className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Could not reach HAL. View publications directly at{" "}
            <a
              href="https://hal.science/search/index/?q=jaouedi&rows=30"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              hal.science
            </a>
            .
          </p>
        </div>
      )}

      {status === "done" && pubs.length === 0 && (
        <div className="p-8 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center shadow-sm">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Publications will appear here automatically once indexed on{" "}
            <a
              href="https://hal.science/search/index/?q=jaouedi&rows=30"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              HAL
            </a>
            .
          </p>
          <p className="text-slate-400 dark:text-slate-500 text-xs mt-2">PhD research in progress — papers in preparation.</p>
        </div>
      )}

      {status === "done" && pubs.length > 0 && (
        <div className="space-y-4">
          {pubs.map((p, i) => (
            <PublicationCard key={i} pub={p} />
          ))}
        </div>
      )}

      <div className="mt-6 text-center">
        <a
          href="https://hal.science/search/index/?q=jaouedi&rows=30"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
        >
          View full list on HAL <ExternalLink size={13} />
        </a>
      </div>
    </SectionWrapper>
  );
}
