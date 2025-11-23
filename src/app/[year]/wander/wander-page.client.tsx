'use client';

import { useRouter } from 'next/navigation';

import Paths from '@/features/routes/model';
import type { Year } from '@/features/routes';
import WanderOBJ from '@/app/[year]/wander/wander-obj';
import { ProgressiveImage } from '@/widgets/image/progressive-image';

import storiesData22 from './wander-data-22.json';
import storiesData23 from './wander-data-23.json';

interface Story {
  name: string;
  src: string;
  placeholderSrc: string;
  text: string;
  translation: string;
}

const storiesMap: Record<Year, Story[]> = {
  '22': storiesData22,
  '23': storiesData23,
};

const imageSizeMap = {
  '22': { width: 600, height: 600 },
  '23': { width: 400, height: 400 },
};

export function WanderPageClient({ year }: { year: Year }) {
  const router = useRouter();
  const stories = storiesMap[year];

  const paths = Paths(year);

  return stories.map((story) => (
    <WanderOBJ
      key={story.name}
      translation={story.translation}
      text={story.text}
      onSubmit={() => router.push(`${paths.video}/${story.name}`)}
    >
      <ProgressiveImage
        src={story.src}
        placeholdersrc={story.placeholderSrc}
        alt={story.name}
        width={imageSizeMap[year].width}
        height={imageSizeMap[year].height}
      />
    </WanderOBJ>
  ));
}
