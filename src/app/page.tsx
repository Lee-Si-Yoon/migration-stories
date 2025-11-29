import { Metadata } from 'next';
import Link from 'next/link';

import { cn } from '@/shared/cn';
import { Paths } from '@/features/routes';
import { Button } from '@/components/ui/button';
import { ProgressiveImage } from '@/widgets/image/progressive-image';

export const metadata: Metadata = {
  title: 'Migration Stories',
  description: 'migration stories',
};

const blurImages = [
  {
    id: 22,
    src: '/imgs/logo/logo22.webp',
    placeholderSrc: '/imgs/logo/logo22-min.webp',
    alt: 'logo22.png',
    href: Paths[22].wander,
    text: 'to 2022',
  },
  {
    id: 23,
    src: '/imgs/logo/logo23.webp',
    placeholderSrc: '/imgs/logo/logo23-min.webp',
    alt: 'logo23.png',
    href: Paths[23].wander,
    text: 'to 2023',
  },
  {
    id: 3232,
    src: 'https://placehold.co/500x680',
    placeholderSrc: 'https://placehold.co/250x340',
    alt: 'pdf',
    href: '/pdf/sample-local-pdf',
    text: 'pdf',
  },
  {
    id: 3233,
    src: 'https://placehold.co/500x680',
    placeholderSrc: 'https://placehold.co/250x340',
    alt: 'one video',
    href: '/',
    text: 'one video',
  },
  {
    id: 3234,
    src: 'https://placehold.co/500x680',
    placeholderSrc: 'https://placehold.co/250x340',
    alt: 'one video with credits',
    href: '/',
    text: 'one video with credits',
  },
  {
    id: 3235,
    src: 'https://placehold.co/500x680',
    placeholderSrc: 'https://placehold.co/250x340',
    alt: 'two videos',
    href: '/',
    text: 'two videos',
  },
];

export default function Page() {
  return (
    <main className={cn('flex justify-center md:items-center', 'min-h-dvh p-4')}>
      <nav className={cn('grid grid-cols-1 md:grid-cols-2 md:gap-4', 'w-full md:max-w-[1024px]')}>
        {blurImages.map(({ id, src, placeholderSrc, alt, href, text }) => (
          <article className="flex flex-col items-center justify-center" key={id}>
            <div className="relative h-[480px] w-full md:h-[680px]">
              <ProgressiveImage
                fill
                src={src}
                placeholdersrc={placeholderSrc}
                className="object-contain"
                alt={alt}
                draggable={false}
                unoptimized={
                  text === 'pdf' ||
                  text === 'one video' ||
                  text === 'one video with credits' ||
                  text === 'two videos'
                }
              />
            </div>
            <Button
              asChild
              variant="outline-transparent"
              rounded="full"
              className="px-4 text-lg"
              size="lg"
            >
              <Link href={href}>{text}</Link>
            </Button>
          </article>
        ))}
      </nav>
    </main>
  );
}
