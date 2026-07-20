import ProjectDetails from "../../components/ProjectDetails";
import ae1 from "../../assets/images/ae1.png";
import ae2 from "../../assets/images/ae2.png";
import ae3 from "../../assets/images/ae3.png";
import ae4 from "../../assets/images/ae4.png";

const Aetlas = () => {
  return (
    <ProjectDetails
      type="WEB PLATFORM"
      title="Making Carbon Trading Accessible"
      description="Designed a transparent B2B marketplace that simplifies how companies discover, evaluate, and trade carbon credits."
      link=""
      role="UX/UI Designer, Front-End"
      platform="Web"
      scope="End-to-end product design  "
      problemText={[
        "Aetlas is a B2B platform where companies buy and sell carbon credits — a complex domain involving finance, sustainability, and verification systems.",
        "For businesses, carbon trading requires a high level of trust, clarity, and data transparency.",
        "The main challenges:",
      ]}
      problemList={[
        "complex and unfamiliar domain for many companies",
        "lack of trust and transparency in transactions",
        "difficulty evaluating and comparing carbon credit projects",
        "overwhelming flows for both buyers and sellers",
      ]}
      goal="Design a clear and trustworthy B2B experience that simplifies carbon trading, improves transparency, and supports confident decision-making."
      what={[
        "Designed end-to-end user flows for discovering, evaluating, and purchasing carbon credits",
        "Simplified complex financial and environmental data into structured, digestible interfaces",
        "Introduced trust signals such as verification details and project transparency",
        "Designed flows for both buyers and sellers",
        "Created scalable design system",
        "Implemented frontend for faster validation",
      ]}
      solution={[
        "The designed platform enables companies to efficiently navigate the carbon marketplace and make informed decisions.",
        "Complex data is presented in a structured and comparable format, allowing businesses to evaluate projects with confidence.",
        "The experience emphasizes clarity, transparency, and trust, making carbon trading more accessible and reliable for organizations.",
      ]}
      up_copy="Confidence in B2B transactions  "
      down_copy="Complexity of evaluating carbon credits  "
      learnings={[
        "Designing for B2B products requires a strong focus on clarity, structure, and decision-making support.",
        "Providing transparent data and reducing cognitive load helps businesses navigate complex domains and build trust in the product.",
      ]}
      image1={ae1}
      image2={ae2}
      image3={ae3}
      image4={ae4}
    />
  );
};

export default Aetlas;
