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
    heroTitle: "Suffolk Programming, AI and Research Club",
    heroDescription:
      "SPARC is a student organization for students interested in programming, artificial intelligence, and research. We provide a welcoming place to learn, collaborate, and build meaningful projects together.",
  },
  links: {
    joinForm: null as string | null, // TODO: replace with official SPARC membership form URL
    eventCalendar: null as string | null, // TODO: replace with official SPARC event calendar URL
  },
  socials: {
    linkedin: null, // TODO: replace with official SPARC LinkedIn URL
    instagram: null, // TODO: replace with official SPARC Instagram URL
    discord: null, // TODO: replace with official SPARC Discord invite URL
  } satisfies SocialLinks,
  homeHighlights: [
    "Open to all majors and experience levels",
    "Weekly meetings, workshops, and project sessions",
    "Hands-on AI and software projects with mentorship",
  ],
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
