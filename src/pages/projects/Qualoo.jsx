import ProjectDetails from "../../components/ProjectDetails";
import qu1 from "../../assets/images/qu1.png";
import qu2 from "../../assets/images/qu2.png";
import qu3 from "../../assets/images/qu3.png";
import qu4 from "../../assets/images/qu4.png";

const Qualoo = () => {
  return (
    <ProjectDetails
      type="MOBILE APP REDESIGN"
      title="Turning Network Data into Simple Actions "
      description="Transformed a technically complex network-mapping product into an intuitive mobile experience. Redesigned the app to guide users from setup to contribution through clear steps and gamified engagement."
      role="UX/UI Designer"
      platform="iOS & Android  "
      scope="End-to-end product redesign "
      problemText={[
        "Qualoo is a technically complex product focused on network data analysis and mapping.",
        "However, for non-technical users, the value and functionality were difficult to understand.",
        "The existing experience lacked clarity:",
      ]}
      problemList={[
        "unclear entry point for new users",
        "complex flows for contributing data",
        "low transparency of how the product works and why it matters",
      ]}
      goal="Simplify the experience and make the product accessible to everyday users by creating clear flows, improving understanding, and increasing motivation to contribute."
      what={[
        "Redesigned the end-to-end user flow from onboarding to contribution",
        "Simplified complex technical features into clear, step-by-step interactions",
        "Introduced gamification elements (daily tasks, rewards, leaderboards) to drive engagement",
        "Structured the experience to clearly communicate product value",
        "Designed intuitive UI for both iOS and Android platforms",
      ]}
      solution={[
        "The redesigned experience guides users through a clear journey — from setup to active contribution.",
        "Complex concepts like network mapping and analytics were simplified into understandable actions, while gamification encourages consistent participation.",
      ]}
      up_copy="Engagement through daily tasks"
      down_copy="Time to start contributing "
      learnings={[
        "Designing for complex products requires not only simplifying interfaces, but also clearly communicating value.",
        "Breaking down technical processes into simple actions significantly improves user understanding and engagement.",
      ]}
      link="https://apps.apple.com/es/app/qualoo-internet-quality/id6744975488"
      image1={qu1}
      image2={qu2}
      image3={qu3}
      image4={qu4}
    />
  );
};

export default Qualoo;
