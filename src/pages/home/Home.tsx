import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import Footer from "../../components/footer/Footer";

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
            Reliable procurement, sorting, and export workflows for large-scale
            buyers and processors.
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
        <div
          className={styles.welcomeImage}
          role="img"
          aria-label="Industrial gears placeholder"
        />
        <div className={styles.welcomeContent}>
          <h3>Welcome To AB Corporation</h3>
          <p>
            A B CORPORATION is a coveted organization, engaged in delivering a
            wide range of Plastic and Metal Scrap. Located in Ahmedabad, India,
            we are an importer, exporter, supplier and trader of Plastic Scrap,
            Metal Scrap, Plastic Raw Material, and other products.
          </p>
          <p>
            We assure that these products are made in compliance with
            international quality standards by diligent personnel. With the help
            of our expert quality analyst, we strictly test finished products
            and ensure their purity before the final delivery.
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
              <p>
                Tested and sourced as per international quality and compliance
                standards.
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* <Footer /> */}
    </main>
  );
};

export default Home;
