import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@/shared/cn';
import { Paths } from '@/features/routes';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Migration Stories',
  description: 'migration stories',
};

const blurImages = [
  {
    src: '/imgs/logo/logo22.webp',
    placeholderSrc: '/imgs/logo/logo22-min.webp',
    alt: 'logo22.png',
    href: Paths[22].wander,
    text: 'to 2022',
  },
  {
    src: '/imgs/logo/logo23.webp',
    placeholderSrc: '/imgs/logo/logo23-min.webp',
    alt: 'logo23.png',
    href: Paths[23].wander,
    text: 'to 2023',
  },
];

export default function Page() {
  return (
    <main className={cn('flex justify-center md:items-center', 'min-h-dvh p-4')}>
      <nav className={cn('grid grid-cols-1 md:grid-cols-2 md:gap-4', 'w-full md:max-w-[1280px]')}>
        {blurImages.map(({ src, placeholderSrc, alt, href, text }) => (
          <article className="flex flex-col items-center justify-center" key={href}>
            <div className="relative h-[480px] w-full md:h-[680px]">
              <Image
                fill
                className="object-contain"
                src={src}
                alt={alt}
                placeholder="blur"
                draggable={false}
                priority
                blurDataURL={placeholderSrc}
              />
            </div>
            <Button
              asChild
              variant="outline"
              className={cn(
                'rounded-full bg-transparent px-4',
                'active:scale-95',
                'text-lg font-normal'
              )}
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
