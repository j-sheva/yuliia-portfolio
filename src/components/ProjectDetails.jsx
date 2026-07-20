import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./ProjectDetails.module.scss";
import up from "../assets/svg/up.svg";
import down from "../assets/svg/down.svg";

const ProjectDetails = ({
  type,
  title,
  description,
  link,
  role,
  platform,
  scope,
  problemText,
  problemList,
  goal,
  what,
  solution,
  up_copy,
  down_copy,
  learnings,
  image1,
  image2,
  image3,
  image4,
}) => {
  return (
    <div>
      <Header />
      <main className={styles.project}>
        <div className={styles.project__left}>
          {image1 && (
            <img
              className={styles.project__img}
              src={image1}
              alt={`${title} screenshot`}
            />
          )}
          {image2 && (
            <img
              className={styles.project__img}
              src={image2}
              alt={`${title} screenshot`}
            />
          )}
          {image3 && (
            <img
              className={styles.project__img}
              src={image3}
              alt={`${title} screenshot`}
            />
          )}
          {image4 && (
            <img
              className={styles.project__img}
              src={image4}
              alt={`${title} screenshot`}
            />
          )}
        </div>
        <div className={styles.project__right}>
          <div className={styles.project__top}>
            <p className={styles.project__type}>{type}</p>
            <h2 className={styles.project__title}>{title}</h2>
            <p className={styles.project__description}>{description}</p>
          </div>
          {link && (
            <a target="_blank" rel="noopener noreferrer" href={link}>
              <div className={styles.project__button}>
                <p>Open in App Store</p>{" "}
              </div>
            </a>
          )}
          <div className={styles.project__items}>
            <div className={styles.project__item}>
              <p className={styles.project__type}>ROLE</p>
              <p className={styles.project__description}>{role}</p>
            </div>
            <div className={styles.project__item}>
              <p className={styles.project__type}>Platform</p>
              <p className={styles.project__description}>{platform}</p>
            </div>
            <div className={styles.project__item}>
              <p className={styles.project__type}>Scope</p>
              <p className={styles.project__description}>{scope}</p>
            </div>
          </div>

          <div className={styles.project__bottom_item}>
            <h3 className={styles.project__subtitle}>Problem</h3>

            <div className={styles.project__problem}>
              {problemText.map((text, index) => (
                <p key={index} className={styles.project__description}>
                  {text}
                </p>
              ))}

              <ul className={styles.project__list}>
                {problemList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.project__bottom_item}>
            <h3 className={styles.project__subtitle}>Goal</h3>
            <p className={styles.project__description}>{goal}</p>
          </div>
          <div className={styles.project__bottom_item}>
            <h3 className={styles.project__subtitle}>What I Did</h3>
            <ul className={styles.project__list}>
              {what.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.project__bottom_item}>
            <h3 className={styles.project__subtitle}>Solution</h3>

            <div className={styles.project__problem}>
              {solution.map((text, index) => (
                <p key={index} className={styles.project__description}>
                  {text}
                </p>
              ))}
            </div>
          </div>
          <div className={styles.project__bottom_item}>
            <h3 className={styles.project__subtitle}>Impact</h3>
            <div className={styles.project__arrows}>
              <div className={styles.project__up}>
                <img
                  className={styles.project__arrows_img}
                  src={up}
                  alt="arrow up"
                />

                <p className={styles.project__up_copy}>{up_copy}</p>
              </div>
              <div className={styles.project__down}>
                <img
                  className={styles.project__arrows_img}
                  src={down}
                  alt="arrow down"
                />

                <p className={styles.project__down_copy}>{down_copy}</p>
              </div>
            </div>
          </div>
          <div className={styles.project__bottom_item}>
            <h3 className={styles.project__subtitle}>Learnings</h3>

            <div className={styles.project__problem}>
              {learnings.map((text, index) => (
                <p key={index} className={styles.project__description}>
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

ProjectDetails.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
  scope: PropTypes.string.isRequired,
  problemText: PropTypes.string.isRequired,
  problemList: PropTypes.string.isRequired,
  goal: PropTypes.string.isRequired,
  what: PropTypes.string.isRequired,
  solution: PropTypes.string.isRequired,
  up_copy: PropTypes.string.isRequired,
  down_copy: PropTypes.string.isRequired,
  learnings: PropTypes.string.isRequired,
  link: PropTypes.string,
  image1: PropTypes.string,
  image2: PropTypes.string,
  image3: PropTypes.string,
  image4: PropTypes.string,
};

export default ProjectDetails;
