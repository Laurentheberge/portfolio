import { type Experience, experiences } from './experience';

export type User = {
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  location: string;
  domain: string;
  website?: string;
  description: string;
  jobTitle: string;
  twitterHandle: string;
  namePronunciationUrl: string;
  username: string;
  tagline: string;
  social: {
    twitter: string;
    github: string;
    linkedin: string;
    bluesky: string;
  };
  image: {
    profile: string;
  };
  flipSentences: string[];
  experiences?: Experience[];
};

const USER: User = {
  firstName: 'Saiyantific',
  lastName: '',
  name: 'Saiyantific',
  email: 'azawelauren@gmail.com',
  domain: 'saiyantific.dev',
  jobTitle: 'Website & Web App Developer, Graphics Designer',
  username: 'saiyantific',
  tagline: 'Saiyantific, Building digital experiences at the intersection of code and design',
  twitterHandle: '@hochster_Mann',
  location: 'India',
  description:
    'A full-stack web developer and graphic/visual designer crafting thoughtful digital experiences. I build performant web applications and design striking visuals, merging code with creativity.',
  namePronunciationUrl: '',
  social: {
    twitter: 'https://x.com/hochster_Mann',
    github: 'https://github.com/Laurentheberge',
    linkedin: 'https://linkedin.com/in/lauren-theberge-945843285/',
    bluesky: '',
  },
  flipSentences: [
    'Building digital experiences with code & design.',
    'Full-stack web development.',
    'Graphic & visual design.',
    'Turning ideas into polished products.',
    'Where development meets design.',
  ],
  image: {
    profile: 'https://github.com/Laurentheberge.png',
  },
  experiences: experiences,
};

USER.website = `https://${USER.domain}`;

export { USER };
