import ProjectDetails from "../../components/ProjectDetails";

const Major = () => {
  return (
    <ProjectDetails
      accentColor="#FF6FA5"
      eyebrow="B2B / SaaS · Music Platform"
      title="Designing (and partly building) the collaborative workspace at the center of an independent-artist platform"
      lede="Where band members, artists, and project collaborators jointly manage releases, royalty splits, and their shared public profile — one workspace, real legal and financial stakes."
      role="UX/UI Designer + front-end (HTML/CSS)"
      platform="Web platform"
      team="Product owner & a developer"
      scope="End-to-end product design — onboarding to contracts"
      stats={[
        { num: "132", label: "documented rounds of stakeholder review" },
        { num: "33", label: "screens mapped in the source UX-flow specification" },
        { num: "1", label: "shared workspace model (the \"B.A.P.\") powering the whole IA" },
        { num: "HTML/CSS", label: "select flows implemented directly, not just designed" },
      ]}
      context={[
        "Major Labl Artist Club (MLAC) helps independent musicians run their music career without a traditional label — centered on the \"B.A.P.\" (Band, Artist, or Project): a collaborative workspace that band mates and musical collaborators join to manage releases, split royalties, and maintain a shared artist profile together. I joined to take a functional specification — flows and wireframes based on instructions previously given to an earlier development team — and turn it into a coherent, shippable product, implementing select flows myself in HTML/CSS to keep design and shipped product tightly aligned.",
      ]}
      problem={{
        heading: "A shared workspace with real legal and financial stakes, that still had to feel effortless.",
        paragraphs: [
          "A B.A.P. isn't a single-user profile — it's a shared workspace: royalty splits between collaborators, contracts that get amended over time, membership that moves from pending to active, and pricing that has to work across multiple stores and currencies.",
          "On top of that, the product needed to feel effortless for musicians with no patience for admin: auto-pulling profile data from Spotify, auto-detecting social/streaming links instead of asking users to pick from a list, and giving people a fair, human-reviewable path when automated content checks got something wrong. The interface had to carry all of that weight without feeling like enterprise software.",
        ],
      }}
      discovery={{
        heading: "Continuous fidelity-checking against an existing functional spec, not user research.",
        paragraphs: [
          "The product owner, Sam Bardens, had already documented how the app should work in a 33-slide UX-flow deck, screen by screen. Before finalizing a screen, I checked it directly against that spec — my own comments on the file cite specific slide numbers (\"slide 14,\" \"slide 17,\" \"slide 19\") and ask direct fidelity questions (\"is it correct?\") rather than assuming my interpretation was right.",
          "Where the collaborative logic wasn't fully specified, I surfaced it myself before designing around it — questioning the existing release flow, whether a \"without contract\" path existed, and what status a submission should show during an 11-day review window.",
        ],
      }}
      decisionImageLayout="web"
      decisions={[
        {
          number: "01 — Visual hierarchy",
          title: "Established a one-accent-color rule to protect visual hierarchy as the product grew.",
          description:
            "With more screens being added, the interface needed a hard constraint on its primary accent color rather than letting every \"important\" action compete for the same visual weight. I set the rule that the pink accent is reserved for save/submit actions only — every other action uses a secondary color — so a user can always tell, at a glance, which single action on a page actually matters.",
          tradeoff:
            "less visual \"punch\" available for other calls-to-action, in exchange for a hierarchy that stays legible as the product's screen count grows.",
          images: [{}],
        },
        {
          number: "02 — My Links",
          title: "Built a self-detecting links system instead of a fixed platform checklist.",
          description:
            "Rather than a static list of social/streaming icons users had to match to their own accounts, I designed the links section to stay empty until a user adds an address, then auto-recognize the service and surface the correct logo — so the interface never shows a musician five empty icons for platforms they don't use.",
          tradeoff:
            "a slightly less \"complete-looking\" empty state, in exchange for a links section that scales to whatever platforms a real artist actually uses.",
          images: [{}],
        },
        {
          number: "03 — Contract history",
          title: "Gave contract amendments their own history, instead of letting edits overwrite the record.",
          description:
            "Royalty splits are a legal agreement between collaborators, not a form that should silently change. I designed a history view so that whenever a contract is amended, every previous version stays reviewable — protecting collaborators who need to see exactly what changed and when.",
          tradeoff:
            "extra surface to design and maintain, for a feature that's non-negotiable once real money and legal agreements are involved.",
          images: [{}, {}],
        },
        {
          number: "04 — Design-to-build",
          title: "Implemented select flows directly in HTML/CSS to close the gap between design and shipped product.",
          description:
            "On a small team without a dedicated front-end resource for every screen, I built out select flows in HTML/CSS myself rather than handing off a static design and hoping the build matched it — keeping fast-moving flows accurate to the design without waiting on a full development cycle for every iteration.",
          tradeoff:
            "time split between designing and building meant less capacity to go deep on validation for every flow — a real constraint, not a hidden one.",
          images: [{}],
        },
      ]}
      validation={[
        "There was no formal usability-testing phase. Validation ran through a continuous review loop with the product owner directly in Figma — 132 recorded comments, each screen checked against the existing UX-flow specification rather than against real end users. Worth naming honestly: this validated that the shipped design matched the intended product logic and collaborative/legal requirements tightly; it did not include structured testing with actual musicians or bands using the product.",
      ]}
      finalDesign={{
        paragraphs: [
          "The shipped product: onboarding with Spotify-linked profile creation, B.A.P. creation and joining (with a path to continue without one), a member management view with pending/active states, releases with multi-store pricing and currency handling, a contracts & splits system with amendment history, a dynamic self-detecting links section, and brand settings (logo, colors, fonts) that carry through to web pages, shops, and invoices automatically.",
        ],
        imageGrid: "web",
        images: [{}, {}, {}, {}, {}, {}],
      }}
      reflection={{
        heading: "What I'd do differently.",
        paragraphs: [
          "Splitting time between design and HTML/CSS implementation meant validation depth varied across flows — the screens I built myself got tested by shipping; screens designed but handed off didn't always get the same scrutiny. If I did this again, I'd push for a consistent review pass across every flow regardless of who built it, not just the ones I touched end-to-end.",
        ],
      }}
    />
  );
};

export default Major;
