// src/components/Footer.jsx

import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import logo from "../assets/svg/Shevchenko.svg";
import pdf from "../../public/pdf/CV_Yuliia_Shevchenko.pdf";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to="/">
        {" "}
        <img className={styles.header__logo} src={logo} alt="logo" />
      </Link>
      <ul className={styles.footer__links}>
        <li className={styles.footer__link}>
          <a
            href="mailto:work.uliia@gmail.com?subject=Job opportunity&body=Hi Yuliia,"
            target="_blank"
            rel="noopener noreferrer"
          >
            work.uliia@gmail.com
          </a>
        </li>
        <li className={styles.footer__link}>
          <a
            href="https://www.linkedin.com/in/uliia-shevchenko/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className={styles.footer__link}>
          <a href={pdf} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </li>
      </ul>
      <p className={styles.footer__copy}>© Yuliia Shevchenko 2026</p>
    </footer>
  );
};

export default Footer;
