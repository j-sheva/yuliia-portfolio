import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../assets/svg/Shevchenko.svg";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Блокування прокрутки при відкритому меню
    } else {
      document.body.style.overflow = "visible"; // Відновлення прокрутки
    }

    // Очищення ефекту при розмонтовуванні компоненту
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
    setIsOpen(false); // Закриває меню після навігації
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__left}>
          <Link to="/">
            {" "}
            <img className={styles.header__logo} src={logo} alt="logo" />
          </Link>
        </div>
        <nav className={`${styles.header__nav} ${isOpen ? styles.open : ""}`}>
          <ul className={styles.header__list}>
            <li
              className={styles.header__item}
              onClick={() => handleNavigation("/Portfolio")}
            >
              <Link to="/Portfolio">Work</Link>
            </li>
            <li
              className={styles.header__item}
              onClick={() => handleNavigation("/About")}
            >
              <Link to="/About">About</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.header__burger} onClick={toggleMenu}>
          <span
            className={`${styles.header__burger__item} ${
              isOpen ? styles.change1 : ""
            }`}
          ></span>
          <span
            className={`${styles.header__burger__item} ${
              isOpen ? styles.change2 : ""
            }`}
          ></span>
          <span
            className={`${styles.header__burger__item} ${
              isOpen ? styles.change3 : ""
            }`}
          ></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
