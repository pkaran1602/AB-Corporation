import React, { useMemo, useState } from "react";
import styles from "./product.module.css";
import {
  allProducts,
  productCategories,
} from "../../components/products_data/Product_data";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") {
      return allProducts;
    }

    return allProducts.filter((item) => item.type === activeCategory);
  }, [activeCategory]);

  const handleCategoryClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActiveCategory(e.currentTarget.value);
  };

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-label="Products hero">
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.kicker}>AB Corporation Visual Archive</p>
          <h2>Recycling and Scrap Material Products</h2>
          <p>
            A modern showcase of plastic and metal categories. Replace these
            temporary internet images with your own photo anytime.
          </p>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.galleryHead}>
          <h3>Products</h3>
          <p>
            Collection view for Plastic Scrap, Stainless Steel Scrap, Aluminium
            Scrap, and Copper Scrap inventory.
          </p>
        </div>

        <div className={styles.filters} aria-label="Products categories">
          {productCategories.map((category) => (
            <button
              type="button"
              key={category}
              value={category}
              onClick={handleCategoryClick}
              className={`${styles.chip} ${
                activeCategory === category ? styles.active : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredProducts.map((item) => (
            <article key={item.id} className={styles.card}>
              <img src={item.image} alt={item.type} loading="lazy" />
              <div className={styles.cardInfo}>
                <p>{item.type}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Products;
