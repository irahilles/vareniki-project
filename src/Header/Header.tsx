import { useState } from "react";
import styles from "./Header.module.css";

const sections = [
  { label: "About us", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "FAQ", href: "#faq" },
  { label: "Feedbacks", href: "#feedbacks" },
];
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#home" aria-label="IK home">
    <span className={styles.logoMark} aria-hidden="true">
  IK
  <svg className={styles.logoSprig} viewBox="0 0 40 40" fill="none">
    <path d="M5 34C17 28 22 18 25 4" />
    <path d="M20 15C13 14 11 10 11 7C17 7 21 10 20 15Z" />
    <path d="M23 10C24 4 29 2 33 3C31 8 28 11 23 10Z" />
    <path d="M17 21C11 19 8 22 7 26C13 27 16 25 17 21Z" />
    <path d="M21 17C27 15 31 17 33 20C28 23 24 22 21 17Z" />
  </svg>
</span>
      </a>

      <button
        className={styles.menuButton}
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="site-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

<nav
  id="site-menu"
  className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}
  aria-label="Main navigation"
>
  {sections.map((section) => (
    <a
      key={section.href}
      href={section.href}
      onClick={() => setMenuOpen(false)}
    >
      {section.label}
    </a>
  ))}

 <a
  className={styles.orderButton}
  href="https://wa.me/971544937763?text=Hi%2C%20I%20would%20like%20to%20place%20an%20order."
  target="_blank"
  rel="noreferrer"
  onClick={() => setMenuOpen(false)}
>
  Order Now
</a>
</nav>
    </header>
  );
}