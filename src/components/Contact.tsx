import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";

const links = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "ilyes.jaouedi@centralesupelec.fr",
    href: "mailto:ilyes.jaouedi@centralesupelec.fr",
  },
  {
    icon: <LinkedInIcon size={18} />,
    label: "LinkedIn",
    value: "ilyes-jaouadi",
    href: "https://www.linkedin.com/in/ilyes-jaouadi",
  },
  {
    icon: <GitHubIcon size={18} />,
    label: "GitHub",
    value: "ilyes-jaouedi",
    href: "https://github.com/ilyes-jaouedi",
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "Paris, France",
    href: null,
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-slate-50">
      <div className="max-w-2xl mx-auto text-center">
        <SectionTitle label="Get in touch" title="Contact" />
        <p className="text-slate-500 text-sm leading-relaxed mb-10">
          I am open to academic collaborations, research discussions, and relevant
          engineering opportunities. Feel free to reach out.
        </p>

        <div className="grid sm:grid-cols-2 gap-3">
          {links.map((l) =>
            l.href ? (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all duration-200 group text-left"
              >
                <span className="text-slate-400 group-hover:text-blue-600 transition-colors shrink-0">
                  {l.icon}
                </span>
                <div>
                  <p className="text-xs text-slate-400">{l.label}</p>
                  <p className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">
                    {l.value}
                  </p>
                </div>
              </a>
            ) : (
              <div
                key={l.label}
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 text-left"
              >
                <span className="text-slate-400 shrink-0">{l.icon}</span>
                <div>
                  <p className="text-xs text-slate-400">{l.label}</p>
                  <p className="text-sm text-slate-600">{l.value}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
