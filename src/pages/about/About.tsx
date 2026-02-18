import React from "react";
import styles from "./about.module.css";

const whyUs = [
  "Superior quality products",
  "Ethical business policies",
  "Huge client base",
  "Excellent team of professionals",
];

const About = () => {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-label="About hero">
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>About AB Corporation</p>
          <h2>Company Profile</h2>
          <p>Delivering high-quality plastic and metal scrap with global standards.</p>
        </div>
      </section>

      <section className={styles.contentWrap}>
        <article className={styles.introBlock}>
          <div>
            <h3>Company Profile</h3>
            <p>
              We are among the most reputed Importer, exporters and suppliers of
              superior quality Plastic Scrap, Metal Scrap etc. These products are
              extensively used in making various home appliances, Industrial parts,
              office, air conditioning goods, packaging material, furniture parts and so
              on. To ensure the products quality, our quality controllers supervises each
              stage and assure that offered range is composed of plastics only.
              Moreover, our clarity in business dealings and simple payment options have
              led us to carve a niche in the world market.
            </p>
          </div>
          <div className={styles.sideImage} role="img" aria-label="Green globe placeholder" />
        </article>

        <article className={styles.textBlock}>
          <p>
            At A B Corporation we are recognized providers of full service plastic
            recycling, with capabilities to Supply all forms of plastic and Metal Scraps.
            We specialize in creating customized recycling programs for clients
            interested in maximized scrap value and environmental responsibility. We
            trading over 4.4 million pounds of material per month, utilizing best supply
            and prompt service. These systems utilize various processes to ensure the
            feedstock remain contamination free allowing us to maintain a reputation as
            a respected supplier of high quality pellets and regrinds for a broad range
            of end users.
          </p>
          <p>
            We offer a comprehensive selection of services including the large volume
            buying and selling of plastic, warehousing and storage, and transportation.
            Our operations meet and maintain the highest industry standards,
            implementing an exhaustive testing and inspections protocol to ensure
            quality. Turnaround times for custom recycling programs are 2 weeks.
          </p>
        </article>

        <article className={styles.textBlock}>
          <h4>Logistics Capabilities</h4>
          <p>
            At A B CORPORATION we offer our customers a wide range of value-added,
            effective logistics services, handling all aspects of management from point
            of origin to final destination including the storage, packing, tracking, and
            transportation of goods. We work with our customers to develop programs
            tailored to suit their business needs and goals, with program elements that
            are integrated seamlessly into existing operations. Available services
            include procurement, inventory control, receiving, sorting, warehousing,
            relabeling, repacking, tracking/notification, and transportation services.
          </p>
        </article>

        <article className={styles.textBlock}>
          <h4>Infrastructure</h4>
          <p>
            Our robust infrastructure enables us to carry out the whole business
            operations in an efficient way and deliver the consignments at patrons' end
            within the stipulated time period. We have segmented our entire premises
            into different units like quality checking, R&amp;D, warehouse and packaging.
            These units are interconnected Spacious Storage, Warehousing that are
            required in their smooth functioning. With the help of which, we have been
            able to Import bulk amount of products and meet clients' demands as per
            their given specifications promptly.
          </p>
        </article>

        <article className={styles.textBlock}>
          <h4>Quality Assurance</h4>
          <p>
            Since the time of our inception, we have been serving our clients' demands
            with the best quality Plastic &amp; Metal Scraps, Mixed Plastic Scrap,
            Plastic Raw Material,. Our products are well accepted in the market for their
            pure composition, excellent ductility and good chemical &amp; thermal
            properties. Moreover, our expert quality controllers stringently check the
            whole product range on different parameters to ensure their superior quality.
            All our products are scrutinized with the aid of prevailing testing
            instruments in a sophisticated lab.
          </p>
        </article>

        <article className={styles.whyUs}>
          <h3>Why Us?</h3>
          <ul>
            {whyUs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
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
      </section>

      <section className={styles.copyright}>
        <p>Copyrights 2008 ALL RIGHTS RESERVED BY AB CORPORATION</p>
        <p>Web Design, Marketing by Innovative Ecom</p>
      </section>
    </main>
  );
};

export default About;
