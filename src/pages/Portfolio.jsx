// src/pages/Home.jsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import WorkItem from "../components/WorkItem";
import styles from "./Portfolio.module.scss";
import czImage from "../assets/images/cz/cz.png";
import quImage from "../assets/images/qu/qu.png";
import aeImage from "../assets/images/ae/ae.png";
import mlImage from "../assets/images/ml/ml.png";

const Portfolio = () => {
  return (
    <div>
      <Header />
      <main>
        <section className={styles.works}>
          <h2>Work</h2>
          <div className={styles.works__list}>
            <WorkItem
              image={quImage}
              type="MOBILE APP REDESIGN"
              title="Turning Network Data into Simple Actions"
              description="Transformed a technically complex network-mapping product into an intuitive mobile experience. Redesigned the app to guide users from setup to contribution through clear steps and gamified engagement."
              up_copy="Engagement through daily tasks"
              down_copy="Time to start contributing "
              slug="qualoo"
            />
            <WorkItem
              image={aeImage}
              type="WEB PLATFORM"
              title="Making Carbon Trading Accessible"
              description="Designed a transparent B2B marketplace that simplifies how companies discover, evaluate, and trade carbon credits."
              up_copy="Confidence in B2B transactions"
              down_copy="Complexity of evaluating carbon credits   "
              slug="aetlas"
            />
            <WorkItem
              image={czImage}
              type="WEB PLATFORM / WEB3"
              title="Designing a Self-Sustaining Auction Platform"
              description="Built a secure and intuitive platform for high-value auctions and digital ownership, enabling seamless transactions and long-term autonomous operation."
              up_copy="Autonomous platform performance (2+ years)"
              down_copy="Friction in auction participation "
              slug="cz"
            />
            <WorkItem
              image={mlImage}
              type="WEB PLATFORM"
              title="Making Music Management Effortless"
              description="Simplified complex workflows into a seamless experience, enabling musicians to easily manage tracks and track performance."
              up_copy="Clarity of content management"
              down_copy="Steps to manage
content "
              slug="major"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
