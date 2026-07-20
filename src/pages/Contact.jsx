import { useEffect, useRef } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div>
      <Header />

      <main>
        <section className={`${styles.contact} ${styles.container}`}>
          <div className={styles.contact__left}>
            <h2 className={`${styles.title} ${styles.contact__title}`}>
              Contact
            </h2>
            <ul className={styles.contact__list}>
              <li className={styles.contact__item}>
                <a
                  href="https://www.linkedin.com/in/uliia-shevchenko/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li className={styles.contact__item}>
                <a
                  href="https://www.behance.net/yuliiashevche4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Behance
                </a>
              </li>
              <li className={styles.contact__item}>
                <a href="mailto:work.uliia@gmail.com">work.uliia@gmail.com</a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
