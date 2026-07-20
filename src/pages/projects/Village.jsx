import ProjectDetails from "../../components/ProjectDetails";
import vr1 from "../../assets/images/vr1.png";
import vr2 from "../../assets/images/vr2.png";
import vr3 from "../../assets/images/vr3.png";
import vr4 from "../../assets/images/vr4.png";

const Village = () => {
  return (
    <ProjectDetails
      type="WEB PLATFORM / WEB3"
      title="Creating a Digital Layer for Real-World Experiences "
      description="Designed a Web3-powered platform that enhances park visits through digital collectibles, gamification, and exclusive rewards."
      link=""
      role="UX/UI Designer"
      platform="Web"
      scope="End-to-end product design"
      problemText={[
        "The Village Key aimed to introduce a new digital layer to amusement park experiences, combining real-world visits with digital ownership and rewards.",
        "However, integrating Web3 concepts into a mass-market product created several challenges — most users were unfamiliar with digital collectibles, and the experience needed to feel simple, engaging, and accessible.",
        "The main challenges:",
      ]}
      problemList={[
        "introducing Web3 mechanics to non-technical users  ",
        "connecting physical park experiences with digital interactions  ",
        "creating engaging gamified flows that drive participation  ",
        "ensuring the experience adds value rather than complexity  ",
      ]}
      goal="Design an intuitive and engaging experience that enhances park visits, encourages participation, and creates a new revenue stream through digital collectibles and rewards."
      what={[
        "Researched user behavior and amusement park trends  ",
        "Designed the core product concept and user flows  ",
        "Created interfaces for purchasing and interacting with digital collectibles (Legend Cards)  ",
        "Designed gamified experiences such as ride-to-earn mechanics  ",
        "Built intuitive flows that connect physical and digital experiences  ",
        "Collaborated closely with developers during implementation  ",
        "Iterated on the product based on testing and feedback  ",
        "Designed marketing materials to support product launch and adoption  ",
      ]}
      solution={[
        "The platform introduces a seamless connection between real-world park visits and digital engagement.",
        "Users can collect digital items, participate in interactive experiences, and unlock rewards, all within a clear and accessible interface.",
        "Complex Web3 mechanics are abstracted into simple actions, allowing users to engage without needing prior technical knowledge.",
      ]}
      up_copy="Engagement during park visits  "
      down_copy="Barrier to understanding Web3 interactions  "
      learnings={[
        "Designing for emerging technologies requires simplifying complex concepts and focusing on user value.",
        "Bridging physical and digital experiences creates new opportunities for engagement, but requires careful design to ensure clarity and accessibility.",
      ]}
      image1={vr1}
      image2={vr2}
      image3={vr3}
      image4={vr4}
    />
  );
};

export default Village;
