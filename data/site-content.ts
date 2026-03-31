export type ClubEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  description: string;
};

export type SocialLinks = {
  linkedin?: string;
  instagram?: string;
  discord?: string;
};

export const siteContent = {
  club: {
    shortName: "SPARC",
    fullName: "Suffolk Programming, AI & Research Club",
    tagline: "Suffolk University Student Organization",
    city: "Boston, MA",
    email: "sparc@studentorgs.suffolk.edu",
    heroLine: "Suffolk University · Boston",
    heroTitle: "For Suffolk Students Who Want to Build with AI and Software",
    heroDescription:
      "SPARC is Suffolk University's Programming, AI and Research Club. Members gain practical experience through project teams, workshops, and peer mentorship.",
    heroSecondary:
      "From first-year beginners to advanced builders, students join SPARC to grow skills, strengthen portfolios, and contribute to meaningful work with a supportive community.",
    heroBadge: "Official Suffolk University Student Organization",
  },
  links: {
    joinForm: "/contact", // Fallback: route students to contact until official form URL is available
    eventCalendar: "/events", // Fallback: use Events page until official calendar URL is available
  },
  socials: {
    linkedin: "/contact", // Fallback: keep students on official contact path
    instagram: "/contact", // TODO: replace with official SPARC Instagram URL
    discord: "/contact", // TODO: replace with official SPARC Discord invite URL
  } satisfies SocialLinks,
  homeHighlights: [
    "Open to all majors and all experience levels",
    "Weekly workshops, speaker sessions, and project meetings",
    "Hands-on work that builds confidence and portfolio-ready experience",
  ],
  credibilitySignals: [
    "Student-led and community-driven at Suffolk University",
    "Practical workshops and collaborative projects every semester",
    "Welcoming environment focused on growth, ethics, and teamwork",
  ],
  homeWhoWeAre:
    "We are an interdisciplinary community of Suffolk students who learn together by building projects, discussing research, and supporting one another. SPARC gives students a professional but approachable space to ask questions, try new ideas, and make steady progress.",
  joinSummary:
    "Join to gain hands-on experience, mentorship, and a strong peer network that supports your academic and career goals.",
  contactSummary:
    "Questions about membership, partnerships, or events? Our student leadership team is responsive and happy to help.",
  upcomingEvents: [
    {
      id: "sparc-website-dev-2",
      title: "SPARC Website Development II",
      date: "April 1, 2026",
      time: "5:30 PM - 7:00 PM",
      location: "73 Tremont St, Boston - Computer Lab",
      type: "Workshop",
      description:
        "Part 2 of our website workshop series focused on implementation progress, contributor onboarding, and next sprint planning.",
    },
    {
      id: "sparc-website-dev-1",
      title: "SPARC Website Development I",
      date: "March 30, 2026",
      time: "5:30 PM - 7:00 PM",
      location: "73 Tremont St, Boston - Computer Lab",
      type: "Workshop",
      description:
        "Part 1 of our website workshop series introducing project structure, UI planning, and open contribution opportunities for new members.",
    },
  ] satisfies ClubEvent[],
} as const;
