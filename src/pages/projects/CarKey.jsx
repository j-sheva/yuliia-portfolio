import ProjectDetails from "../../components/ProjectDetails";
import car1 from "../../assets/images/car1.png";
import car2 from "../../assets/images/car2.png";
import car3 from "../../assets/images/car3.png";

const CarKey = () => {
  return (
    <ProjectDetails
      type="MOBILE APP"
      title="Simplifying Car Control into One Tap "
      description="Designed a mobile app that centralizes vehicle monitoring, control, and navigation into a seamless and intuitive experience."
      link=""
      role="UX/UI Designer"
      platform="iOS"
      scope="End-to-end product design "
      problemText={[
        "Car Connect is a mobile app that allows users to monitor and control their vehicle remotely.",
        "However, combining multiple features — such as vehicle status tracking, navigation, and remote control — can easily lead to overloaded interfaces and poor usability.",
        "The main challenges:",
      ]}
      problemList={[
        "combining multiple features without overwhelming the user  ",
        "ensuring fast access to critical actions (lock/unlock, status)  ",
        "presenting technical car data in a clear and understandable way  ",
        "maintaining consistency across different devices and car brands  ",
      ]}
      goal="Design a clean and intuitive experience that gives users quick access to essential car functions while simplifying complex data and interactions."
      what={[
        "Designed end-to-end user flows for monitoring, navigation, and remote control  ",
        "Created a dashboard with clear prioritization of key vehicle data  ",
        "Simplified technical information into visual and easy-to-scan UI elements  ",
        "Designed fast-access interactions for critical actions like lock/unlock  ",
        "Integrated map-based features for navigation and nearby services  ",
        "Ensured responsive design across devices and screen sizes  ",
        "Iterated based on usability testing and user feedback  ",
      ]}
      solution={[
        "The app provides a centralized dashboard where users can quickly access essential vehicle information and controls.",
        "Complex data is translated into clear visual indicators, while key actions are доступні in just a few taps.",
        "The experience balances functionality with simplicity, allowing users to interact with their vehicle efficiently and confidently.",
      ]}
      up_copy="Clarity of vehicle data and controls  "
      down_copy="Time to access key car functions  "
      learnings={[
        "Designing feature-rich products requires strong prioritization and information hierarchy.",
        "Focusing on quick access and clarity helps users efficiently interact with complex systems in everyday scenarios.",
      ]}
      image1={car1}
      image2={car2}
      image3={car3}
    />
  );
};

export default CarKey;
