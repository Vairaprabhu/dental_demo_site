import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { treatments } from "../data/siteData.js";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link className="wordmark wordmark-light" to="/">
            ora<span className="wordmark-dot">.</span>
          </Link>
          <p>Thoughtful dental care, made to feel like you.</p>
          <span className="footer-demo">Independent dental studio · Demo brand</span>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <Link to="/philosophy">Our philosophy</Link>
          <Link to="/treatments">Treatments</Link>
          <Link to="/dentists">Our dentists</Link>
          <Link to="/stories">Smile stories</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-column">
          <h2>Treatments</h2>
          {treatments.slice(0, 4).map((treatment) => (
            <Link key={treatment.slug} to={`/treatments/${treatment.slug}`}>
              {treatment.name}
            </Link>
          ))}
        </div>
        <div className="footer-column footer-contact">
          <h2>Say hello</h2>
          <a href="mailto:hello@ora.example">hello@ora.example</a>
          <a href="tel:+15550140140">+1 (555) 014-0140</a>
          <span>Studio details shown are demo content.</span>
          <div className="footer-socials" aria-label="Demo social links">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">Pinterest ↗</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} ORA · Demo brand</span>
        <span>Care that starts with a conversation.</span>
        <Link to="/appointment">Start a conversation <ArrowUpRight size={14} /></Link>
      </div>
    </footer>
  );
}
