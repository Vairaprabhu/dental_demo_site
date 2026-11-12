import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta.jsx";
import Reveal from "../components/Reveal.jsx";
import AppointmentForm from "../components/AppointmentForm.jsx";
import FAQ from "../components/FAQ.jsx";
import ComparisonSlider from "../components/ComparisonSlider.jsx";
import AppointmentCallout from "../components/AppointmentCallout.jsx";
import {
  dentists,
  experienceSteps,
  photo,
  treatments,
} from "../data/siteData.js";

export default function HomePage() {
  return (
    <main>
      <PageMeta
        title="The art of confident smiles"
        description="Thoughtful dental care designed around you, your comfort and your confidence. Discover the ORA approach."
      />
      <section className="home-hero">
        <img
          className="home-hero-image"
          src={photo("photo-1606811971618-4486d14f3f99", 2000)}
          alt="A natural smile, captured in warm, soft light"
          fetchPriority="high"
        />
        <div className="home-hero-shade" />
        <div className="home-hero-content">
          <p className="eyebrow eyebrow-light">A more considered kind of dentistry</p>
          <h1>Your smile.<br />Your kind of <em>beautiful.</em></h1>
          <p>
            Thoughtful dental care designed around you, your comfort and your
            confidence.
          </p>
          <div className="hero-actions">
            <Link className="button button-light" to="/treatments">
              Explore treatments <ArrowUpRight size={15} />
            </Link>
            <Link className="text-link text-link-light" to="/appointment">
              Book a consultation <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
        <span className="hero-caption">A softer approach to a brighter you</span>
        <a className="hero-scroll" href="#philosophy">
          <ArrowDown size={15} /> Scroll to discover
        </a>
      </section>

      <section className="intro-band section-pad" id="philosophy">
        <Reveal className="intro-kicker">
          <span className="eyebrow">Welcome to ORA</span>
          <span className="intro-star" aria-hidden="true">✳</span>
        </Reveal>
        <Reveal className="intro-copy">
          <h2>There is no one-size-fits-all <em>smile.</em></h2>
          <p>
            Just good people, thoughtful questions and care shaped around the
            person in the chair.
          </p>
          <Link className="text-link" to="/philosophy">
            Get to know us <ArrowUpRight size={15} />
          </Link>
        </Reveal>
      </section>

      <section className="philosophy-section section-pad">
        <Reveal className="philosophy-image-wrap">
          <img
            src={photo("photo-1629909613654-28e377c37b09", 1300)}
            alt="A calm, light-filled modern dental studio"
            loading="lazy"
          />
          <span className="image-note">A little more ease, from the moment you arrive.</span>
        </Reveal>
        <Reveal className="philosophy-copy">
          <p className="eyebrow">Our philosophy</p>
          <h2>Care that feels <em>different.</em></h2>
          <p className="large-copy">
            Dental care can be personal, considered and genuinely comfortable.
            That belief shapes everything we do.
          </p>
          <ul className="principle-list">
            <li><span>01</span> You come first, always.</li>
            <li><span>02</span> Your comfort is part of the care.</li>
            <li><span>03</span> Modern tools, thoughtful hands.</li>
            <li><span>04</span> A plan that feels like yours.</li>
          </ul>
          <Link className="text-link" to="/philosophy">
            The way we care <ArrowUpRight size={15} />
          </Link>
        </Reveal>
      </section>

      <section className="treatment-preview section-pad">
        <Reveal className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">Thoughtful care, your way</p>
            <h2>Find your <em>starting point.</em></h2>
          </div>
          <Link className="text-link" to="/treatments">
            All treatments <ArrowUpRight size={15} />
          </Link>
        </Reveal>
        <div className="treatment-editorial-list">
          {treatments.slice(0, 4).map((treatment, index) => (
            <Reveal key={treatment.slug} delay={index * 0.04}>
              <Link className="treatment-row" to={`/treatments/${treatment.slug}`}>
                <span className="treatment-number">{treatment.number}</span>
                <span className="treatment-row-image">
                  <img src={treatment.image} alt="" loading="lazy" />
                </span>
                <span className="treatment-row-copy">
                  <span className="eyebrow">{treatment.category}</span>
                  <strong>{treatment.name}</strong>
                  <span>{treatment.short}</span>
                </span>
                <ArrowUpRight className="treatment-arrow" size={20} />
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="small-note">Care is tailored to each person following an individual assessment.</p>
      </section>

      <section className="experience-section section-pad">
        <div className="experience-header">
          <Reveal>
            <p className="eyebrow eyebrow-light">A little more human</p>
            <h2>It is not just the <em>what.</em><br />It is the how.</h2>
          </Reveal>
          <Reveal className="experience-aside">
            <span className="experience-asterisk" aria-hidden="true">✳</span>
            <p>
              From your first hello to the care that follows, we make space for
              the person behind the smile.
            </p>
          </Reveal>
        </div>
        <div className="steps-grid">
          {experienceSteps.map((step, index) => (
            <Reveal className="step" key={step.number} delay={index * 0.06}>
              <span className="step-number">{step.number}</span>
              <span className="step-line" aria-hidden="true" />
              <h3>{step.name}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="dentist-preview section-pad">
        <Reveal className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">Good people, good care</p>
            <h2>Meet the people <em>behind your care.</em></h2>
          </div>
          <Link className="text-link" to="/dentists">Meet the team <ArrowUpRight size={15} /></Link>
        </Reveal>
        <div className="dentist-preview-grid">
          {dentists.map((dentist, index) => (
            <Reveal className={`dentist-preview-card dentist-preview-${index + 1}`} key={dentist.name}>
              <img src={dentist.image} alt={dentist.imageAlt} loading="lazy" />
              <span className="demo-badge">Demo profile</span>
              <div><h3>{dentist.name}</h3><p>{dentist.role.split(" · ")[0]}</p></div>
            </Reveal>
          ))}
        </div>
        <p className="small-note">All names, photos and profile details are illustrative demo content.</p>
      </section>

      <section className="stories-preview section-pad">
        <Reveal className="stories-copy">
          <p className="eyebrow">A visual note</p>
          <h2>See the smile.<br />Skip the <em>promises.</em></h2>
          <p>
            Every smile is different. This interactive image is an illustration,
            not a real patient story or a promise of results.
          </p>
          <Link className="text-link" to="/stories">About these visuals <ArrowUpRight size={15} /></Link>
        </Reveal>
        <Reveal className="stories-slider-wrap">
          <ComparisonSlider />
        </Reveal>
      </section>

      <section className="clinic-gallery section-pad">
        <Reveal className="section-heading">
          <p className="eyebrow">A place to feel at ease</p>
          <h2>Come on <em>in.</em></h2>
        </Reveal>
        <div className="gallery-grid">
          <Reveal className="gallery-item gallery-item-tall">
            <img src={photo("photo-1629909613654-28e377c37b09", 1200)} alt="A modern dental care space with warm natural light" loading="lazy" />
            <span>The studio · demo image</span>
          </Reveal>
          <Reveal className="gallery-item">
            <img src={photo("photo-1609840114035-3c981b782dfe", 1000)} alt="An inviting room prepared for a dental visit" loading="lazy" />
            <span>A quieter corner · demo image</span>
          </Reveal>
          <Reveal className="gallery-item gallery-item-wide">
            <img src={photo("photo-1606811841689-23dfddce3e95", 1200)} alt="A friendly welcome in a bright, contemporary clinic" loading="lazy" />
            <span>Room to breathe · demo image</span>
          </Reveal>
        </div>
        <p className="small-note">Clinic photographs shown are illustrative; ORA is a demo brand.</p>
      </section>

      <section className="home-enquiry section-pad">
        <Reveal className="enquiry-intro">
          <p className="eyebrow">A good place to begin</p>
          <h2>Tell us what is <em>on your mind.</em></h2>
          <p>Share a little, or simply ask a question. There is no pressure to know exactly what you need.</p>
        </Reveal>
        <Reveal className="enquiry-panel">
          <AppointmentForm />
        </Reveal>
      </section>

      <FAQ />
      <AppointmentCallout />
    </main>
  );
}
