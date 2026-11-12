import AppointmentForm from "../components/AppointmentForm.jsx";
import PageMeta from "../components/PageMeta.jsx";
import Reveal from "../components/Reveal.jsx";
import { photo } from "../data/siteData.js";

export default function AppointmentPage() {
  return (
    <main>
      <PageMeta title="Book a consultation" description="Send an appointment enquiry to ORA. This demo form does not transmit personal information or confirm an appointment." />
      <section className="appointment-page section-pad">
        <Reveal className="appointment-page-copy">
          <p className="eyebrow">A good place to begin</p>
          <h1>Let's start with <em>a conversation.</em></h1>
          <p>Tell us a little about yourself and what you are looking for. Our team can help you find a next step that feels right.</p>
          <img src={photo("photo-1629909613654-28e377c37b09", 1200)} alt="A calm and welcoming contemporary dental studio" fetchPriority="high" />
          <p className="small-note">Demo contact form: details are not stored or sent, and no appointment is confirmed.</p>
        </Reveal>
        <Reveal className="appointment-page-form">
          <h2>Your enquiry</h2>
          <AppointmentForm />
        </Reveal>
      </section>
    </main>
  );
}
