import ProjectDetails from "../../components/ProjectDetails";
import vm1 from "../../assets/images/vm1.png";
import vm2 from "../../assets/images/vm2.png";
import vm3 from "../../assets/images/vm3.png";
import vm4 from "../../assets/images/vm4.png";

const Venue = () => {
  return (
    <ProjectDetails
      type="MOBILE APP"
      title="Turning Presence into Connection "
      description="Designed a real-time social discovery experience that helps users connect with people nearby based on shared context and interests."
      link=""
      role="UX/UI Designer"
      platform="iOS & Android  "
      scope="End-to-end product design (concept for client project)  "
      problemText={[
        "See You There is a social discovery app designed to connect people in real-world environments.",
        "However, enabling real-time interactions between strangers introduces several challenges — users need to feel safe, understand context, and not feel overwhelmed by too many options.",
        "The main challenges:",
      ]}
      problemList={[
        "creating a low-pressure environment for interaction  ",
        "avoiding “dating app” perception and expectations  ",
        "balancing discovery with user privacy and safety  ",
        "preventing overload of nearby profiles and information  ",
      ]}
      goal="Design a seamless and comfortable experience that encourages organic connections, while maintaining clarity, safety, and ease of interaction."
      what={[
        "Designed end-to-end user flows for discovery, profiles, and interaction  ",
        "Simplified how users explore nearby people and shared interests  ",
        "Structured interactions to feel natural and low-pressure  ",
        "Introduced UI patterns that communicate safety and consent  ",
        "Balanced visibility of users with a clean and uncluttered interface  ",
        "Created a modern, inclusive visual style aligned with social context  ",
      ]}
      solution={[
        "The designed experience enables users to effortlessly discover people around them and initiate conversations in a natural way.",
        "The interface reduces friction by focusing on context — who is nearby, what they’re interested in, and how to connect.",
        "Design decisions emphasize comfort and trust, making interactions feel safe, casual, and spontaneous rather than forced.",
      ]}
      up_copy="Trust in connecting with nearby users  "
      down_copy="Barriers to real-time interaction  "
      learnings={[
        "Designing social products requires understanding not only user flows, but also human behavior and emotions.",
        "Reducing pressure and increasing clarity in interactions helps users feel more confident and improves overall engagement potential.",
      ]}
      image1={vm1}
      image2={vm2}
      image3={vm3}
      image4={vm4}
    />
  );
};

export default Venue;
