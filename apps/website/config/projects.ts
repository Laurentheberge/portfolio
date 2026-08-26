export type Project = {
  /** Stable unique identifier (used as list key/anchor). */
  id: string;
  title: string;
  /**
   * Project period for display and sorting.
   * Use "MM.YYYY" format. Omit `end` for ongoing projects.
   */
  period: {
    /** Start date (e.g., "05.2025"). */
    start: string;
    /** End date; leave undefined for "Present". */
    end?: string;
  };
  /** Public URL (site, repository, demo, or video). */
  link: string;
  /** Github repository URL. */
  github?: string;
  /** Tags/technologies for chips or filtering. */
  skills: string[];
  /** Short one-line description for list view. */
  shortDescription?: string;
  /** Optional rich description; Markdown and line breaks supported. */
  description?: string;
  /** Logo image URL (absolute or path under /public). */
  logo?: string;
  /** Whether the project card is expanded by default in the UI. */
  isExpanded?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: 'project-one',
    title: 'Project One',
    period: {
      start: '01.2025',
    },
    link: '#',
    skills: [
      'Next.js',
      'TypeScript',
      'React',
      'Tailwind CSS',
    ],
    shortDescription:
      'A modern web application built with Next.js and Tailwind CSS. (Replace with your project)',
    description: `A full-stack web application showcasing modern development practices.

Features include:
- Responsive design with Tailwind CSS
- Server-side rendering with Next.js
- Type-safe development with TypeScript
- Clean, modular architecture`,
    isExpanded: true,
  },
  {
    id: 'project-two',
    title: 'Project Two',
    period: {
      start: '09.2024',
    },
    link: '#',
    skills: ['React', 'Node.js', 'JavaScript', 'UI/UX'],
    shortDescription:
      'A feature-rich web app with a focus on user experience and performance. (Replace with your project)',
  },
  {
    id: 'project-three',
    title: 'Project Three',
    period: {
      start: '05.2024',
    },
    link: '#',
    skills: [
      'Figma',
      'Photoshop',
      'Illustrator',
      'Branding',
    ],
    shortDescription:
      'A branding and visual design project combining graphics design with web development. (Replace with your project)',
  },
];
