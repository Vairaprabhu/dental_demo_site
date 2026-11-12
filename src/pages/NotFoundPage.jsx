import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageMeta from "../components/PageMeta.jsx";

export default function NotFoundPage() {
  return (
    <main className="not-found-page">
      <PageMeta title="Page not found" description="We could not find that page. Head back to the ORA home page to explore." />
      <span className="not-found-mark">404</span>
      <p className="eyebrow">A little detour</p>
      <h1>This page took<br />a <em>different turn.</em></h1>
      <p>We cannot find the page you were looking for. Let us help you find your way back.</p>
      <Link className="button button-dark" to="/"><ArrowLeft size={15} /> Back to ORA</Link>
    </main>
  );
}
