import { useCallback, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { WATCHES } from "../data/watches.js";
import WatchCard from "../components/WatchCard.jsx";
import Spotlight from "../components/Spotlight.jsx";

const CATEGORIES = ["All", ...new Set(WATCHES.map((w) => w.category))];

export default function Watches() {
  const [params, setParams] = useSearchParams();
  const active = params.get("cat") || "All";
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const [currentId, setCurrentId] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = WATCHES.filter(
      (w) =>
        (active === "All" || w.category === active) &&
        (!q || `${w.brand} ${w.name}`.toLowerCase().includes(q)),
    );
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [active, query, sort]);

  const pos = filtered.findIndex((w) => w.id === currentId);
  const close = useCallback(() => setCurrentId(null), []);
  const step = useCallback(
    (d) => {
      if (filtered.length)
        setCurrentId(
          filtered[(pos + d + filtered.length) % filtered.length].id,
        );
    },
    [filtered, pos],
  );

  return (
    <>
      <header className="page-head">
        <div className="container">
          <h1>The collection</h1>
          <p className="mb-0">
            Filter by category, search by name, or sort by price.
          </p>
        </div>
      </header>
      <main className="section">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-4">
            <p className="muted mb-0">
              {filtered.length} {filtered.length === 1 ? "watch" : "watches"}{" "}
              shown
            </p>
            <div className="d-flex gap-2">
              <input
                type="search"
                className="form-control"
                placeholder="Search by name or brand"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search watches"
              />
              <select
                className="form-select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                aria-label="Sort watches"
              >
                <option value="featured">Featured</option>
                <option value="low">Price: low to high</option>
                <option value="high">Price: high to low</option>
              </select>
            </div>
          </div>
          <div className="filters mb-4">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                className={"chip" + (active === c ? " active" : "")}
                onClick={() => setParams(c === "All" ? {} : { cat: c })}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="row g-4">
            {filtered.map((w) => (
              <div className="col-sm-6 col-lg-4 col-xl-3" key={w.id}>
                <WatchCard watch={w} onOpen={(x) => setCurrentId(x.id)} />
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="col-12">
                <p className="muted text-center py-5">
                  No watches match your search. Try another name or choose All.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      {pos >= 0 && (
        <Spotlight
          watch={filtered[pos]}
          position={pos}
          total={filtered.length}
          onClose={close}
          onStep={step}
        />
      )}
    </>
  );
}
