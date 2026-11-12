import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import AppointmentCallout from "../components/AppointmentCallout.jsx";
import ComparisonSlider from "../components/ComparisonSlider.jsx";
import PageMeta from "../components/PageMeta.jsx";
import Reveal from "../components/Reveal.jsx";
import { photo } from "../data/siteData.js";

export default function StoriesPage() {
  return (
    <main>
      <PageMeta title="Smile stories" description="Explore illustrative smile imagery and learn about ORA's approach to discussing dental care without promising individual outcomes." />
      <section className="page-hero page-hero-simple">
        <p className="eyebrow">Every smile is its own story</p>
        <h1>Real care.<br /><em>No borrowed promises.</em></h1>
        <p>Our visuals are here to show the feeling of ORA, not to suggest a guaranteed treatment result.</p>
      </section>
      <section className="story-feature section-pad">
        <Reveal className="story-feature-intro">
          <p className="eyebrow">Illustrative smile comparison</p>
          <h2>A visual, not a <em>testimony.</em></h2>
          <p>This interactive image is a design demonstration. It is not a real patient, before-and-after case, testimonial or representation of clinical outcomes.</p>
        </Reveal>
        <Reveal><ComparisonSlider /></Reveal>
      </section>
      <section className="story-notes section-pad">
        <Reveal><span>01</span><h3>Every person is different.</h3><p>Care recommendations and outcomes depend on an individual assessment.</p></Reveal>
        <Reveal><span>02</span><h3>Clarity comes first.</h3><p>We explain options, considerations and costs before any care begins.</p></Reveal>
        <Reveal><span>03</span><h3>There is no perfect smile.</h3><p>Our focus is helping you feel comfortable, informed and cared for.</p></Reveal>
      </section>
      <section className="story-mosaic section-pad">
        <Reveal className="story-mosaic-copy">
          <p className="eyebrow">A feeling, more than a finish</p>
          <h2>Confidence looks like <em>you.</em></h2>
          <p>These are lifestyle images used to communicate the warmth of the ORA demo brand. They do not depict actual patients or clinical results.</p>
          <Link className="text-link" to="/philosophy">Discover our philosophy <ArrowUpRight size={15} /></Link>
        </Reveal>
        <Reveal className="story-mosaic-image"><img src={photo("photo-1606811841689-23dfddce3e95", 1300)} alt="Illustrative lifestyle portrait with a relaxed, natural smile" loading="lazy" /><span>Illustrative lifestyle image</span></Reveal>
      </section>
      <AppointmentCallout />
    </main>
  );
}
