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
    id: 0,
    src: '/imgs/logo/logo25.webp',
    placeholderSrc: '/imgs/logo/logo25.webp',
    alt: 'to 2025',
    href: '/video/1136731489',
    text: 'to 2025',
  },
  {
    id: 1,
    src: '/imgs/logo/migration-project-research.webp',
    placeholderSrc: '/imgs/logo/migration-project-research.webp',
    alt: 'migration-project-research.webp',
    href: '/pdf/migration-project-research',
    text: 'Migration Project Research',
  },
  {
    id: 2,
    src: '/imgs/logo/unhomely-map.webp',
    placeholderSrc: '/imgs/logo/unhomely-map.webp',
    alt: 'unhomely-map.webp',
    href: '/pdf/unhomely-map',
    text: 'Unhomely Map',
  },
  {
    id: 3,
    src: '/imgs/logo/seed-workshop.webp',
    placeholderSrc: '/imgs/logo/seed-workshop.webp',
    alt: 'seed-workshop.webp',
    href: '/video/1089614890',
    text: 'Seed Workshop',
  },
  {
    id: 4,
    src: '/imgs/logo/ayubowan.webp',
    placeholderSrc: '/imgs/logo/ayubowan.webp',
    alt: 'ayubowan.webp',
    href: '#',
    text: 'Ayubowan',
  },
  {
    id: 5,
    src: '/imgs/logo/home-sound-day.webp',
    placeholderSrc: '/imgs/logo/home-sound-day.webp',
    alt: 'home-sound-day.webp',
    href: '#',
    text: 'Home Sound Day',
  },
  {
    id: 6,
    src: '/imgs/logo/the-yatry.webp',
    placeholderSrc: '/imgs/logo/the-yatry.webp',
    alt: 'the-yatry.webp',
    href: '#',
    text: 'The Yatry',
  },
  {
    id: 7,
    src: '/imgs/logo/welcome-home.webp',
    placeholderSrc: '/imgs/logo/welcome-home.webp',
    alt: 'welcome-home.webp',
    href: '#',
    text: 'Welcome Home',
  },
  {
    id: 8,
    src: '/imgs/logo/local-strange.gif',
    placeholderSrc: '/imgs/logo/local-strange.gif',
    alt: 'local-strange.gif',
    href: '#',
    text: 'Local Strange',
  },
  {
    id: 999,
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
            <div className="relative h-[480px] aspect-3/4 md:h-[680px]">
              <ProgressiveImage
                fill
                src={src}
                placeholdersrc={placeholderSrc}
                className={cn("object-contain", text === 'Local Strange' && 'p-4')}
                alt={alt}
                draggable={false}
                unoptimized={
                  text === 'Balan'
                  || text === 'Local Strange'
                }
                sizes="(max-width: 768px) 100vw, 50vw"
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
