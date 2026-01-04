'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Paths from '@/features/routes/model';
import type { Year } from '@/features/routes';
import { cn } from '@/shared/cn';

const linkClassName = cn('transition-transform duration-200 ease-in-out', 'hover:-translate-y-0.5');

function AboutLink({ year }: { year: Year }) {
  const pathname = usePathname();
  const paths = Paths(year);

  return (
    <li className={linkClassName}>
      <Link href={paths.about} className={cn(pathname.includes(paths.about) ? 'font-bold' : '')}>
        about
      </Link>
    </li>
  );
}

function CreditLink({ year }: { year: Year }) {
  const pathname = usePathname();
  const paths = Paths(year);

  return (
    <li className={linkClassName}>
      <Link href={paths.credit} className={cn(pathname.includes(paths.credit) ? 'font-bold' : '')}>
        credit
      </Link>
    </li>
  );
}

function ProgramLink({ year }: { year: Year }) {
  const pathname = usePathname();

  if (year !== '23') return null;

  const paths = Paths('23'); // Explicitly call with '23' for type safety

  return (
    <li className={linkClassName}>
      <Link
        href={paths.program}
        className={cn(pathname.includes(paths.program) ? 'font-bold' : '')}
      >
        program
      </Link>
    </li>
  );
}

export { AboutLink, CreditLink, ProgramLink };
