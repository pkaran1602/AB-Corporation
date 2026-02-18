import React, { useState } from "react";
import styles from "./gallery.module.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";
import img9 from "../../assets/img9.png";
import img10 from "../../assets/img10.png";
import img11 from "../../assets/img11.png";
import img12 from "../../assets/img12.png";
const categories = ["All", "Plastic Scrap", "Metal Scrap", "Raw Material"];

const galleryItems = [
  {
    title: "PET Bottle Scrap",
    type: "Plastic Scrap",
    image: img1,
  },
  {
    title: "Copper Wire Bundles",
    type: "Metal Scrap",
    image: img2,
  },
  {
    title: "Sorting Zone",
    type: "Plastic Scrap",
    image: img3,
  },
  {
    title: "Mixed Plastic Collection",
    type: "Plastic Scrap",
    image: img4,
  },
  {
    title: "HDPE / LDPE Granules",
    type: "Raw Material",
    image: img5,
  },
  {
    title: "Polymer Color Mix",
    type: "Raw Material",
    image: img6,
  },
  {
    title: "Baled Plastic Bundles",
    type: "Plastic Scrap",
    image: img7,
  },
  {
    title: "PP Raw Pellets",
    type: "Raw Material",
    image: img8,
  },
  {
    title: "Green Flakes Batch",
    type: "Raw Material",
    image: img9,
  },
  {
    title: "Aluminium Scrap Mix",
    type: "Metal Scrap",
    image: img10,
  },
  {
    title: "Steel Turnings",
    type: "Metal Scrap",
    image: img11,
  },
  {
    title: "Stainless Metal Batch",
    type: "Metal Scrap",
    image: img12,
  },
];

const Galley = () => {
  const [details, setDetails] = useState(galleryItems);
  const [activeCategory, setActiveCategory] = useState("All");
  // console.log(details)

  const my_btn = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    setActiveCategory(value);
    if (value === "All") {
      setDetails(galleryItems);
    } else {
      const filtered = galleryItems.filter((item) => item.type === value);
      setDetails(filtered);
    }
  };

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-label="Gallery hero">
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.kicker}>AB Corporation Visual Archive</p>
          <h2>Recycling and Scrap Material Gallery</h2>
          <p>
            A modern showcase of plastic and metal categories. Replace these
            temporary internet images with your own photos anytime.
          </p>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.galleryHead}>
          <h3>Gallery</h3>
          <p>
            Collection view for Plastic Scrap, Metal Scrap, and Raw Material
            inventory.
          </p>
        </div>

        <div className={styles.filters} aria-label="Gallery categories">
          {categories.map((category, index) => (
            <button
              type="button"
              key={category}
              value={category}
              onClick={my_btn}
              className={`${styles.chip} ${
                activeCategory === category ? styles.active : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {details.map((item) => (
            <article key={item.title} className={styles.card}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className={styles.cardInfo}>
                <p>{item.type}</p>
                <h4>{item.title}</h4>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Galley;
