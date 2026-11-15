
import { useState } from "react";
import { Link } from "react-router-dom";
import { SITE } from "../data/site.js";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    setMessage(
      "Thanks for your interest! Newsletter integration is coming soon."
    );
    setEmail("");
  };

  return (
    <footer className="site-footer">

      <div className="container">

        {/* Newsletter section */}
        <div className="footer-newsletter">
          <div>
            <span className="footer-eyebrow">STAY IN THE LOOP</span>
            <h2>Good things take time. Stay ahead of it.</h2>
            <p>
              Subscribe to discover new collections, exclusive offers
              and the latest from {SITE.brand}.
            </p>
          </div>

          <div className="newsletter-form">
            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />
              <button type="submit">Subscribe →</button>
            </form>

            <small>
              No spam. Just timeless updates.
            </small>

            {message && (
              <p className="newsletter-message" role="status">
                {message}
              </p>
            )}
          </div>
        </div>

        <hr />

        {/* Main footer */}
        <div className="row g-4 footer-main">

          {/* Brand */}
          <div className="col-lg-4 col-md-6">
            <h2 className="footer-brand">{SITE.brand}</h2>

            <p className="footer-description">
              {SITE.tagline}
            </p>

            <p className="footer-description">
              Discover watches that reflect your personality.
              Your time, your style, your story.
            </p>

            <div className="social">
              {SITE.social.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                >
                  <i className={"bi " + s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="col-6 col-lg-2 col-md-3">
            <h4>Explore</h4>

            {SITE.nav
              .filter((n) => !n.hash)
              .slice(0, 4)
              .map((n) => (
                <Link key={n.label} to={n.to}>
                  {n.label}
                </Link>
              ))}
          </div>

          {/* Customer care */}
          <div className="col-6 col-lg-2 col-md-3">
            <h4>Customer Care</h4>

            <Link to="/contact">Contact us</Link>
            <Link to="/about">About us</Link>

            <a href="mailto:hello@tempus.com">
              Email support
            </a>

            <Link to="/watches">Find your watch</Link>
          </div>

          {/* Features */}
          <div className="col-lg-4 col-md-6">
            <h4>Why Tempus?</h4>

            <div className="footer-feature">
              <i className="bi bi-shield-check" />
              <span>
                <b>2-Year Warranty</b>
                <small>Warranty coverage on eligible watches</small>
              </span>
            </div>

            <div className="footer-feature">
              <i className="bi bi-watch" />
              <span>
                <b>Personalized Style</b>
                <small>Design a watch that feels like yours</small>
              </span>
            </div>

            <div className="footer-feature">
              <i className="bi bi-stars" />
              <span>
                <b>Curated Collections</b>
                <small>Explore watches for every occasion</small>
              </span>
            </div>
          </div>

        </div>

        <hr />

        {/* Bottom footer */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {SITE.brand}.
            All rights reserved.
          </p>

          <p>
            Designed with care. Made for your time.
          </p>

          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Built by Developer ↗
          </a>
        </div>

      </div>
    </footer>
  );
}
