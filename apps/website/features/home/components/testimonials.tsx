'use client';

import { MessageSquarePlusIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Review {
  name: string;
  role: string;
  review: string;
  date: string;
  rating: string;
}

function Stars({ rating }: { rating: string }) {
  const num = parseInt(rating, 10);
  if (!num || num < 1 || num > 5) return null;
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < num ? 'text-yellow-400' : 'text-foreground/20'}>
          &#9733;
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ name, role, review, rating }: Review) {
  return (
    <div className="rounded-xl ring-1 ring-foreground/10 p-5 transition-colors ease-out ring-inset hover:bg-accent/50">
      <Stars rating={rating} />
      <p className="text-foreground/80 text-sm leading-relaxed mb-4">
        &ldquo;{review}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="flex size-8 items-center justify-center rounded-full bg-accent text-xs font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-foreground text-sm font-medium">{name}</p>
          {role && (
            <p className="text-muted-foreground text-xs">{role}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch('/api/reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch(() => setReviews([]));
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="font-mono text-base tracking-widest text-muted-foreground uppercase">
        Reviews
      </h2>

      {reviews.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2">
          {reviews.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </div>
      ) : (
        <p className="text-foreground/60 text-base leading-relaxed">
          Working with people I trust is what drives me. If we have worked
          together, I would love to hear your thoughts.
        </p>
      )}

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
