import Image from 'next/image';

import type { Year } from '@/features/routes';
import { cn } from '@/shared/cn';

import { WanderPageClient } from './wander-page.client';

const backgroundMap = {
  '22': '/imgs/wander/2022/wanderBackground.webp',
  '23': '/imgs/wander/2023/wanderBackground.webp',
};

export default async function WanderPage({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;
  const yearKey = year as Year;
  const backgroundSrc = backgroundMap[yearKey];

  return (
    <div className="flex h-full w-full items-center justify-center">
      <Image
        src={backgroundSrc}
        alt="background"
        fill
        priority
        quality={90}
        draggable={false}
        className={cn('absolute bottom-0 w-full', 'object-cover', '[mask-border-mode:alpha]')}
      />
      <div
        className={cn(
          'absolute top-0 right-0 bottom-0 left-0',
          'flex items-center justify-center',
          'overflow-clip'
        )}
      >
        <WanderPageClient year={yearKey} />
      </div>
    </div>
  );
}
