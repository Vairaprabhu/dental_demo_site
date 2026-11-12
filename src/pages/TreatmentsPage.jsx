import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import AppointmentCallout from "../components/AppointmentCallout.jsx";
import PageMeta from "../components/PageMeta.jsx";
import Reveal from "../components/Reveal.jsx";
import { treatments } from "../data/siteData.js";

const categories = ["All", "Cosmetic", "Alignment", "Restorative", "Everyday"];

export default function TreatmentsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const visibleTreatments = useMemo(
    () => activeCategory === "All"
      ? treatments
      : treatments.filter((treatment) => treatment.category === activeCategory),
    [activeCategory],
  );

  return (
    <main>
      <PageMeta title="Treatments" description="Explore ORA dental treatments, from preventive care to smile design, with clear information to help you find a starting point." />
      <section className="page-hero page-hero-simple">
        <p className="eyebrow">A place to start</p>
        <h1>Thoughtful care.<br /><em>Room to choose.</em></h1>
        <p>Explore what is possible, ask questions and find the next step that feels right for you.</p>
      </section>
      <section className="treatment-directory section-pad">
        <div className="filter-bar" role="group" aria-label="Filter treatments by category">
          {categories.map((category) => (
            <button
              className={activeCategory === category ? "filter-chip is-active" : "filter-chip"}
              type="button"
              key={category}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="treatment-directory-grid">
          {visibleTreatments.map((treatment, index) => (
            <Reveal className={`treatment-feature treatment-feature-${index % 3 + 1}`} key={treatment.slug}>
              <Link to={`/treatments/${treatment.slug}`} className="treatment-feature-link">
                <span className="treatment-feature-image">
                  <img src={treatment.image} alt={treatment.imageAlt} loading="lazy" />
                  <span className="treatment-feature-number">{treatment.number}</span>
                </span>
                <span className="treatment-feature-copy">
                  <span className="eyebrow">{treatment.category}</span>
                  <strong>{treatment.name}</strong>
                  <span>{treatment.description}</span>
                  <span className="text-link">Explore this treatment <ArrowUpRight size={15} /></span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="small-note">Treatment suitability and outcomes vary by person and require an individual clinical assessment.</p>
      </section>
      <AppointmentCallout />
    </main>
  );
}
