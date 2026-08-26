'use client';

import { MessageSquarePlusIcon } from 'lucide-react';

export function Testimonials() {
  return (
    <div className="space-y-6">
      <h2 className="font-mono text-base tracking-widest text-muted-foreground uppercase">
        Reviews
      </h2>

      <p className="text-foreground/60 text-base leading-relaxed">
        Working with people I trust is what drives me. If we have worked
        together, I would love to hear your thoughts.
      </p>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScI5iCVX_PSPoP91tq7Pj6Jvwb5Jj4LG6gxXM2Zbofbb5pFPw/viewform?usp=header"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border px-5 py-3 font-medium text-base transition-colors hover:bg-accent/50"
      >
        <MessageSquarePlusIcon className="size-5" />
        Leave a Review
      </a>
    </div>
  );
}
