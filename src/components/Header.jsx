import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SITE } from "../data/site.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <nav className="navbar navbar-expand-lg fixed-top site-nav">
      <div className="container">
<Link to="/" className="navbar-brand">
  <img
    src={`${import.meta.env.BASE_URL}images/logo.png`}
    alt="Tempus - Premium Watches"
    className="brand-logo"
  />
</Link>        <button className="navbar-toggler" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}><span className="navbar-toggler-icon" /></button>
        <div className={"collapse navbar-collapse" + (open ? " show" : "")}>
          <ul className="navbar-nav ms-auto gap-lg-3 align-items-lg-center">
            {SITE.nav.map((n) => (
              <li className="nav-item" key={n.label}>
                {n.hash
                  ? <Link className="nav-link" to={n.to} onClick={close}>{n.label}</Link>
                  : <NavLink className="nav-link" to={n.to} end={n.end} onClick={close}>{n.label}</NavLink>}
              </li>
            ))}
            <li className="nav-item"><Link className="btn btn-brass btn-sm px-3" to="/watches" onClick={close}>Shop now</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
