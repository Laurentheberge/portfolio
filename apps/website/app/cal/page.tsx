import { FloatingHeader } from '@/components/navigation/floating-header';
import { ScrollArea } from '@/components/scroll-area';
import { USER } from '@/config/user';
import { createOgImage } from '@/lib/createOgImage';
import { createMetadata } from '@/lib/seo/metadata';
import { MailIcon, GithubIcon, LinkedinIcon, PhoneIcon } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next/types';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Book a Meeting';
  const description =
    'Get in touch to discuss anything from design to engineering to business.';

  const image = createOgImage({ title, meta: description });

  return createMetadata({ title, description, image });
}

export default function BookingPage() {
  return (
    <ScrollArea useScrollAreaId className="h-full">
      <FloatingHeader title="Book a Meeting" />
      <div className="layout relative z-10 content-wrapper">
        <div className="mt-6 mb-12 max-w-md">
          <h1 className="mb-2 font-bold text-3xl tracking-tight">
            Book a Meeting
          </h1>
          <p className="mb-8 text-muted-foreground text-base leading-relaxed">
            Got a project idea, a collaboration in mind, or just want to chat?
            Reach out through any of these.
          </p>

          <div className="space-y-4">
            <a
              href={`mailto:${USER.email}`}
              className="flex items-center gap-3 rounded-lg border p-4 transition-colors hover:bg-accent/50"
            >
              <MailIcon className="size-5 text-muted-foreground" />
              <div>
                <p className="font-medium text-base">{USER.email}</p>
                <p className="text-muted-foreground text-sm">
                  Drop me an email
                </p>
              </div>
            </a>

            <a
              href={USER.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border p-4 transition-colors hover:bg-accent/50"
            >
              <LinkedinIcon className="size-5 text-muted-foreground" />
              <div>
                <p className="font-medium text-base">LinkedIn</p>
                <p className="text-muted-foreground text-sm">
                  Connect on LinkedIn
                </p>
              </div>
            </a>

            <a
              href={USER.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border p-4 transition-colors hover:bg-accent/50"
            >
              <GithubIcon className="size-5 text-muted-foreground" />
              <div>
                <p className="font-medium text-base">GitHub</p>
                <p className="text-muted-foreground text-sm">
                  Check out my work
                </p>
              </div>
            </a>

            <a
              href="tel:+237671496214"
              className="flex items-center gap-3 rounded-lg border p-4 transition-colors hover:bg-accent/50"
            >
              <PhoneIcon className="size-5 text-muted-foreground" />
              <div>
                <p className="font-medium text-base">+237 671 496 214</p>
                <p className="text-muted-foreground text-sm">
                  Give me a call
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
