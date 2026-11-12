import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import AppointmentCallout from "../components/AppointmentCallout.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import PageMeta from "../components/PageMeta.jsx";
import Reveal from "../components/Reveal.jsx";
import { treatments } from "../data/siteData.js";

export default function TreatmentPage() {
  const { slug } = useParams();
  const treatment = treatments.find((item) => item.slug === slug);

  if (!treatment) return <NotFoundPage />;

  return (
    <main>
      <PageMeta title={treatment.name} description={treatment.description} />
      <section className="treatment-detail-hero">
        <div className="treatment-detail-copy">
          <Link className="back-link" to="/treatments"><ArrowLeft size={15} /> All treatments</Link>
          <p className="eyebrow">{treatment.category} · {treatment.number}</p>
          <h1>{treatment.name}<br /><em>at your pace.</em></h1>
          <p className="large-copy">{treatment.short}</p>
          <Link className="button button-dark" to="/appointment">Ask us about it <ArrowUpRight size={15} /></Link>
        </div>
        <div className="treatment-detail-image">
          <img src={treatment.image} alt={treatment.imageAlt} fetchPriority="high" />
        </div>
      </section>
      <section className="treatment-detail-body section-pad">
        <Reveal>
          <p className="eyebrow">A clearer picture</p>
          <h2>Care begins with <em>a conversation.</em></h2>
        </Reveal>
        <Reveal className="treatment-detail-text">
          <p>{treatment.detail}</p>
          <div className="detail-note"><span>It may be worth exploring if…</span><p>{treatment.idealFor}</p></div>
        </Reveal>
      </section>
      <section className="treatment-reassurance section-pad">
        <Reveal className="reassurance-inner">
          <p className="eyebrow">Your choice, your pace</p>
          <h2>Questions are always <em>welcome.</em></h2>
          <p>Nothing starts without a conversation. Your dentist will help you understand whether this option is suitable for your individual needs.</p>
          <Link className="text-link" to="/contact">Talk to our team <ArrowUpRight size={15} /></Link>
        </Reveal>
      </section>
      <AppointmentCallout />
    </main>
  );
}
