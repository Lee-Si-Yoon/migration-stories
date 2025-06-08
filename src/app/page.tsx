import { Metadata } from 'next';
import Link from 'next/link';

import { cn } from '@/shared/cn';
import ProgressiveImg from '@/widgets/utils/progressive-image';
import { Paths } from '@/features/routes';
import { buttonVariants } from '@/widgets/buttons';

export const metadata: Metadata = {
  title: 'Migration Stories',
  description: 'migration stories',
};

const imageClasses = cn('h-auto select-none', 'min-[1280px]:h-[40rem] min-[1280px]:w-auto');
const articleClasses = cn('flex flex-1 flex-col items-center', 'min-[1280px]:pt-0');

export default function Page() {
  return (
    <main className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">
      <nav
        className={cn(
          'flex flex-col',
          'min-[1280px]:mx-auto min-[1280px]:w-[80rem] min-[1280px]:flex-row min-[1280px]:items-center'
        )}
      >
        <article className={articleClasses}>
          <ProgressiveImg
            placeholderSrc={'/imgs/logo/logo22-min.webp'}
            src={'/imgs/logo/logo22.webp'}
            alt="logo22.png"
            className={imageClasses}
          />
          <Link
            href={Paths[22].wander}
            className={cn(buttonVariants({ variant: 'default' }), 'mt-1')}
          >
            to 2022
          </Link>
        </article>
        <article className={articleClasses}>
          <ProgressiveImg
            placeholderSrc={'/imgs/logo/logo23-min.webp'}
            src={'/imgs/logo/logo23.webp'}
            alt="logo22.png"
            className={imageClasses}
          />
          <Link
            href={Paths[23].wander}
            className={cn(buttonVariants({ variant: 'default' }), 'mt-1')}
          >
            to 2023
          </Link>
        </article>
      </nav>
    </main>
  );
}
