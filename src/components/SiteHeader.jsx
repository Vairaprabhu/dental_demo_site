import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "Our Philosophy", to: "/philosophy" },
  { label: "Treatments", to: "/treatments" },
  { label: "Our Dentists", to: "/dentists" },
  { label: "Smile Stories", to: "/stories" },
  { label: "Contact", to: "/contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <Link className="wordmark" to="/" aria-label="ORA home" onClick={closeMenu}>
        ora<span className="wordmark-dot">.</span>
      </Link>
      <nav
        className={`main-nav${menuOpen ? " is-open" : ""}`}
        id="primary-navigation"
        aria-label="Main navigation"
      >
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.to === "/"} onClick={closeMenu}>
            {link.label}
          </NavLink>
        ))}
        <Link className="button button-dark mobile-nav-cta" to="/appointment" onClick={closeMenu}>
          Book a consultation <ArrowUpRight size={15} strokeWidth={1.7} />
        </Link>
      </nav>
      <div className="header-utilities">
        <Link className="button button-dark desktop-nav-cta" to="/appointment">
          Book a consultation <ArrowUpRight size={15} strokeWidth={1.7} />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
}
