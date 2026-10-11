export const portfolioData = {
  personal: {
    name: "Karthikeyan M",
    monogram: "KM.",
    location: "Chennai, Tamil Nadu, India",
    college: "R.M.D. Engineering College",
    degree: "B.Tech Artificial Intelligence and Machine Learning",
    year: "Second Year",
    email: "karthikeyanmaran2007@gmail.com",
    headline: "Building thoughtful software, one problem at a time.",
    subtitle:
      "I'm Karthikeyan, an Artificial Intelligence and Machine Learning undergraduate with an interest in full-stack development, software engineering, and intelligent systems.",
    heroIntro: "HELLO, I'M KARTHIKEYAN",
    heroDescription:
      "I'm a second-year AI & ML undergraduate at R.M.D. Engineering College, Chennai. I enjoy designing applications, exploring intelligent systems, and bringing technical ideas to life.",
  },

  socialLinks: {
    // Configurable URLs: leave empty string if not configured yet
    github: "", 
    linkedin: "",
  },

  about: {
    heading: "A little about me.",
    paragraphs: [
      "I'm Karthikeyan M, currently pursuing my B.Tech in Artificial Intelligence and Machine Learning at R.M.D. Engineering College.",
      "My interests revolve around full-stack development, software engineering, artificial intelligence, and understanding how modern applications work.",
      "I enjoy transforming ideas into functional software, experimenting with different technologies, and approaching complex problems through practical implementation.",
    ],
  },

  featuredProject: {
    name: "AI-Based Document & Identity Screening System",
    subtitle: "An intelligent approach to document verification and identity screening.",
    overview:
      "A full-stack application designed to assist in detecting suspicious document submissions through automated analysis, identity verification signals, and risk assessment.",
    problemStatement:
      "Manual document screening in high-throughput intake flows often faces inconsistencies, processing latency, and challenges in catching subtle document modifications, mismatching applicant photos, or duplicate records across submissions.",
    architecture: {
      client: "Responsive React & Vite web interface for document capture, inspection preview, and real-time verification dashboards.",
      api: "FastAPI asynchronous backend orchestrating extraction pipelines, computer vision services, and screening logic.",
      cvEngine: "Computer Vision modules analyzing visual cues, image compression artifacts, face extraction, and alignment comparison.",
      storage: "SQLite relational store maintaining structured records, verification metrics, and immutable audit logs.",
      integrity: "Solidity smart contract integration for cryptographic state anchoring and tamper-evident audit trails.",
    },
    technologies: [
      "React",
      "Vite",
      "Python",
      "FastAPI",
      "SQLite",
      "Computer Vision",
      "Solidity",
    ],
    coreFeatures: [
      {
        title: "Document analysis and field extraction",
        description: "Automated OCR ingestion parsing standardized demographic, identity, and date fields from uploaded credentials.",
      },
      {
        title: "Document tampering indicators",
        description: "Analyzes visual discrepancies, edge consistency, and font anomalies to highlight potentially altered document areas.",
      },
      {
        title: "Face comparison functionality",
        description: "Extracts applicant portrait from the credential and compares facial embeddings against reference photographs.",
      },
      {
        title: "MRZ and QR validation modules",
        description: "Decodes and parses Machine Readable Zones (MRZ) and cryptographic QR codes to verify checksum integrity against extracted fields.",
      },
      {
        title: "Duplicate identity screening",
        description: "Cross-checks applicant identifiers and visual hashes across existing database records to spot duplicate registrations.",
      },
      {
        title: "Rule-based risk assessment and classification",
        description: "Combines modular verification signals through transparent heuristic rules to categorize submissions into review tiers.",
      },
      {
        title: "Verification result dashboard",
        description: "Interactive operator console rendering side-by-side credential views, signal flags, and detailed verification summaries.",
      },
      {
        title: "Audit trail recording",
        description: "Logs every step of the inspection pipeline with timestamps and operator actions in an immutable internal ledger.",
      },
      {
        title: "Blockchain anchoring integration",
        description: "Generates cryptographic hashes of verification receipts and anchors state digests via Solidity smart contracts.",
      },
    ],
    technicalChallenges: [
      {
        challenge: "Handling varied document quality and lighting conditions",
        approach: "Implemented computer vision pre-processing routines including adaptive thresholding, perspective correction, and contrast normalization prior to feature extraction.",
      },
      {
        challenge: "Maintaining low-latency screening across multi-step pipeline",
        approach: "Structured asynchronous task execution in FastAPI so independent inspections (MRZ decoding, face extraction, database lookup) execute concurrently.",
      },
      {
        challenge: "Explainable risk classification without opaque outputs",
        approach: "Adopted a deterministic rule-based scoring architecture where every flag references explicit inspection rules, ensuring complete auditability for human operators.",
      },
    ],
  },

  skills: {
    Programming: ["Java", "C++", "Python", "JavaScript"],
    Frontend: ["HTML", "CSS", "React"],
    Backend: ["FastAPI", "Node.js"],
    Database: ["SQL", "SQLite"],
    Tools: ["Git", "GitHub", "VS Code"],
  },

  education: [
    {
      degree: "B.Tech — Artificial Intelligence and Machine Learning",
      institution: "R.M.D. Engineering College",
      period: "Second Year",
      location: "Chennai, Tamil Nadu",
    },
  ],

  contact: {
    heading: "Have something in mind?",
    subheading:
      "Feel free to reach out for a conversation, collaboration, or technical discussion.",
    email: "karthikeyanmaran2007@gmail.com",
  },
};
