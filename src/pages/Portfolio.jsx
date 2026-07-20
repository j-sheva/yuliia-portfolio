// src/pages/Home.jsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import WorkItem from "../components/WorkItem";
import styles from "./Portfolio.module.scss";
import vrImage from "../assets/images/vr.png";
import carImage from "../assets/images/car.png";
import czImage from "../assets/images/cz.png";
import aiImage from "../assets/images/ai.png";
import vmImage from "../assets/images/vm.png";
import quImage from "../assets/images/qu.png";
import aeImage from "../assets/images/ae.png";
import mlImage from "../assets/images/ml.png";

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
            <WorkItem
              image={mlImage}
              type="WEB PLATFORM"
              title="Making Music Management Effortless"
              description="Simplified complex workflows into a seamless experience, enabling musicians to easily manage tracks and track performance."
              up_copy="Clarity of content management"
              down_copy="Steps to manage 
content "
              slug="major"
            />

            <WorkItem
              image={vmImage}
              type="MOBILE APP"
              title="Turning Presence into Connection"
              description="Designed a real-time social discovery experience that helps users connect with people nearby based on shared context and interests."
              up_copy="Engagement through 
Trust in connecting with nearby users  "
              down_copy="Barriers to real-time 
interaction   "
              slug="venue"
            />

            <WorkItem
              image={vrImage}
              type="WEB PLATFORM / WEB3"
              title="Creating a Digital Layer for Real-World Experiences"
              description="Designed a Web3-powered platform that enhances park visits through digital collectibles, gamification, and exclusive rewards."
              up_copy="Engagement during park visits  "
              down_copy="Barrier to understanding Web3 interactions  "
              slug="village"
            />

            <WorkItem
              image={carImage}
              type="MOBILE APP "
              title="Simplifying Car Control into One Tap"
              description="Designed a mobile app that centralizes vehicle monitoring, control, and navigation into a seamless and intuitive experience."
              up_copy="Clarity of vehicle data and controls  "
              down_copy="Time to access key
car functions  "
              slug="carkey"
            />

            <WorkItem
              image={aiImage}
              type="MOBILE APP / AI"
              title="Making AI Photo Generation Effortless"
              description="Designed a simple and intuitive mobile experience that allows users to generate and enhance profile photos using AI in just a few steps."
              up_copy="Ease of use in AI-powered features  "
              down_copy="Time to generate 
profile photos  "
              slug="photo"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
