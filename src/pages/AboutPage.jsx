import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import AppointmentCallout from "../components/AppointmentCallout.jsx";
import PageMeta from "../components/PageMeta.jsx";
import Reveal from "../components/Reveal.jsx";
import { experienceSteps, photo } from "../data/siteData.js";

export default function AboutPage() {
  return (
    <main>
      <PageMeta title="Our philosophy" description="Meet the ORA philosophy: patient-first dental care with comfort, clarity and a personal touch." />
      <section className="page-hero page-hero-split">
        <div className="page-hero-copy">
          <p className="eyebrow">The ORA point of view</p>
          <h1>Care that feels <em>different.</em></h1>
          <p>Good care begins with a person, not a procedure. We believe the best experience is one where you feel heard, informed and at ease.</p>
        </div>
        <div className="page-hero-image">
          <img src={photo("photo-1629909613654-28e377c37b09", 1500)} alt="A calm, light-filled dental studio" fetchPriority="high" />
          <span className="image-note">A studio designed around feeling welcome.</span>
        </div>
      </section>
      <section className="about-values section-pad">
        <Reveal className="about-values-heading">
          <p className="eyebrow">What matters here</p>
          <h2>Modern dentistry.<br /><em>More human.</em></h2>
        </Reveal>
        <div className="value-list">
          <Reveal><span>01</span><h3>We listen first.</h3><p>Your priorities, questions and comfort help shape every conversation.</p></Reveal>
          <Reveal><span>02</span><h3>We make things clear.</h3><p>We explain your options in plain language, so you can make an informed choice.</p></Reveal>
          <Reveal><span>03</span><h3>We move at your pace.</h3><p>Care should feel collaborative. You can ask, pause and decide what feels right.</p></Reveal>
          <Reveal><span>04</span><h3>We keep learning.</h3><p>Thoughtful use of modern tools supports our clinicians and your experience.</p></Reveal>
        </div>
      </section>
      <section className="about-quote">
        <Reveal>
          <span aria-hidden="true">“</span>
          <blockquote>Confidence can begin with feeling genuinely cared for.</blockquote>
          <p>The ORA approach · Demo brand statement</p>
        </Reveal>
      </section>
      <section className="about-journey section-pad">
        <Reveal className="section-heading">
          <p className="eyebrow eyebrow-light">A little more ease</p>
          <h2>Your experience, <em>step by step.</em></h2>
        </Reveal>
        <div className="steps-grid steps-grid-light">
          {experienceSteps.map((step, index) => (
            <Reveal className="step" key={step.number} delay={index * 0.05}>
              <span className="step-number">{step.number}</span>
              <span className="step-line" aria-hidden="true" />
              <h3>{step.name}</h3><p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="about-next section-pad">
        <Reveal>
          <p className="eyebrow">No pressure. Just a hello.</p>
          <h2>Curious about <em>your options?</em></h2>
          <p>Start with a conversation. We can take it from there, together.</p>
          <Link className="text-link" to="/appointment">Get in touch <ArrowUpRight size={15} /></Link>
        </Reveal>
      </section>
      <AppointmentCallout />
    </main>
  );
}
