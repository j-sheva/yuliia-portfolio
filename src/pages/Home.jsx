import Header from "../components/Header";
import styles from "./Home.module.scss";
import Footer from "../components/Footer";
import Button from "../components/Button";
import WorkItem from "../components/WorkItem";
import quImage from "../assets/images/qu.png";
import aeImage from "../assets/images/ae.png";
import czImage from "../assets/images/cz.png";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const blockRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      },
    );

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return () => {
      if (blockRef.current) observer.unobserve(blockRef.current);
    };
  }, []);
  return (
    <div className={styles.home}>
      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.hero__banner}>
            <div className={`${styles.hero__layer} ${styles.hero__image}`}>
              <div className={styles.hero__content}>
                <h1 className={styles.hero__title}>
                  I design products people actually stick with
                </h1>
                <p className={styles.hero__text}>
                  UX/UI Designer with 4+ years of experience designing mobile
                  and web products, improving user flows, and reducing friction
                  in complex interfaces.
                </p>
                <Button text="View my work" to="/portfolio" />
              </div>
            </div>
          </div>
        </section>
        <section
          ref={blockRef}
          className={`${styles.block} ${isVisible ? styles.blockVisible : ""}`}
        >
          <p className={styles.block__text}>
            I design with <span className={styles.block__purple}>logic</span>,
            not just visuals — focusing on how users move through a product and
            <span className={styles.block__purple}> simplifying</span> complex
            interactions.
          </p>
        </section>
        <section className={styles.works}>
          <h2>Featured Work</h2>
          <div className={styles.works__list}>
            <WorkItem
              image={quImage}
              type="MOBILE APP REDESIGN"
              title="Turning Network Data into Simple Actions"
              description="Transformed a technically complex network-mapping product into an intuitive mobile experience. Redesigned the app to guide users from setup to contribution through clear steps and gamified engagement."
              up_copy="Engagement through daily tasks"
              down_copy="Time to start contributing "
              slug="qualoo"
            />
            <WorkItem
              image={aeImage}
              type="WEB PLATFORM"
              title="Making Carbon Trading Accessible"
              description="Designed a transparent B2B marketplace that simplifies how companies discover, evaluate, and trade carbon credits."
              up_copy="Confidence in B2B transactions"
              down_copy="Complexity of evaluating carbon credits   "
              slug="aetlas"
            />
            <WorkItem
              image={czImage}
              type="WEB PLATFORM / WEB3"
              title="Designing a Self-Sustaining Auction Platform"
              description="Built a secure and intuitive platform for high-value auctions and digital ownership, enabling seamless transactions and long-term autonomous operation."
              up_copy="Autonomous platform performance (2+ years)"
              down_copy="Friction in auction participation "
              slug="cz"
            />
          </div>
          <Button text="All works" to="/portfolio" />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
