import { ArrowUpRight, Clock3, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import AppointmentForm from "../components/AppointmentForm.jsx";
import PageMeta from "../components/PageMeta.jsx";
import Reveal from "../components/Reveal.jsx";
import FAQ from "../components/FAQ.jsx";
import { photo } from "../data/siteData.js";

export default function ContactPage() {
  return (
    <main>
      <PageMeta title="Contact" description="Get in touch with ORA to ask a question or request a consultation. Clinic contact details on this demo site are placeholders." />
      <section className="page-hero page-hero-simple">
        <p className="eyebrow">Start wherever you are</p>
        <h1>We are here to <em>listen.</em></h1>
        <p>Ask a question, share what is on your mind, or simply say hello. We would love to hear from you.</p>
      </section>
      <section className="contact-layout section-pad">
        <Reveal className="contact-details">
          <div className="contact-detail"><MapPin size={19} /><div><h2>Come by</h2><p>Studio address · demo content<br />Please replace before publication.</p></div></div>
          <div className="contact-detail"><Phone size={19} /><div><h2>Give us a call</h2><a href="tel:+15550140140">+1 (555) 014-0140</a><p>Demo phone number</p></div></div>
          <div className="contact-detail"><Clock3 size={19} /><div><h2>When we are here</h2><p>Monday–Friday · Demo hours<br />Please confirm actual opening hours.</p></div></div>
          <img src={photo("photo-1629909613654-28e377c37b09", 1000)} alt="Illustrative image of a bright modern dental studio" loading="lazy" />
          <Link className="text-link" to="/appointment">Request a consultation <ArrowUpRight size={15} /></Link>
        </Reveal>
        <Reveal className="contact-form-panel">
          <p className="eyebrow">Tell us a little</p>
          <h2>How can we <em>help?</em></h2>
          <AppointmentForm />
        </Reveal>
      </section>
      <FAQ />
    </main>
  );
}
