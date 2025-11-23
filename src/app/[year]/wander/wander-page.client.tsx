'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Paths from '@/features/routes/model';
import type { Year } from '@/features/routes';
import WanderOBJ from '@/widgets/wander-obj/wander-obj';

import storiesData22 from './wander-data-22.json';
import storiesData23 from './wander-data-23.json';

interface Story {
  name: string;
  src: string;
  placeholderSrc: string;
  text: string;
  translation: string;
}

const storiesMap = {
  '22': storiesData22 as Story[],
  '23': storiesData23 as Story[],
};

export function WanderPageClient({ year }: { year: Year }) {
  const router = useRouter();
  const stories = storiesMap[year];

  const paths = Paths(year);

  return (
    <div className="absolute right-0 bottom-0 left-0 flex h-full items-center justify-center overflow-clip [&_img]:w-[37.5rem] [&_img]:max-md:w-[23.75rem]">
      {stories.map((story) => (
        <WanderOBJ
          key={story.name}
          translation={story.translation}
          text={story.text}
          onSubmit={() => router.push(`${paths.video}/${story.name}`)}
        >
          <StoryImage src={story.src} placeholderSrc={story.placeholderSrc} alt={story.name} />
        </WanderOBJ>
      ))}
    </div>
  );
}

function StoryImage({
  src,
  placeholderSrc,
  alt,
}: {
  src: string;
  placeholderSrc: string;
  alt: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Image
        src={placeholderSrc}
        alt={alt}
        width={500}
        height={500}
        className={`absolute transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100 blur-[10px]'}`}
        priority
      />
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        onLoad={() => setIsLoaded(true)}
        className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        priority
      />
    </>
  );
}
