import { USER } from '@/config/user';
import type { Activity } from '@repo/design-system/components/ui/contribution-graph';

type GitHubContributionsResponse = {
  contributions: Activity[];
};

export async function getContributions() {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${USER.username}?y=last`,
      {
        next: { revalidate: 86400 },
      }
    );
    const data = (await res.json()) as GitHubContributionsResponse;
    return data.contributions ?? [];
  } catch {
    return [];
  }
}
