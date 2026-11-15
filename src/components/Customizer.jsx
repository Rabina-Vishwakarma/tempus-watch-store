import { useState } from "react";
import { Link } from "react-router-dom";

const DIALS = [
  { n: "Midnight", c: "#1B3347", i: "#F6F8FA" },
  { n: "Ivory", c: "#F3EEE2", i: "#1B3347" },
  { n: "Forest", c: "#1F4D3A", i: "#F6F8FA" },
  { n: "Burgundy", c: "#5A1A2B", i: "#F6F8FA" },
];
const STRAPS = [
  { n: "Black leather", c: "#1c1c1c", p: 0 },
  { n: "Tan leather", c: "#A9713B", p: 0 },
  { n: "Storm blue rubber", c: "#2B4A63", p: 20 },
  { n: "Steel bracelet", c: "#B9C0C8", p: 120 },
];
const CASES = [
  { n: "Steel", c: "#C9CED4", p: 0 },
  { n: "Gold", c: "#C9A24D", p: 300 },
  { n: "Rose gold", c: "#C98B78", p: 300 },
];

function Options({ title, items, value, onPick }) {
  return (
    <>
      <h4>
        {title}: <span className="picked">{items[value].n}</span>
      </h4>
      <div className="swatches">
        {items.map((o, i) => (
          <button
            key={o.n}
            className={"sw" + (value === i ? " on" : "")}
            style={{ background: o.c }}
            aria-label={o.n}
            onClick={() => onPick(i)}
          />
        ))}
      </div>
    </>
  );
}

export default function Customizer() {
  const [dial, setDial] = useState(0),
    [strap, setStrap] = useState(0),
    [cas, setCas] = useState(0);
  const d = DIALS[dial],
    s = STRAPS[strap],
    c = CASES[cas];
  const price = 450 + s.p + c.p;
  return (
    <div className="studio">
      <div className="row gy-4 gx-lg-5 align-items-center">
        <div className="col-lg-6">
          <div className="studio-stage">
            <svg
              viewBox="0 0 240 320"
              role="img"
              aria-label="Your custom watch preview"
            >
              <rect x="88" y="0" width="64" height="105" rx="10" fill={s.c} />
              <rect x="88" y="215" width="64" height="105" rx="10" fill={s.c} />
              <circle cx="120" cy="160" r="78" fill={c.c} />
              <circle cx="120" cy="160" r="68" fill="rgba(0,0,0,.18)" />
              <circle cx="120" cy="160" r="62" fill={d.c} />
              {Array.from({ length: 12 }, (_, i) => {
                const a = (i * Math.PI) / 6;
                return (
                  <line
                    key={i}
                    x1={120 + 50 * Math.sin(a)}
                    y1={160 - 50 * Math.cos(a)}
                    x2={120 + 56 * Math.sin(a)}
                    y2={160 - 56 * Math.cos(a)}
                    stroke={d.i}
                    strokeWidth="2.5"
                  />
                );
              })}
              <line
                x1="120"
                y1="160"
                x2="120"
                y2="122"
                stroke={d.i}
                strokeWidth="4"
                strokeLinecap="round"
                transform="rotate(-60 120 160)"
              />
              <line
                x1="120"
                y1="160"
                x2="120"
                y2="108"
                stroke={d.i}
                strokeWidth="3"
                strokeLinecap="round"
                transform="rotate(60 120 160)"
              />
              <circle cx="120" cy="160" r="4" fill="#35708F" />
              <rect x="196" y="154" width="12" height="12" rx="3" fill={c.c} />
            </svg>
          </div>
        </div>
        <div className="col-lg-6">
          <Options title="Dial" items={DIALS} value={dial} onPick={setDial} />
          <Options
            title="Strap"
            items={STRAPS}
            value={strap}
            onPick={setStrap}
          />
          <Options title="Case" items={CASES} value={cas} onPick={setCas} />
          <div className="d-flex justify-content-between align-items-center border-top pt-4 mt-2">
            <div>
              <span className="muted">Your price</span>
              <div className="price fs-2">${price.toLocaleString()}</div>
            </div>
            <Link to="/contact" className="btn btn-brass btn-lg">
              Request this design
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
