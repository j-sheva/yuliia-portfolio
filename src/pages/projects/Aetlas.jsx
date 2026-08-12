import ProjectDetails from "../../components/ProjectDetails";
import coreSequence1 from "../../assets/images/ae/core-sequence-1.webp";
import coreSequence2 from "../../assets/images/ae/core-sequence-2.webp";
import bondIssuanceForm from "../../assets/images/ae/bond-issuance-form.webp";
import contractSigning from "../../assets/images/ae/contract-signing.webp";
import MVPScope from "../../assets/images/ae/MVP-scope.webp";
import finalDesign1 from "../../assets/images/ae/final-design-1.webp";
import finalDesign2 from "../../assets/images/ae/final-design-2.webp";
import finalDesign3 from "../../assets/images/ae/final-design-3.webp";
import finalDesign4 from "../../assets/images/ae/final-design-4.webp";
import finalDesign5 from "../../assets/images/ae/final-design-5.webp";
import finalDesign6 from "../../assets/images/ae/final-design-6.webp";
import ufImage from "../../assets/images/ae/user-flow.webp";

const Aetlas = () => {
  return (
    <ProjectDetails
      accentColor="#7FD4C1"
      eyebrow="Web3 / RWA · Fintech Platform"
      title="Designing the end-to-end product for a carbon-credit tokenization platform, across two very different users"
      lede="Translated a ten-step, escrow-based smart-contract agreement into two coherent, trustworthy interfaces — one for a climate-project developer raising structured financing, one for a corporate buyer committing capital against it."
      role="UX/UI Designer"
      platform="Web platform"
      team="Direct collaboration with the founding team"
      scope="End-to-end IA — two personas, registration to settlement"
      stats={[
        {
          num: "2",
          label: "full personas, each iterated through a 1.0 → 1.1 pass",
        },
        { num: "10", label: "smart-contract steps mapped into the interface" },
        { num: "4+", label: "months embedded with the founding team, weekly" },
        { num: "79", label: "documented rounds of stakeholder review" },
      ]}
      context={[
        "Aetlas Labs builds infrastructure to tokenize carbon credits — CDR (Carbon Dioxide Removal) certificates — into escrow-backed digital offtake agreements. Climate-project developers raise structured financing (a green bond collateralized by future carbon-credit revenue) against their project's output; corporate buyers commit to multi-year carbon purchases through a KYC-gated marketplace. I joined in December 2023, invited by CEO Harry Anderson to take the team's early MVP wireframes and shape them into a production-ready design system and information architecture, working directly with the founding team — including CTO Stefano Tempesta — through weekly standups and retros over the following months.",
      ]}
      problem={{
        heading:
          "Two audiences, one shared smart-contract system, and no room to hide the mechanics.",
        paragraphs: [
          "Project developers had to work through structured-finance vocabulary — coupon rate, DSCR, maturity date, payment frequency — while getting their project approved, listing CDR certificates, and structuring a bond issuance. Corporate buyers needed a simpler, trust-first commit-and-purchase path gated by KYC and whitelisting.",
          "Underneath both sat a ten-step, escrow-based agreement flow — registration, validation, listing, buyer commitment, revenue-pledging, escrow, certificate verification, fund release — that had to become legible as an interface without hiding the mechanics that made the product trustworthy to either side.",
        ],
      }}
      discovery={{
        heading:
          "Reverse-engineering trust requirements from a technical spec, not conducting user research.",
        paragraphs: [
          "Before drawing a single high-fidelity screen, I mapped full User Flow and Screen Flow diagrams for every persona the product would need — three of them, including a Liquidity Provider role. I recommended narrowing the MVP to the two personas that actually carried the core business model, deferring Liquidity Provider and a wider DeFi-style surface (pools, staking, earn) that would have diluted focus from the offtake/bond mechanic that made the product work.",
          'Where the specification was ambiguous, I treated it as something to resolve before it became an inconsistent screen later, not something to guess at — questioning why a listing needed a separate "offtake" framing at all, or whether project approval required a re-approval path. That discipline is what surfaced a real structural gap before it shipped: the commit-and-list sequence needed a full reorder once a project-approval gate entered the picture, covered in Key Decision 01.',
          'I also used real reference products the team pointed me to at kickoff — Ondo Protocol, Toucan Protocol, Senken, Klima Protocol — to calibrate how much of the underlying token/bond mechanics to expose directly versus abstract away, positioning the interface between "trusted financial instrument" and "crypto-native product" rather than defaulting to either extreme.',
        ],
      }}
      decisionImageLayout="web"
      decisions={[
        {
          number: "01 — Core sequence",
          title:
            "Treated a mid-project structural requirement as a navigation problem, not a form add-on.",
          description:
            "Once it became clear that project developers needed their project approved by Aetlas before listing anything, I re-sequenced the existing screens into a new navigation order rather than redesigning from scratch — preserving components already validated in v1.0 while inserting a genuine gate ahead of the listing flow in v1.1.",
          tradeoff:
            "slower short-term progress for a navigation model that could actually hold an approval gate, instead of retrofitting one in later.",
          images: [{ src: coreSequence1 }, { src: coreSequence2 }],
        },
        {
          number: "02 — Bond issuance form",
          title:
            "Kept real structured-finance vocabulary instead of softening it into consumer-style copy.",
          description:
            "The bond-issuance form needed fields most consumer apps never touch — coupon rate, DSCR, maturity date, payment frequency, issuance price. I chose precision over approachability here, because the people filling out this form were structuring a real debt instrument for their own investors and auditors, who would read a simplified, stylized version as a credibility problem rather than good UX.",
          tradeoff:
            'a denser, less "friendly" form for project developers, in exchange for a document that reads as legitimate to the people who\'d actually scrutinize it.',
          images: [{ src: bondIssuanceForm }],
        },
        {
          number: "03 — Contract signing",
          title:
            'Gave contract execution a distinct, accountable role instead of a generic "confirm" action.',
          description:
            'Signing a real legal agreement doesn\'t belong behind a stylized confirm button. I designed an explicit "Authorised Representative" role and routed contract execution through it — backed by a DocuSign integration — as its own surface, separate from general account settings, so a legal action had a specific, accountable owner in the flow.',
          tradeoff:
            "one more role and one more settings surface to design and maintain, for a signing flow that can hold up to real legal scrutiny.",
          images: [{ src: contractSigning }],
        },
        {
          number: "04 — MVP scope",
          title: "Cut scope deliberately to protect a shippable MVP.",
          description:
            "I pushed to strip insurance-related fields, duplicate pre-purchase tables, and extra columns from the v1 scope rather than half-modeling capabilities the underlying contract system would eventually need. Keeping the first version narrow mattered more than making it complete.",
          tradeoff:
            "known future work — insurance, richer pre-purchase handling — left deliberately undesigned rather than half-solved.",
          images: [{ src: MVPScope }],
        },
      ]}
      process={{
        label: "User Flow",
        heading: "Two personas, one shared settlement — mapped end to end.",
        paragraphs: [
          "The project developer's path runs from registration to bond issuance; the corporate buyer's path runs from KYC to purchase. Both converge on the same escrow-verification and simultaneous-release step that closes the agreement for both sides.",
        ],
        image: ufImage,
      }}
      validation={[
        "There was no formal usability-testing phase. Validation ran through a continuous, structured review loop with the founding team — weekly Product Standups and Retros over several months, checked directly against the written smart-contract specification rather than against end-user sessions. Worth naming honestly: this validated that the design matched the underlying contract logic and the team's intent tightly; it did not include structured testing with actual project developers or corporate buyers.",
      ]}
      finalDesign={{
        paragraphs: [
          "Two complete, separately-versioned personas (Project developer and Corporate Buyer, each iterated through a 1.0 → 1.1 pass): account setup and verification, project registration and Aetlas approval, CDR-certificate and pre-purchase listing, a structured green-bond issuance form, an escrow-backed commitments dashboard, contract review and signing routed to an authorised signatory, and company/account settings including payment and withdrawal methods.",
        ],
        imageGrid: "web",
        images: [
          { src: finalDesign1 },
          { src: finalDesign2 },
          { src: finalDesign3 },
          { src: finalDesign4 },
          { src: finalDesign5 },
          { src: finalDesign6 },
        ],
      }}
      reflection={{
        heading: "What I'd do differently.",
        paragraphs: [
          "The two personas didn't get equal depth — Project developer absorbed the overwhelming majority of the iteration (76 of 79 recorded review rounds), while Corporate Buyer had far fewer passes. If I revisited this today, I'd push earlier for the same depth of review on the buyer side — the simpler of the two flows, but not a solved one — so the system as a whole was evenly battle-tested rather than carried by one persona.",
        ],
      }}
    />
  );
};

export default Aetlas;
