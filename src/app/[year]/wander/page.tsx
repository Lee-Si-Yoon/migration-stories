import type { Year } from '@/features/routes';
import { WanderPageClient } from './wander-page.client';

import { WanderBackground } from './wander-background';

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
      <WanderBackground src={backgroundSrc} />
      <WanderPageClient year={yearKey} />
    </div>
  );
}
