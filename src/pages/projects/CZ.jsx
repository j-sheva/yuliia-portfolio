import ProjectDetails from "../../components/ProjectDetails";
import czFinal1Layer1 from "../../assets/images/cz/cz-final-1-layer1.png";
import czFinal1Layer2 from "../../assets/images/cz/cz-final-1-layer2.png";
import czFinal2 from "../../assets/images/cz/cz-final-2.png";

const CZ = () => {
  return (
    <ProjectDetails
      accentColor="#E8B34D"
      eyebrow="Web3 / RWA · Fintech Platform"
      title="Designing the auction and digital-ownership platform for Colt CZ Group that has run for 2+ years without a major redesign"
      lede="An exclusive marketplace where collectors bid on limited-edition firearms and hold NFT-backed certificates of ownership tied to a specific, serial-numbered piece."
      role="UX/UI Designer"
      platform="Web platform"
      team="CTO, PM, QA & myself (BlockTrust)"
      scope="End-to-end — auctions, marketplace, ownership"
      stats={[
        {
          num: "2+ yrs",
          label: "live and successfully running without updates",
        },
        {
          num: "100",
          label: "serial-numbered units in the first launched collection",
        },
        { num: "4", label: "core product team: CTO, PM, QA, Designer" },
        {
          num: "Email + OTP",
          label: "authentication model, kept deliberately lightweight",
        },
      ]}
      context={[
        "Collector's Hub is the exclusive firearm-auction and digital-ownership platform built for Colt CZ Group, serving a niche audience of collectors and enthusiasts. I designed it while at BlockTrust, where Colt CZ Group was a client.",
      ]}
      problem={{
        heading:
          "Complex, high-value transactions that still had to feel premium and trustworthy.",
        paragraphs: [
          "The platform needed to support genuinely complex flows — live auctions, ownership rights, and NFT-backed digital certificates of ownership — for high-value transactions, without losing the premium, trustworthy feel that a collector spending real money on a rare firearm would expect.",
          "The main challenges: designing auction and marketplace flows that hold up under real bidding pressure, making digital ownership legible to an audience that isn't necessarily crypto-native, and keeping the whole system secure and trustworthy at high transaction values.",
        ],
      }}
      discovery={{
        paragraphs: [
          "Before designing, I researched how existing auction platforms handled bidding and ownership, studied NFT-based ownership logic on its own terms, and talked directly with the development team and the Colt CZ team about who the audience actually was and what the platform needed to achieve for them. The biggest open question wasn't a feature — it was trust: how do you make \"digital ownership\" legible and credible to collectors who aren't crypto-native, on a platform where the interface itself has to carry that trust.",
        ],
      }}
      decisions={[
        {
          number: "01 — Ownership",
          title:
            "Represented ownership as a direct visual match to the specific serialized firearm, not a generic badge.",
          description:
            'The entire auction mechanic centered on winning one specific unit — a firearm numbered 0 through 100 within a limited run. I designed the ownership certificate to show the actual image of that exact serial-numbered weapon, rather than a generic "you own an NFT" badge. The certificate\'s job was to authenticate one specific claim: this serial-numbered piece belongs to you.',
          tradeoff:
            "ties certificate design to real per-unit photography and asset management for every serial number in a collection, instead of a simpler generic badge — justified because serial-specific identity was the actual product being sold.",
        },
        {
          number: "02 — Bidding",
          title:
            "Built outbid notifications into the bidding flow to keep trust intact under live competition.",
          description:
            "When a user's bid was outbid, they received a notification. This was the core mechanism for keeping bidders confident that the auction was live and fair in real time, rather than leaving them to refresh and check manually.",
        },
        {
          number: "03 — Trust & access",
          title:
            "Kept authentication deliberately lightweight — email plus one-time passcode.",
          description:
            "Sign-in ran on email and an OTP code, with a partial identity-related step during profile completion. For a platform handling high-value transactions, this was a conscious scope choice rather than a full KYC build-out.",
        },
        {
          number: "04 — Payments",
          title:
            "Redesigned the payment flow around manual bank transfer after card payments fell through.",
          description:
            "The original plan was to process payment through Stripe. That had to change to bank transfer, which meant reworking the flow around a manual, non-automated confirmation step instead of instant card checkout.",
          tradeoff:
            "gave up a fast, automated checkout experience for a slower manual-confirmation flow — a constraint forced by payment-processing reality, not a design preference.",
        },
      ]}
      validation={[
        "There was no formal usability-testing phase with end users. Validation ran through review sessions during development — feedback discussed and incorporated along the way — plus a dedicated QA/testing team that tested the platform after it was built. After the official launch, the core flows stayed largely unchanged; the main evolution was adding new firearm collections over time, starting from a single 100-unit serialized Colt collection and expanding from there.",
      ]}
      finalDesign={{
        paragraphs: [
          "The shipped platform lets collectors browse auctions, place bids, purchase rights, and access their digital ownership certificates in a structured, premium interface aligned with the Colt CZ Group brand — designed to work responsively across devices.",
        ],
        images: [
          {
            layers: [
              {
                src: czFinal1Layer1,
                style: {
                  height: "107.35%",
                  width: "100%",
                  left: 0,
                  top: "-0.72%",
                },
              },
              {
                src: czFinal1Layer2,
                style: {
                  height: "114.54%",
                  width: "114.15%",
                  left: "-7.96%",
                  top: "-1.1%",
                },
              },
            ],
          },
          { src: czFinal2 },
        ],
      }}
      reflection={{
        heading: "What I'd do differently.",
        paragraphs: [
          "If I did this again, I'd push earlier to find a way to automate payment confirmation — even for very large sums — instead of leaving the bank-transfer step manual. It worked, and the platform has run without a major redesign since, but that manual confirmation step is the one piece I'd design differently knowing what I know now.",
        ],
      }}
    />
  );
};

export default CZ;
