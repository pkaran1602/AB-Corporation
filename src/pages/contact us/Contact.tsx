import React from "react";
import styles from "./contact.module.css";

type Office = {
  country: string;
  code: string;
  company: string;
  lines: string[];
};

const offices: Office[] = [
  {
    country: "India",
    code: "IND",
    company: "AB CORPORATIONS",
    lines: [
      "F/10,Ambica Estate,",
      "Rakanpur,Ta.Kalol,",
      "Dist: Gandhinagar,Gujarat( India)",
      "Cell : +91-9824039293",
    ],
  },
  {
    country: "USA",
    code: "USA",
    company: "A B C INTERNATIONAL INC",
    lines: [
      "950 Milwaukee Avenue",
      "Suite # 212",
      "Glenview IL 60025",
      "USA",
      "Contact No +1-224-409-5664",
      "Email: usa@abcorporations.in",
    ],
  },
  {
    country: "Canada",
    code: "CAN",
    company: "DM Overseas Inc",
    lines: [
      "104-35 Jansusie Road",
      "Toronto ON M9W 4V4",
      "Email: dmoverseasinc@gmail.com",
    ],
  },
];

const quickInfo = [
  {
    label: "Phone no:",
    value: "+91-9824039293",
  },
  {
    label: "E-mail:",
    value: "info@abcorporations.in",
  },
  {
    label: "Website:",
    value: "www.abcorporations.in",
  },
  {
    label: "Contact Person:",
    value: "Mr. Ketul Patel- +91-9824039293",
  },
];

const Contact = () => {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-label="Contact hero">
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p>AB Corporation</p>
          <h1>Contact Us</h1>
          <span>Global support across India, USA, and Canada.</span>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.headline}>
          <h2>Our Offices</h2>
          <p>
            Reach our regional teams directly for business, logistics, and
            supply inquiries.
          </p>
        </div>

        <div className={styles.layout}>
          <div className={styles.offices}>
            {offices.map((office) => (
              <article className={styles.officeCard} key={office.country}>
                <div className={styles.officeHead}>
                  <div className={styles.marker} aria-hidden="true">
                    <span />
                  </div>
                  <p className={styles.flag}>{office.code}</p>
                  <h3>{office.country}</h3>
                </div>

                <p className={styles.company}>{office.company}</p>
                <div className={styles.address}>
                  {office.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <aside className={styles.quickInfo}>
            <h3>Direct Information</h3>
            <div className={styles.infoList}>
              {quickInfo.map((item) => (
                <article key={item.label} className={styles.infoCard}>
                  <p>{item.label}</p>
                  <span>{item.value}</span>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Contact;
