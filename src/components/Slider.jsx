import { useEffect, useState } from "react";

/* Reusable slider. Pass any array in `slides` and a `renderSlide(slide)` function.
   Props: interval (ms, 0 turns autoplay off), className, label (for screen readers).
   No sliding animation: slides switch instantly. */
export default function Slider({ slides, renderSlide, interval = 5000, className = "", label = "Slider" }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;
  const go = (n) => setIndex((n + count) % count);

  useEffect(() => {
    if (!interval || paused || count < 2) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearInterval(t);
  }, [interval, paused, count]);

  return (
    <section className={"slider " + className} aria-roledescription="carousel" aria-label={label}
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div className="container slider-inner">
        {count > 1 && <button className="slider-btn" onClick={() => go(index - 1)} aria-label="Previous slide">‹</button>}
        <div className="slider-slide" aria-live="polite">{renderSlide(slides[index], index)}</div>
        {count > 1 && <button className="slider-btn" onClick={() => go(index + 1)} aria-label="Next slide">›</button>}
      </div>
      {count > 1 && (
        <div className="slider-dots">
          {slides.map((_, i) => <button key={i} className={i === index ? "on" : ""} onClick={() => go(i)} aria-label={`Go to slide ${i + 1}`} aria-current={i === index} />)}
        </div>
      )}
    </section>
  );
}
