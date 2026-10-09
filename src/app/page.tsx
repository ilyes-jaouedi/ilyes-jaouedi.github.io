import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HighlightStrip from "@/components/HighlightStrip";
import About from "@/components/About";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Structured data so search engines link this page to the same person on other sites
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ilyes Jaouedi",
  url: "https://ilyes-jaouedi.github.io/",
  image: "https://ilyes-jaouedi.github.io/photo.png",
  jobTitle: "PhD Candidate in Machine Learning and Signal Processing",
  affiliation: {
    "@type": "Organization",
    name: "Laboratory of Signals and Systems (L2S), CentraleSupélec, Université Paris-Saclay",
  },
  alumniOf: "École Polytechnique de Tunisie",
  knowsAbout: [
    "Radar signal processing",
    "Camera-radar fusion",
    "Machine learning",
    "Vision foundation models",
    "Optimal transport",
  ],
  sameAs: [
    "https://www.linkedin.com/in/ilyes-jaouedi",
    "https://github.com/ilyes-jaouedi",
    "https://hal.science/search/index/?q=jaouedi",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <HighlightStrip />
        <About />
        <Research />
        <Publications />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
