import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

const links = [
  { to: "/home", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Our Products" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact Us" },
  { to: "/email", label: "Email Us" },
  { to: "/sitemap", label: "Sitemap" },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={styles.brandWrap}>
          <div className={styles.brandMark} aria-hidden="true">
            <span className={styles.markA}>A</span>
            <span className={styles.markB}>B</span>
            <span className={styles.markC}>C</span>
          </div>
          <div className={styles.brandText}>
            <h1>AB CORPORATION</h1>
            <p>Importer, Exporter, Supplier and Trader</p>
          </div>
        </div>
        <div className={styles.meta}>
          <button className={styles.language} type="button">
            Select Language
          </button>
          <a className={`${styles.infoLink} ${styles.phone}`} href="tel:+919824039293">
            +91-9824039293
          </a>
          <a className={`${styles.infoLink} ${styles.email}`} href="mailto:info@abcorporations.in">
            info@abcorporations.in
          </a>
        </div>
      </div>

      <nav className={styles.nav} aria-label="Primary navigation">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
