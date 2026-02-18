import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";

const products = [
  "Plastic scrap",
  "Metal Scrap",
  "Plastic Raw Material",
  "Stainless Steel scrap",
  "Aluminium scrap",
  "Copper scrap",
];

const Home = () => {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-label="Hero banner">
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Global Recycling Supply Partner</p>
          <h2>Industrial Plastic and Metal Scrap Solutions</h2>
          <p>
            Reliable procurement, sorting, and export workflows for large-scale buyers
            and processors.
          </p>
        </div>
        <div className={styles.dots} aria-hidden="true">
          <span className={`${styles.dot} ${styles.dotActive}`} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
      </section>

      <section className={styles.welcome}>
        <div className={styles.welcomeImage} role="img" aria-label="Industrial gears placeholder" />
        <div className={styles.welcomeContent}>
          <h3>Welcome To AB Corporation</h3>
          <p>
            A B CORPORATION is a coveted organization, engaged in delivering a wide
            range of Plastic and Metal Scrap. Located in Ahmedabad, India, we are an
            importer, exporter, supplier and trader of Plastic Scrap, Metal Scrap,
            Plastic Raw Material, and other products.
          </p>
          <p>
            We assure that these products are made in compliance with international
            quality standards by diligent personnel. With the help of our expert quality
            analyst, we strictly test finished products and ensure their purity before
            the final delivery.
          </p>
          <Link to="/about" className={styles.readMore}>
            Read More...
          </Link>
        </div>
      </section>

      <section className={styles.productRange}>
        <div className={styles.rangeHead}>
          <h3>Quality Range of Products</h3>
        </div>
        <div className={styles.productGrid}>
          {products.map((product) => (
            <article key={product} className={styles.productCard}>
              <h4>{product}</h4>
              <p>Tested and sourced as per international quality and compliance standards.</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.contactBand}>
        <div className={styles.contactGrid}>
          <div>
            <h4>Contact Details</h4>
            <p>Mr. Ketul Patel</p>
            <p>Mobile: +91-9824039293</p>
            <p>Website: www.abcorporations.in</p>
          </div>
          <div>
            <h4>Head Office</h4>
            <p>AB CORPORATIONS</p>
            <p>F/10, Ambica Estate, Rakanpur, Ta. Kalol</p>
            <p>Dist: Gandhinagar, Gujarat (India)</p>
            <p>Email: info@abcorporations.in</p>
          </div>
          <div>
            <h4>USA Office</h4>
            <p>A B C INTERNATIONAL INC</p>
            <p>950 Milwaukee Avenue, Suite # 212</p>
            <p>Glenview IL 60025, USA</p>
            <p>Contact No : +1-224-409-5664</p>
            <p>Email : usa@abcorporations.in</p>
          </div>
          <div>
            <h4>Our Product</h4>
            <ul>
              <li>Plastic scrap</li>
              <li>Stainless Steel scrap</li>
              <li>Aluminium scrap</li>
              <li>Copper scrap</li>
            </ul>
          </div>
          <div>
            <h4>Usefull Links</h4>
            <ul>
              <li>Home</li>
              <li>About AB Corporation</li>
              <li>Gallery Area</li>
              <li>Download</li>
              <li>Contact us</li>
              <li>Sitemap</li>
            </ul>
          </div>
        </div>
        <p className={styles.footerLinks}>
          Plastic Recycling Trading | Plastic Scrap | Metal Scrap | Aluminium Scrap |
          Copper Scrap | Stainless Steel Scrap | Plastic Scrap In India | PVC Scrap |
          Engineering Plastic Scrap | HDPE Scrap | LDPE Scrap
        </p>
      </section>

      <section className={styles.copyright}>
        <p>Copyrights 2008 ALL RIGHTS RESERVED BY AB CORPORATION</p>
        <p>Web Design, Marketing by Karan Patel</p>
      </section>
    </main>
  );
};

export default Home;
