import { Link } from "react-router-dom";
import { SITE } from "../data/site.js";

/* Placeholder for pages that are not built yet */
export default function UnderDevelopment({ title }) {
  return (
    <main className="container"><div className="dev-box">
      <div className="icon" aria-hidden="true">🛠️</div>
      <h1 className="section-title fs-2 mt-2">{title} page is under development</h1>
      <p className="muted">This page is not built yet. To get it built, contact the developer.</p>
      <div className="d-flex flex-wrap justify-content-center gap-2">
        <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-ink">Contact developer on GitHub</a>
        <Link to="/" className="btn btn-brass">Back to home</Link>
      </div>
    </div></main>
  );
}
