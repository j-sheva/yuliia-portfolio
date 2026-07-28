import ProjectDetails from "../../components/ProjectDetails";

const Qualoo = () => {
  return (
    <ProjectDetails
      accentColor="#6EC1FF"
      eyebrow="Web3 / DePIN · Mobile App"
      title="Designing the structure of a product before the product existed"
      lede="When I joined, Qualoo wasn't a product yet — just a rough concept the founding team was still defining, screen by screen. I built the information architecture and interaction model that turned it into a shipped product — now live on iOS and Android."
      link="https://apps.apple.com/es/app/qualoo-internet-quality/id6744975488"
      role="UX/UI Designer"
      platform="iOS & Android"
      team="Founders, CTO & Engineering"
      scope="End-to-end product design — concept to ship"
      stats={[
        { num: "~12 mo", label: "continuous, screen-by-screen collaboration with the founder" },
        { num: "5", label: "core actions structured into one navigable IA hub" },
        { num: "4", label: "key architecture decisions made under shifting constraints" },
        { num: "9", label: "issue tags structured into the Report taxonomy" },
      ]}
      context={[
        "Qualoo pays users to run passive internet-diagnostics nodes on their phones, aggregating the data into connectivity insights sold to ISPs and regulators — infrastructure-grade value built on a crypto-economic model (a native token, QXT). I was hired directly by the CTO to design the consumer-facing app that makes this system usable by people who have no reason to understand DePIN, blockchain, or geospatial indexing.",
      ]}
      problem={{
        heading: "The product didn't exist yet — not even as a defined idea.",
        paragraphs: [
          "At kickoff, Qualoo wasn't a product yet — it was a screen of placeholder elements the CTO was still deciding the purpose of. \"This will be Check-in.\" \"This will be report an issue.\" \"This icon will also be removed for now — it's a future feature.\" There was no existing structure to redesign. Instead: a business model still being decided (points vs. tokens vs. coins), a hard technical constraint dictating how the core map had to work, and a small distributed team whose requirements surfaced gradually rather than upfront.",
          "The challenge wasn't simplifying an existing complex product — it was building a coherent, navigable, motivating structure while the product itself was still being defined, for an audience that would never engage with the underlying mechanics directly.",
        ],
      }}
      discovery={{
        heading: "Discovery meant extracting decisions from the CTO's evolving thinking, not analyzing an existing product.",
        paragraphs: [
          "The starting point was a live, screen-by-screen review with the CTO. A hard technical constraint — H3, a hexagonal geospatial indexing system — dictated how the core coverage map had to work, not a free illustration choice. And cross-functional gaps surfaced mid-project rather than in a discovery phase: the developer flagged, over a sustained back-and-forth, an entire list of missing requirements the first draft hadn't covered. Rather than guessing at business logic I didn't own, I asked the CTO directly for a structured list of open questions before continuing.",
        ],
      }}
      decisionImageLayout="mobile"
      decisions={[
        {
          number: "01 — Reward system",
          title: "Designed \"points\" as an abstraction that could survive a business model that hadn't been decided yet.",
          description:
            "The CTO was explicit: \"We will never actually do coins. It'll be points for now and then QXT Token and other rewards, but not coins.\" Rather than building around a specific token mechanic that could change, I treated points — a balance, a leaderboard rank, a referral count — as a stable layer that could sit in front of whatever the token economics ended up being.",
          tradeoff:
            "less \"crypto excitement\" on screen for users who came specifically for the token — a deliberate choice to keep the app legible to non-crypto-native users first.",
          images: [{}, {}],
        },
        {
          number: "02 — Network map",
          title: "Turned a fixed geospatial data structure into an explorable, gamified world map.",
          description:
            "Given H3 hex-indexing as a non-negotiable constraint, and a request from the CTO to show coverage \"without overloading the map,\" I designed the Explorer as a rotating 3D globe with toggleable coverage layers (Fixed / Mobile / My Operator / my country only) and per-region hex density — closer to a game map than a data dashboard.",
          tradeoff:
            "a globe is less information-dense than a table — deliberately traded raw data access for something people would actually want to open.",
          images: [{}, {}],
        },
        {
          number: "03 — Activity feed",
          title: "Rebuilt the Activity feed's structure after a real cross-functional catch.",
          description:
            "My first draft only handled one type of rewardable action. Once the developer flagged that it needed to cover check-ins, tests, surveys, and referrals alike, I restructured it as a single unified feed keyed by activity type — an IA fix that's invisible in the final screens but avoids a redesign every time the CTO adds a new way to earn points.",
          tradeoff:
            "none avoided here — this was a real gap the design missed the first time, caught by a teammate, not by me.",
          images: [{}, {}],
        },
        {
          number: "04 — Authentication",
          title: "Redesigned login twice as the auth architecture changed under me.",
          description:
            "Early direction was password-based login with OTP reset; a developer corrected this to link-based reset; later the whole password flow was scrapped for Google/Apple sign-in only, specifically \"in order not to store passwords anymore.\" Each change meant re-thinking onboarding's entry point, not just swapping a screen.",
          tradeoff:
            "less control over the sign-up funnel's branding in exchange for meaningfully lower security/compliance risk.",
          images: [{}, {}],
        },
      ]}
      process={{
        label: "Information Architecture",
        heading: "Structured a growing, half-defined feature list into one coherent map.",
        paragraphs: [
          "Below is the app's structure as it was actually built — onboarding into a single home hub, with five core actions branching off it and settings/profile handled as a separate utility branch.",
        ],
        groups: [
          { label: "User", steps: ["Onboarding → Auth", "Home (hub)"] },
          {
            label: "Home hub",
            steps: ["Check-in", "Explorer", "Report", "Survey / Tests", "Activity feed", "Leaderboard", "Invite friend"],
          },
          { label: "Check-in", steps: ["Select location", "map + nearby list", "rate WiFi + place"] },
          { label: "Explorer", steps: ["3D globe", "hex heatmap", "layer filters"] },
          { label: "Report", steps: ["9 issue tags", "No WiFi, outage, blocked service…"] },
          { label: "Survey / Tests", steps: ["Global test", "Speed test", "On-the-move mode"] },
          { label: "Utility branch", steps: ["Settings / Profile"] },
        ],
      }}
      validation={[
        "There was no formal usability-testing phase — validation was a continuous, roughly year-long review loop directly with the CTO and the dev team, comment by comment, screen by screen, through Figma. Copy, color, spacing, icon meaning, and flow logic were all challenged and revised in that loop before anything shipped. Worth naming honestly: the process validated business and stakeholder alignment tightly; it did not include structured end-user testing.",
      ]}
      finalDesign={{
        paragraphs: [
          "The shipped app: a 3-step onboarding introducing the network, the data, and the rewards one layer at a time; a home dashboard combining points balance, daily quick actions, activity feed, and leaderboard/referrals; a map-based WiFi check-in flow modeled on familiar \"rate this place\" patterns; the Explorer globe; and a structured issue-reporting taxonomy.",
        ],
        imageGrid: "mobile",
        images: [{}, {}, {}, {}, {}, {}],
      }}
      impact={[
        "10,000+ downloads, 5.0★ across 174 reviews on Google Play — live on iOS and Android today.",
        "Continued active development post-launch: background battery optimization, native telemetry, full IPv6 support, and 23 supported languages added within six months of release.",
      ]}
      reflection={{
        heading: "What I'd do differently.",
        paragraphs: [
          "Designing a product whose business model is still being decided means the interface itself has to absorb uncertainty — building \"points\" as a stable abstraction in front of an undecided token strategy mattered more than any individual screen.",
          "A cross-functional catch that finds a real gap in your IA isn't a failure of the process — it's what a real, moving, collaborative project actually looks like. If I revisited this project today, I'd push earlier for a lightweight usability pass on the onboarding and check-in flows specifically — both carry the heaviest first-time cognitive load (explaining DePIN and getting someone to trust a WiFi rating flow), and neither was tested with real first-time users before ship, only reviewed by the team that already understood the product.",
        ],
      }}
    />
  );
};

export default Qualoo;
