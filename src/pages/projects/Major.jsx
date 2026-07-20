import ProjectDetails from "../../components/ProjectDetails";
import ml1 from "../../assets/images/ml1.png";
import ml2 from "../../assets/images/ml2.png";
import ml3 from "../../assets/images/ml3.png";
import ml4 from "../../assets/images/ml4.png";

const Major = () => {
  return (
    <ProjectDetails
      type="WEB PLATFORM"
      title="Making Music Management Effortless"
      description="Simplified complex workflows into a seamless experience, enabling musicians to easily manage tracks and track performance."
      link=""
      role="UX/UI Designer"
      platform="Web"
      scope="End-to-end product design "
      problemText={[
        "MajorLabl is a platform for musicians to upload, manage, and monetize their music.",
        "However, the experience involved multiple complex steps — from uploading tracks to managing content and understanding performance — which created friction and reduced usability.",
        "The main challenges:",
      ]}
      problemList={[
        "unclear flow for publishing tracks  ",
        "difficulty navigating between key actions  ",
        "low visibility of performance and earnings  ",
        "lack of structure in content management  ",
      ]}
      goal="Simplify the product experience by reducing friction in core flows, improving clarity of actions, and giving users better control over their content and performance."
      what={[
        "Redesigned core user flows for uploading, managing, and tracking music  ",
        "Simplified content management into clear and structured interactions  ",
        "Improved navigation to provide quick access to key features  ",
        "Enhanced visibility of analytics and earnings  ",
        "Created a scalable UI system to support future product growth  ",
        "Implemented the frontend to ensure accurate execution and faster iteration ",
      ]}
      solution={[
        "The redesigned platform streamlines the entire user journey — from uploading tracks to analyzing performance.",
        "Complex workflows were reduced into simple, intuitive steps, while the interface provides clear feedback and easy access to essential actions.",
        "The result is a clean and efficient experience that allows musicians to focus on their content rather than the system.",
      ]}
      up_copy="Clarity of content management"
      down_copy="Steps to manage content"
      learnings={[
        "Working with content-heavy platforms requires balancing functionality with clarity.",
        "Simplifying workflows and improving system feedback helps users feel more in control, which directly impacts usability and overall product experience.",
      ]}
      image1={ml1}
      image2={ml2}
      image3={ml3}
      image4={ml4}
    />
  );
};

export default Major;
