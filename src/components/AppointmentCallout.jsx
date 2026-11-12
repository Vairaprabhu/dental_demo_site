import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AppointmentCallout() {
  return (
    <section className="appointment-callout">
      <div>
        <p className="eyebrow">Your next step</p>
        <h2>Let's start with <em>a conversation.</em></h2>
      </div>
      <Link className="button button-light" to="/appointment">
        Book a consultation <ArrowUpRight size={16} />
      </Link>
    </section>
  );
}
