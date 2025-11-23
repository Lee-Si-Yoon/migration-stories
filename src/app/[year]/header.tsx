import Link from 'next/link';
import Image from 'next/image';

import Paths from '@/features/routes/model';
import type { Year } from '@/features/routes';
import { cn } from '@/shared/cn';

function Logo({ year }: { year: Year }) {
  const logoConfig = {
    '22': { src: '/imgs/logo/logo22.webp', width: 50, height: 62.5, alt: 'logo22.png' },
    '23': { src: '/imgs/logo/logo23-min.webp', width: 60, height: 60, alt: 'logo23.png' },
  };

  const config = logoConfig[year];

  return (
    <Link href={Paths.default}>
      <Image
        src={config.src}
        alt={config.alt}
        draggable={false}
        width={config.width}
        height={config.height}
      />
    </Link>
  );
}

export function HeaderContent({ year, children }: { year: Year; children: React.ReactNode }) {
  return (
    <nav className={cn('sticky top-0 right-0 left-0 z-[999]', 'flex justify-between p-8')}>
      <Logo year={year} />
      <ul className="flex list-none items-center gap-10">{children}</ul>
    </nav>
  );
}
