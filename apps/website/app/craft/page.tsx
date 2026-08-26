import { FloatingHeader } from '@/components/navigation/floating-header';
import { ScrollArea } from '@/components/scroll-area';
import { createOgImage } from '@/lib/createOgImage';
import { createMetadata } from '@/lib/seo/metadata';
import type { Metadata } from 'next';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Craft';
  const description = 'Projects and experiments coming soon.';

  const image = createOgImage({ title, meta: description });

  return createMetadata({ title, description, image });
}

export default async function Page() {
  return (
    <ScrollArea useScrollAreaId>
      <FloatingHeader scrollTitle="Craft" />
      <div className="layout relative z-10 content-wrapper">
        <div className="mt-6 mb-12">
          <h1 className="mb-1 font-bold text-3xl tracking-tight">Craft</h1>
          <p className="text-muted-foreground text-base">
            Good projects are on the way. Stay tuned.
          </p>
        </div>
      </div>
    </ScrollArea>
  );
}
