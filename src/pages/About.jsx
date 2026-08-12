import Header from "../components/Header";
import Footer from "../components/Footer";
import collage from "../assets/images/yuliia.webp";
import fig from "../assets/svg/fig.svg";
import vs from "../assets/svg/vs.svg";
import pho from "../assets/svg/pho.svg";
import lot from "../assets/svg/lot.svg";
import ill from "../assets/svg/ill.svg";
import gpt from "../assets/svg/gpt.svg";
import claude from "../assets/svg/claude.svg";
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
              <p className={styles.path__year}>2025 – 2026</p>
              <div className={styles.path__copy}>
                <p className={styles.path__title}>
                  UX/UI Designer — Cobalt Creative Agency
                </p>
                <ul className={styles.path__bullets}>
                  <li>
                    Redesigned product page structure for e-commerce brand
                    projects, reducing drop-off by 15% for one of the agency's
                    largest clients
                  </li>
                  <li>
                    Delivered Shopify-based designs and CRO audits, translating
                    business requirements into optimized, conversion-focused
                    user flows
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.path__item}>
              <p className={styles.path__year}>2024 – 2025</p>
              <div className={styles.path__copy}>
                <p className={styles.path__title}>
                  Product Designer, UX/UI — Evadav Traffic Group
                </p>
                <ul className={styles.path__bullets}>
                  <li>
                    Designed and launched a tournament/leaderboard feature for a
                    crypto-trading education app, increasing engagement by 25%
                  </li>
                  <li>
                    Redesigned and personalized onboarding for an AI-powered
                    plant-care app, reducing drop-off by 20%
                  </li>
                  <li>
                    Redesigned the paywall for a VPN app, increasing purchase
                    conversion by 18% based on A/B test results
                  </li>
                  <li>
                    Built a scalable design system adopted across multiple
                    mobile apps, reducing duplicated UI work and improving
                    design consistency
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.path__item}>
              <p className={styles.path__year}>2024</p>
              <div className={styles.path__copy}>
                <p className={styles.path__title}>
                  Product Designer (Contract)
                </p>
                <ul className={styles.path__bullets}>
                  <li>
                    Delivered design work across multiple concurrent client
                    engagements: EcoEquity (B2B carbon credit marketplace,
                    Web3), Vitura Health (website rebuild with React & Strapi
                    CMS), WinSoft (UX research and delivery), and Qualoo (mobile
                    network-diagnostics app)
                  </li>
                  <li>
                    Redesigned Qualoo's core flows, simplifying confusing
                    multi-step processes and introducing gamified elements,
                    increasing flow completion by 30%
                  </li>
                  <li>
                    Simplified complex transactional flows and data
                    visualizations (EcoEquity) into clear, accessible
                    experiences for technical and non-technical users
                  </li>
                  <li>
                    Built reusable design systems supporting multiple concurrent
                    client projects
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.path__item}>
              <p className={styles.path__year}>2022 – 2024</p>
              <div className={styles.path__copy}>
                <p className={styles.path__title}>UX Designer — BlockTrust</p>
                <ul className={styles.path__bullets}>
                  <li>
                    Designed Collector's Hub, an NFT auction platform that
                    continues to operate without major redesigns more than two
                    years after launch
                  </li>
                  <li>
                    Led end-to-end product design for Web3/blockchain products,
                    turning complex technical logic into accessible dashboards
                    and user flows
                  </li>
                  <li>
                    Built a design system with reusable components and
                    documented tokens, adopted across multiple Web3 products to
                    speed up delivery
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.path__item}>
              <p className={styles.path__year}>2021 – 2022</p>
              <div className={styles.path__copy}>
                <p className={styles.path__title}>
                  UX/UI Designer — SupportYourApp
                </p>
                <ul className={styles.path__bullets}>
                  <li>
                    Produced brand books and design guidelines, establishing
                    consistent visual standards used across internal teams
                  </li>
                  <li>
                    Designed email templates and internal communication assets
                    for company-wide use
                  </li>
                  <li>
                    Redesigned internal company websites, improving usability
                    and navigation consistency
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.path}>
          <h3>Toolkit</h3>
          <div className={styles.toolkit}>
            <div className={styles.toolkit__item}>
              <img src={fig} alt="Figma" />
              <div className={styles.toolkit__copy}>
                <p className={styles.path__year}>Figma</p>
                <p className={styles.about__text}>Design</p>
              </div>
            </div>
            <div className={styles.toolkit__item}>
              <img src={free} alt="Freepik AI" />
              <div className={styles.toolkit__copy}>
                <p className={styles.path__year}>Freepik AI</p>
                <p className={styles.about__text}>Vectors</p>
              </div>
            </div>
            <div className={styles.toolkit__item}>
              <img src={gpt} alt="Chat GPT" />
              <div className={styles.toolkit__copy}>
                <p className={styles.path__year}>Chat GPT</p>
                <p className={styles.about__text}>General</p>
              </div>
            </div>
            <div className={styles.toolkit__item}>
              <img src={claude} alt="Claude" />
              <div className={styles.toolkit__copy}>
                <p className={styles.path__year}>Claude</p>
                <p className={styles.about__text}>General</p>
              </div>
            </div>
            <div className={styles.toolkit__item}>
              <img src={ill} alt="Illustrator" />
              <div className={styles.toolkit__copy}>
                <p className={styles.path__year}>Illustrator</p>
                <p className={styles.about__text}>Vectors</p>
              </div>
            </div>
            <div className={styles.toolkit__item}>
              <img src={pho} alt="Photoshop" />
              <div className={styles.toolkit__copy}>
                <p className={styles.path__year}>Photoshop</p>
                <p className={styles.about__text}>Photo editing</p>
              </div>
            </div>
            <div className={styles.toolkit__item}>
              <img src={lot} alt="Lottie Files" />
              <div className={styles.toolkit__copy}>
                <p className={styles.path__year}>Lottie Files</p>
                <p className={styles.about__text}>Animations</p>
              </div>
            </div>
            <div className={styles.toolkit__item}>
              <img src={vs} alt="VS Code" />
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
