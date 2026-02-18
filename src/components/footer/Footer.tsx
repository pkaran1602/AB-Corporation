import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div>
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
          Plastic Recycling Trading | Plastic Scrap | Metal Scrap | Aluminium
          Scrap | Copper Scrap | Stainless Steel Scrap | Plastic Scrap In India
          | PVC Scrap | Engineering Plastic Scrap | HDPE Scrap | LDPE Scrap
        </p>
      </section>
        <section className={styles.copyright}>
        <p>Copyrights 2008 ALL RIGHTS RESERVED BY AB CORPORATION</p>
        <p>Web Design, Marketing by Karan Patel</p>
      </section>
    </div>
  );
};

export default Footer;
