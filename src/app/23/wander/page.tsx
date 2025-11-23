'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Paths from '@/features/routes/model';
import { WanderBackground } from '@/widgets/wander-background';
import WanderOBJ from '@/widgets/wander-obj/wander-obj';

import storiesData from './wander-data.json';

interface Story {
  name: string;
  src: string;
  placeholderSrc: string;
  text: string;
  translation: string;
}

const stories = storiesData as Story[];

export default function Wander23Page() {
  const router = useRouter();

  return (
    <div className="flex h-full w-full items-center justify-center">
      <WanderBackground src="/imgs/wander/2023/wanderBackground.webp" />
      <div className="absolute right-0 bottom-0 left-0 flex h-full items-center justify-center overflow-clip [&_img]:w-[37.5rem] [&_img]:max-md:w-[23.75rem]">
        {stories.map((story) => (
          <WanderOBJ
            key={story.name}
            translation={story.translation}
            text={story.text}
            onSubmit={() => router.push(`${Paths['23'].video}/${story.name}`)}
          >
            <StoryImage src={story.src} placeholderSrc={story.placeholderSrc} alt={story.name} />
          </WanderOBJ>
        ))}
      </div>
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
