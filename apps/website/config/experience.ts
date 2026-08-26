export type ExperiencePositionIcon =
  /** Icon key used to render the position category in the UI. */
  'code' | 'design' | 'education' | 'business' | 'idea';

export type ExperiencePosition = {
  id: string;
  title: string;
  /**
   * Employment period of the position.
   * Use "MM.YYYY" or "YYYY" format. Omit `end` for current roles.
   */
  employmentPeriod: {
    /** Start date (e.g., "10.2022" or "2020"). */
    start: string;
    /** End date; leave undefined for "Present". */
    end?: string;
  };
  /** Full-time | Part-time | Contract | Internship, etc. */
  employmentType?: string;
  description?: string;
  /** UI icon to represent the role type. */
  icon?: ExperiencePositionIcon;
  skills?: string[];
  /** Whether the position is expanded by default in the UI. */
  isExpanded?: boolean;
};

export type Experience = {
  id: string;
  companyName: string;
  companyUrl: string;
  city: string;
  /** URL to the company logo (absolute URL or path under /public). */
  companyLogo?: string;
  /** Roles held at this company; keep newest first for display. */
  positions: ExperiencePosition[];
  /** Marks the company as the current employer for highlighting. */
  isCurrentEmployer?: boolean;
};

export const experiences: Experience[] = [
  {
    id: 'freelance',
    companyName: 'Freelance',
    companyUrl: '#',
    city: 'Remote',
    isCurrentEmployer: true,
    positions: [
      {
        id: 'freelance-fullstack',
        title: 'Full-Stack Web Developer & Graphics Designer',
        employmentPeriod: {
          start: '2023',
        },
        employmentType: 'Freelance',
        description:
          'Building modern web applications and crafting visual designs for clients across various industries.',
        icon: 'code',
        skills: [
          'React',
          'Next.js',
          'Tailwind CSS',
          'TypeScript',
          'Node.js',
          'Figma',
          'Photoshop',
          'Illustrator',
        ],
      },
    ],
  },
];
