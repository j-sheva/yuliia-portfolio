import Header from "../components/Header";
import Footer from "../components/Footer";
import collage from "../assets/images/yuliia.png";
import fig from "../assets/svg/fig.svg";
import vs from "../assets/svg/vs.svg";
import pho from "../assets/svg/pho.svg";
import lot from "../assets/svg/lot.svg";
import ill from "../assets/svg/ill.svg";
import gpt from "../assets/svg/gpt.svg";
import gem from "../assets/svg/gem.svg";
import free from "../assets/svg/free.svg";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div>
      <Header />
      <main>
        <section className={styles.about}>
          <h2>About</h2>
          <div className={styles.about__block}>
            <img
              className={styles.about__left}
              src={collage}
              alt="Yuliia Shevchenko"
            />
            <div className={styles.about__right}>
              <h3>Yuliia Shevchenko</h3>
              <div className={styles.about__bottom}>
                <div className={styles.about__copy_item}>
                  <p className={styles.about__subtitle}>01 The Approach</p>
                  <div className={styles.about__copy}>
                    <p className={styles.about__text}>
                      I design mobile and web products for complex domains — AI
                      tools, Web3 platforms, B2B marketplaces, SaaS. My focus is
                      always the same: take something technically dense and make
                      it feel obvious to the person using it. I work end-to-end,
                      from research to developer handoff, with a strong eye for
                      systems and scalability.
                    </p>
                  </div>
                </div>
                <div className={styles.about__copy_item}>
                  <p className={styles.about__subtitle}>02 Beyond design</p>
                  <div className={styles.about__copy}>
                    <p className={styles.about__text}>
                      Outside of work I customize and design clothing, and I've
                      traveled to 36 countries — which continues to shape how I
                      think about people, behavior, and design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.path}>
          <h3>PATH</h3>
          <div className={styles.path__list}>
            <div className={styles.path__item}>
              <p className={styles.path__year}>2025 – 2026 </p>
              <div className={styles.path__copy}>
                <p className={styles.path__title}>
                  UX/UI Designer — Cobalt Creative Agency
                </p>
                <p className={styles.about__text}>
                  Designing e-commerce websites for consumer brands — food,
                  fashion, pharma. Focus on distinctive UI, motion design, and
                  brand identity that converts.
                </p>
              </div>
            </div>
            <div className={styles.path__item}>
              <p className={styles.path__year}>2024 – 2025 </p>
              <div className={styles.path__copy}>
                <p className={styles.path__title}>
                  UX/UI Designer — Evadav Traffic Group
                </p>
                <p className={styles.about__text}>
                  Redesigned mobile app interfaces (iOS & Android) to improve
                  conversion across onboarding flows and paywalls. Built
                  scalable design systems across multiple products.
                </p>
              </div>
            </div>
            <div className={styles.path__item}>
              <p className={styles.path__year}>2024 </p>
              <div className={styles.path__copy}>
                <p className={styles.path__title}>
                  UX designer / Front-End — Startups
                </p>
                <p className={styles.about__text}>
                  Designed and built interfaces for three early-stage products:
                  a carbon credit B2B marketplace, a network diagnostics app
                  redesign, and a health company website (React + Strapi).
                </p>
              </div>
            </div>
            <div className={styles.path__item}>
              <p className={styles.path__year}>2022 – 2024 </p>
              <div className={styles.path__copy}>
                <p className={styles.path__title}>UX Designer — BlockTrust</p>
                <p className={styles.about__text}>
                  Designed Web3 platforms for global brands — auction
                  marketplace, amusement park gamification, blockchain
                  dashboards. Built design systems and shipped products used
                  across US and European markets.
                </p>
              </div>
            </div>
            <div className={styles.path__item}>
              <p className={styles.path__year}>2021 – 2022 </p>
              <div className={styles.path__copy}>
                <p className={styles.path__title}>
                  UX/UI Designer — SupportYourApp
                </p>
                <p className={styles.about__text}>
                  Designed internal web tools and brand identity materials for a
                  large customer support company.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.path}>
          <h3>Toolkit</h3>
          <div className={styles.toolkit}>
            <div className={styles.toolkit__item}>
              <img src={fig} alt="Figma icon" />
              <div className={styles.toolkit__copy}>
                <p className={styles.path__year}>Figma</p>
                <p className={styles.about__text}>Design</p>
              </div>
            </div>
            <div className={styles.toolkit__item}>
              <img src={free} alt="Freepik icon" />
              <div className={styles.toolkit__copy}>
                <p className={styles.path__year}>Freepik AI</p>
                <p className={styles.about__text}>Images</p>
              </div>
            </div>{" "}
            <div className={styles.toolkit__item}>
              <img src={gpt} alt="Chat GPT icon" />
              <div className={styles.toolkit__copy}>
                <p className={styles.path__year}>Chat GPT</p>
                <p className={styles.about__text}>General</p>
              </div>
            </div>{" "}
            <div className={styles.toolkit__item}>
              <img src={gem} alt="Gemini icon" />
              <div className={styles.toolkit__copy}>
                <p className={styles.path__year}>Gemini</p>
                <p className={styles.about__text}>General</p>
              </div>
            </div>
            <div className={styles.toolkit__item}>
              <img src={ill} alt="Illustrator icon" />
              <div className={styles.toolkit__copy}>
                <p className={styles.path__year}>Illustrator</p>
                <p className={styles.about__text}>Vectors</p>
              </div>
            </div>
            <div className={styles.toolkit__item}>
              <img src={pho} alt="Photoshop icon" />
              <div className={styles.toolkit__copy}>
                <p className={styles.path__year}>Photoshop</p>
                <p className={styles.about__text}>Photo editing</p>
              </div>
            </div>
            <div className={styles.toolkit__item}>
              <img src={lot} alt="Lottie Files icon" />
              <div className={styles.toolkit__copy}>
                <p className={styles.path__year}>Lottie Files</p>
                <p className={styles.about__text}>Animations</p>
              </div>
            </div>
            <div className={styles.toolkit__item}>
              <img src={vs} alt="Figma icon" />
              <div className={styles.toolkit__copy}>
                <p className={styles.path__year}>VS Code</p>
                <p className={styles.about__text}>Coding</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
