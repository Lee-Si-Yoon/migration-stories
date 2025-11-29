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
    alt: 'Seed Workshop',
    href: '/video/1089614890',
    text: 'Seed Workshop',
  },
  {
    id: 3236,
    src: 'https://placehold.co/500x680',
    placeholderSrc: 'https://placehold.co/250x340',
    alt: 'to 2025',
    href: '/video/1136731489',
    text: 'to 2025',
  },
  {
    id: 3235,
    src: 'https://placehold.co/500x680',
    placeholderSrc: 'https://placehold.co/250x340',
    alt: 'Balan',
    href: '/videos/1089577016,1089591185',
    text: 'Balan',
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
                  text === 'Balan' ||
                  text === 'to 2025' ||
                  text === 'Seed Workshop'
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
