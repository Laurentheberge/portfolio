import { headers } from 'next/headers';

export const getDomain = async () => {
  const headersList = await headers();
  let domain = headersList.get('host') as string;

  if (domain === 'localhost:6969' || domain.endsWith('.vercel.app')) {
    domain = 'saiyantific.dev';
  }

  return domain;
};

export const addPathToBaseURL = async (path: string) =>
  `https://${await getDomain()}${path}`;
