import ProjectDetails from "../../components/ProjectDetails";
import cz1 from "../../assets/images/cz1.png";
import cz2 from "../../assets/images/cz2.png";

const CZ = () => {
  return (
    <ProjectDetails
      type="WEB PLATFORM / WEB3"
      title="Designing a Scalable Auction Platform for Digital Ownership "
      description="Built a platform for high-value firearm auctions and digital ownership, enabling secure transactions and long-term autonomous operation."
      link=""
      role="UX/UI Designer"
      platform="Web"
      scope="End-to-end product design"
      problemText={[
        "Collector’s Hub is a platform for exclusive firearm auctions and digital ownership, designed for a niche audience of collectors and enthusiasts.",
        "The challenge was to create a secure and intuitive experience that supports complex flows such as auctions, ownership rights, and digital certificates — while maintaining a premium and trustworthy feel.",
        "The main challenges:",
      ]}
      problemList={[
        "designing complex auction and marketplace flows  ",
        "ensuring trust and security in high-value transactions  ",
        "communicating ownership through digital certificates (NFT logic)  ",
        "creating a premium experience aligned with brand identity  ",
      ]}
      goal="Design a scalable and reliable platform that enables users to participate in auctions, manage ownership, and interact with digital assets — while ensuring trust, clarity, and long-term usability."
      what={[
        "Designed end-to-end user flows for auctions, marketplace, and ownership management  ",
        "Created intuitive navigation for browsing, bidding, and purchasing  ",
        "Developed a premium visual style aligned with Colt CZ Group brand  ",
        "Simplified complex concepts like digital ownership and certificates  ",
        "Designed responsive interfaces across devices  ",
        "Collaborated on secure and user-friendly transaction flows  ",
      ]}
      solution={[
        "The platform provides a seamless experience for participating in auctions and managing digital ownership.",
        "Users can easily browse auctions, place bids, purchase rights, and access their digital certificates in a structured and intuitive interface.",
        "The design emphasizes clarity, trust, and exclusivity, aligning with the expectations of high-value collectors.",
      ]}
      up_copy="Fully autonomous platform performance (2+ years)  "
      down_copy="Operational complexity  "
      learnings={[
        "Designing for high-value and niche markets requires balancing complexity with trust and clarity.",
        "A well-structured system can operate effectively long-term, reducing the need for constant iteration while maintaining a strong user experience.",
      ]}
      image1={cz1}
      image2={cz2}
    />
  );
};

export default CZ;
