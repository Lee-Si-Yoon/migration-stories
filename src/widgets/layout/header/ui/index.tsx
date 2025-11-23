import Link from 'next/link';

import { Paths } from '@/features/routes';

function Logo22() {
  return (
    <Link href={Paths.default} key={`logo`}>
      <img src="/imgs/logo/logo22.webp" alt="logo" draggable={false} width={50} />
    </Link>
  );
}

function Logo23() {
  return (
    <Link href={Paths.default} key={`logo`}>
      <img src="/imgs/logo/logo23-min.webp" alt="logo" draggable={false} width={60} />
    </Link>
  );
}

function HeaderContent22({ children }: { children: React.ReactNode }) {
  return (
    <nav className="fixed top-0 z-[999] flex h-32 w-full items-center justify-between bg-transparent md:h-24 [&>ul]:p-10 md:[&>ul]:p-4">
      <ul>
        <Logo22 />
      </ul>
      <ul className="flex list-none items-center gap-10 md:gap-8">{children}</ul>
    </nav>
  );
}

function HeaderContent23({ children }: { children: React.ReactNode }) {
  return (
    <nav className="fixed top-0 z-[999] flex h-32 w-full items-center justify-between bg-transparent md:h-24 [&>ul]:p-10 md:[&>ul]:p-4">
      <ul>
        <Logo23 />
      </ul>
      <ul className="flex list-none items-center gap-10 md:gap-8">{children}</ul>
    </nav>
  );
}

export { HeaderContent22, HeaderContent23 };
