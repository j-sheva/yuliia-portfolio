import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "./WorkItem.module.scss";
import up from "../assets/svg/up.svg";
import down from "../assets/svg/down.svg";
import right from "../assets/svg/right.svg";

const WorkItem = ({
  image,
  type,
  title,
  description,
  up_copy,
  down_copy,
  slug,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${slug}`);
    window.scrollTo(0, 0); // Скролить сторінку до початку після навігації
  };

  return (
    <div className={styles.works__item}>
      <div className={styles.works__left}>
        <div className={styles.works__top}>
          <p className={styles.works__type}>{type}</p>
          <h3 className={styles.works__title}>{title}</h3>
          <p className={styles.works__description}>{description}</p>
        </div>
        <div className={styles.works__bottom}>
          <div className={styles.works__arrows}>
            <div className={styles.works__up}>
              <img src={up} alt="arrow up" />

              <p className={styles.works__up_copy}>{up_copy}</p>
            </div>
            <div className={styles.works__down}>
              <img src={down} alt="arrow down" />

              <p className={styles.works__down_copy}>{down_copy}</p>
            </div>
          </div>
          <button onClick={handleClick}>
            View Case Study
            <img src={right} alt="arrow right" />
          </button>
        </div>
      </div>
      <img className={styles.works__img} src={image} alt={`${title} preview`} />
    </div>
  );
};

WorkItem.propTypes = {
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  up_copy: PropTypes.string.isRequired,
  down_copy: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default WorkItem;
