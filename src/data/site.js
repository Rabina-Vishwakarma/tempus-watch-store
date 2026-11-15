/* Site-wide settings. Edit here once and every page updates. */
export const SITE = {
  brand: "Tempus",
  tagline: "Watches for every wrist, from everyday quartz to dress automatics.",
  github: "https://github.com/Rabina-Vishwakarma",
  /* Footer social links. GitHub is real; replace the others with your own profile or page URLs. */
  social: [
    { name: "GitHub", icon: "bi-github", url: "https://github.com/Rabina-Vishwakarma" },
    { name: "Instagram", icon: "bi-instagram", url: "https://www.instagram.com/" },
    { name: "X", icon: "bi-twitter-x", url: "https://x.com/" },
    { name: "LinkedIn", icon: "bi-linkedin", url: "https://www.linkedin.com/" },
    { name: "YouTube", icon: "bi-youtube", url: "https://www.youtube.com/" },
  ],
  nav: [
    { to: "/", label: "Home", end: true },
    { to: "/watches", label: "Watches" },
    { to: "/#customize", label: "Customize", hash: true },
    { to: "/about", label: "About" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ],
  /* Promo slides shown in the slider above the hero */
  promos: [
    { id: 1, text: "Free 2-year warranty on every watch", cta: "Shop now", to: "/watches" },
    { id: 2, text: "New: design your own dial, strap and case", cta: "Try the customizer", to: "/#customize" },
    { id: 3, text: "Smart watches from $229", cta: "See smart watches", to: "/watches?cat=Smart" },
  ],
  categories: [
    ["Luxury", "Gold and sapphire", "luxury.png"],
    ["Sport", "Built to move", "sport.png"],
    ["Dive", "Water resistant to 300 m", "dive.png"],
    ["Smart", "Health and alerts", "smart.png"],
    ["Dress", "Slim and formal", "dress.png"],
    ["Vintage", "Classic reissues", "vintage.png"],
  ],
};
