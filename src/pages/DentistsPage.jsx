import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import AppointmentCallout from "../components/AppointmentCallout.jsx";
import PageMeta from "../components/PageMeta.jsx";
import Reveal from "../components/Reveal.jsx";
import { dentists } from "../data/siteData.js";

export default function DentistsPage() {
  return (
    <main>
      <PageMeta title="Our dentists" description="Meet the people behind the ORA demo brand. All dentist names, profiles and qualifications on this page are illustrative placeholders." />
      <section className="page-hero page-hero-simple">
        <p className="eyebrow">The people behind your care</p>
        <h1>Good people.<br /><em>Thoughtful care.</em></h1>
        <p>Care feels different when you feel seen. Get to know the team behind the ORA approach.</p>
        <span className="page-demo-note">Demo content: all names, photos, qualifications and specializations below are placeholders and must be verified before publication.</span>
      </section>
      <section className="dentists-page-grid section-pad">
        {dentists.map((dentist, index) => (
          <Reveal className={`dentist-profile dentist-profile-${index + 1}`} key={dentist.name}>
            <div className="dentist-profile-image">
              <img src={dentist.image} alt={dentist.imageAlt} loading="lazy" />
              <span className="demo-badge">Illustrative profile</span>
            </div>
            <div className="dentist-profile-copy">
              <span className="eyebrow">{dentist.role}</span>
              <h2>{dentist.name}</h2>
              <p>{dentist.note}</p>
              <Link className="text-link" to="/appointment">Ask about a consultation <ArrowUpRight size={15} /></Link>
            </div>
          </Reveal>
        ))}
      </section>
      <AppointmentCallout />
    </main>
  );
}
