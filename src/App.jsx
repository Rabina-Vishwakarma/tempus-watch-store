import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollTopButton from "./components/ScrollTopButton.jsx";
import Home from "./pages/Home.jsx";
import Watches from "./pages/Watches.jsx";
import UnderDevelopment from "./pages/UnderDevelopment.jsx";

/* Scrolls to #hash targets, or to the top on a new page */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watches" element={<Watches />} />
        <Route path="/about" element={<UnderDevelopment title="About" />} />
        <Route path="/blog" element={<UnderDevelopment title="Blog" />} />
        <Route path="/contact" element={<UnderDevelopment title="Contact" />} />
        <Route path="*" element={<UnderDevelopment title="Page not found" />} />
      </Routes>
      <Footer />
      <ScrollTopButton />
    </>
  );
}
