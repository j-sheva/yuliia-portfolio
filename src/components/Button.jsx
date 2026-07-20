import PropTypes from "prop-types";
import styles from "./Button.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";

const Button = ({ text, to }) => {
  const navigate = useNavigate();
  const buttonRef = useRef(null);

  const handleClick = (event) => {
    event.preventDefault(); // не виконуємо дефолтну дію
    navigate(to); // переходимо за вказаною адресою
    window.scrollTo(0, 0); // прокрутка вгору
  };

  const handleMouseMove = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    buttonRef.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    buttonRef.current.style.transform = "translate(0, 0)";
  };

  return (
    <Link
      to={to}
      ref={buttonRef}
      className={`${styles.button} ${styles.hero__button}`}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span>{text}</span>
    </Link>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Button;
