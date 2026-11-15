import { Link } from "react-router-dom";
import Slider from "../components/Slider.jsx";
import SmartImg from "../components/SmartImg.jsx";
import Customizer from "../components/Customizer.jsx";
import { SITE } from "../data/site.js";
import { WATCHES } from "../data/watches.js";

const HERO = import.meta.env.BASE_URL + "images/hero-watch.webp";

const REVIEWS = [
  [
    "The customizer made choosing easy. I saw my exact watch before I ordered.",
    "Aarav M.",
  ],
  [
    "Clear details for every model. No guessing about size or water resistance.",
    "Priya S.",
  ],
  ["Fast replies and a watch that looks even better in person.", "Daniel R."],
];

const CATEGORY_IMAGES = {
  Luxury: "luxury.png",
  Sport: "sport.png",
  Dive: "dive.png",
  Smart: "smart.png",
  Dress: "dress.png",
  Vintage: "vintage.png",
};

export default function Home() {
  return (
    <main>
      {/* Reusable slider above the hero */}
      <Slider
        className="promo"
        label="Offers"
        slides={SITE.promos}
        renderSlide={(p) => (
          <p className="mb-0">
            <span>{p.text}</span>{" "}
            <Link to={p.to} className="promo-link">
              {p.cta} →
            </Link>
          </p>
        )}
      />

      <header className="hero hero-photo">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-5">
              <h1 className="hero-title">
                Time looks better when it is yours.
              </h1>
              <p className="hero-lead">
                Choose a watch from six clear categories, or design your own
                dial, strap and case in minutes.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/watches" className="btn btn-brass btn-lg">
                  Shop watches
                </Link>
                <Link to="/#customize" className="btn btn-outline-ink btn-lg">
                  Design your own
                </Link>
              </div>
              <div className="hero-stats">
                <div>
                  <strong>12+</strong>Models
                </div>
                <div>
                  <strong>6</strong>Categories
                </div>
                <div>
                  <strong>2 yr</strong>Warranty
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-stage">
                <img
                  className="hero-img"
                  src={HERO}
                  alt="Silver smartwatch with a storm blue sport band"
                  width="2168"
                  height="1472"
                  fetchPriority="high"
                />
                <div className="glass top">
                  <small>Battery</small>
                  <strong>18 hours</strong>
                </div>
                <div className="glass">
                  <small>Smart collection from</small>
                  <strong>$229</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section pb-0">
        <div className="container">
          <div className="row gy-4 gx-lg-5 align-items-center">
            <div className="col-lg-7">
              <div className="showcase">
                <img
                  src={HERO}
                  alt="Smartwatch close view with feature points"
                  loading="lazy"
                />
                <div className="hot" style={{ left: "51%", top: "41%" }}>
                  <i />
                  <b>Digital crown</b>
                </div>
                <div className="hot" style={{ left: "37%", top: "50%" }}>
                  <i />
                  <b>Always-on display</b>
                </div>
                <div className="hot" style={{ left: "64%", top: "54%" }}>
                  <i />
                  <b>Soft sport band</b>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <h2 className="section-title">Every detail, up close</h2>
              <p className="muted">
                See what makes this watch easy to live with: a bright screen you
                can read in daylight, a crown that scrolls smoothly, and a band
                that stays comfortable all day.
              </p>
              <Link to="/watches?cat=Smart" className="btn btn-brass btn-lg">
                See smart watches
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title mb-4">Shop by category</h2>
          <div className="row g-4">
            {SITE.categories.map(([name, note, id]) => (
              <div className="col-6 col-lg-4" key={id}>
                <Link className="cat-tile" to={`/watches?cat=${name}`}>
                  <SmartImg
                    src={`${import.meta.env.BASE_URL}images/${CATEGORY_IMAGES[name]}`}
                    alt={`${name} watches`}
                    loading="lazy"
                  />
                  <span>
                    <b>{name}</b>
                    <small>{note}</small>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <h2 className="section-title mb-0">Featured watches</h2>
            <Link
              to="/watches"
              className="fw-semibold"
              style={{ color: "var(--brass-d)" }}
            >
              See all watches
            </Link>
          </div>
          <div className="row g-4">
            {WATCHES.slice(0, 4).map((w) => (
              <div className="col-sm-6 col-lg-3" key={w.id}>
                <Link
                  to={`/watches`}
                  className="text-decoration-none text-reset"
                >
                  <article className="watch-card">
                    <div className="watch-img">
                      <SmartImg
                        src={w.img}
                        alt={`${w.brand} ${w.name}`}
                        loading="lazy"
                      />
                      <span className="tag">{w.category}</span>
                    </div>
                    <div className="watch-body">
                      <p className="brand">{w.brand}</p>
                      <h3 className="name">{w.name}</h3>
                      <span className="price">${w.price.toLocaleString()}</span>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="customize"
        className="section"
        style={{ background: "#dfe6ed" }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Design your own watch</h2>
            <p className="muted">
              Pick a dial, strap and case. The preview and the price update as
              you choose.
            </p>
          </div>
          <Customizer />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title mb-4">What customers say</h2>
          <div className="row g-4">
            {REVIEWS.map(([q, who]) => (
              <div className="col-md-4" key={who}>
                <div className="quote">
                  <p>{q}</p>
                  <footer>Sample review, {who}</footer>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="cta-band">
            <h2 className="section-title text-white">Find your watch today</h2>
            <p className="mb-4">
              Browse the full collection or send us a question.
            </p>
            <Link to="/watches" className="btn btn-lg">
              Browse the collection
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
