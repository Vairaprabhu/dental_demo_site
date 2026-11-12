import { faqs } from "../data/siteData.js";
import Reveal from "./Reveal.jsx";

export default function FAQ({ items = faqs }) {
  return (
    <section className="faq-section section-pad">
      <Reveal className="section-heading">
        <p className="eyebrow">Good to know</p>
        <h2>Questions, <em>answered.</em></h2>
      </Reveal>
      <div className="faq-list">
        {items.map((item, index) => (
          <Reveal key={item.question} delay={index * 0.035}>
            <details className="faq-item">
              <summary>
                <span>{item.question}</span>
                <span className="faq-plus" aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
