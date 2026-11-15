import { useEffect } from "react";
import { Link } from "react-router-dom";
import SmartImg from "./SmartImg.jsx";

/* Full-screen split view that opens when a watch is clicked */
export default function Spotlight({ watch, position, total, onClose, onStep }) {
  useEffect(() => {
    document.body.classList.add("no-scroll");
    const key = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    };
    window.addEventListener("keydown", key);
    return () => { document.body.classList.remove("no-scroll"); window.removeEventListener("keydown", key); };
  }, [onClose, onStep]);

  return (
    <div className="spot" role="dialog" aria-modal="true" aria-label="Watch details">
      <div className="spot-img"><span className="spot-word" aria-hidden="true">{watch.brand}</span><SmartImg src={watch.img} alt={`${watch.brand} ${watch.name}`} /></div>
      <div className="spot-info">
        <button className="spot-close" onClick={onClose} aria-label="Close details">Close ✕</button>
        <p className="brand">{watch.category} / {watch.brand}</p>
        <h2>{watch.name}</h2>
        <p className="muted">{watch.desc}</p>
        <dl className="specs">{Object.entries(watch.specs).map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
        <div className="spot-price">${watch.price.toLocaleString()}</div>
        <div className="mb-4"><Link to="/contact" className="btn btn-brass btn-lg">Ask about this watch</Link></div>
        <div className="spot-nav"><button onClick={() => onStep(-1)}>← Previous</button><span>{position + 1} / {total}</span><button onClick={() => onStep(1)}>Next →</button></div>
      </div>
    </div>
  );
}
