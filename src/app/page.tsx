import { Metadata } from 'next';
import Link from 'next/link';

import { cn } from '@/shared/cn';
import { Paths } from '@/features/routes';
import { buttonVariants } from '@/widgets/buttons';
import Image from 'next/image';

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
    <main className="flex h-screen flex-col items-center justify-center p-4">
      <nav className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {blurImages.map(({ src, placeholderSrc, alt, href, text }) => (
          <article className="flex flex-col items-center justify-center" key={href}>
            <div className="relative w-screen md:h-[680px] md:w-[640px]">
              <Image
                fill
                className="object-contain"
                src={src}
                alt={alt}
                placeholder="blur"
                draggable={false}
                // preload image
                blurDataURL={placeholderSrc} // make it better
                // sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <Link href={href} className={cn(buttonVariants({ variant: 'default' }))}>
              {text}
            </Link>
          </article>
        ))}
      </nav>
    </main>
  );
}
