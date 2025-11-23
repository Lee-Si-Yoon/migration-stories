import Link from 'next/link';

import Paths from '@/features/routes/model';
import type { Year } from '@/features/routes';

function Logo({ year }: { year: Year }) {
  const logoConfig = {
    '22': { src: '/imgs/logo/logo22.webp', width: 50 },
    '23': { src: '/imgs/logo/logo23-min.webp', width: 60 },
  };

  const config = logoConfig[year];

  return (
    <Link href={Paths.default} key={`logo`}>
      <img src={config.src} alt="logo" draggable={false} width={config.width} />
    </Link>
  );
}

function HeaderContent({ year, children }: { year: Year; children: React.ReactNode }) {
  return (
    <nav className="fixed top-0 z-[999] flex h-32 w-full items-center justify-between bg-transparent md:h-24 [&>ul]:p-10 md:[&>ul]:p-4">
      <ul>
        <Logo year={year} />
      </ul>
      <ul className="flex list-none items-center gap-10 md:gap-8">{children}</ul>
    </nav>
  );
}

export { HeaderContent };
