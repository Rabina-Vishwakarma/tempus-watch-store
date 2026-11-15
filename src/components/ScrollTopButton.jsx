import { useEffect, useState } from "react";

/* Floating button that appears after scrolling down and jumps back to the top */
export default function ScrollTopButton() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button className="to-top" onClick={() => window.scrollTo(0, 0)} aria-label="Back to top">
      <i className="bi bi-arrow-up" />
    </button>
  );
}
