import ProjectDetails from "../../components/ProjectDetails";
import ai1 from "../../assets/images/ai1.png";
import ai2 from "../../assets/images/ai2.png";
import ai3 from "../../assets/images/ai3.png";
import ai4 from "../../assets/images/ai4.png";

const Photo = () => {
  return (
    <ProjectDetails
      type="MOBILE APP / AI"
      title="Making AI Photo Generation Effortless "
      description="Designed a simple and intuitive mobile experience that allows users to generate and enhance profile photos using AI in just a few steps."
      role="UX/UI Designer"
      platform="iOS "
      scope="End-to-end product design "
      problemText={[
        "AI Headshot Generator is a mobile app that allows users to create and enhance profile photos using artificial intelligence.",
        "However, AI-based tools can easily become complex and overwhelming, especially for users who expect fast and simple results.",
        "The main challenges:",
      ]}
      problemList={[
        "reducing complexity of AI-driven features  ",
        "guiding users through the generation process  ",
        "balancing automation with user control  ",
        "keeping the experience fast and effortless  ",
      ]}
      goal="Design a minimal and intuitive experience that makes AI photo generation accessible, fast, and easy to use."
      what={[
        "Designed end-to-end user flows for photo generation and editing  ",
        "Simplified the AI process into a few clear steps  ",
        "Applied familiar mobile patterns to reduce learning curve  ",
        "Structured editing tools to feel lightweight and optional  ",
        "Designed clear feedback and states during generation  ",
        "Focused on a clean and minimal interface  ",
      ]}
      solution={[
        "The app provides a streamlined experience where users can generate and enhance photos with minimal effort.",
        "AI complexity is abstracted into simple interactions, allowing users to achieve high-quality results without understanding the underlying technology.",
        "The interface focuses on clarity, speed, and ease of use, making the experience feel effortless.",
      ]}
      up_copy="Ease of use in AI-powered features  "
      down_copy="Time to generate profile photos  "
      learnings={[
        "When designing AI products, simplicity is key.",
        "Abstracting complex processes into clear and guided interactions helps users trust the system and achieve results quickly.",
      ]}
      link="https://apps.apple.com/ua/app/ai-headshot-generator-pro/id6450652729?l=uk"
      image1={ai1}
      image2={ai2}
      image3={ai3}
      image4={ai4}
    />
  );
};

export default Photo;
