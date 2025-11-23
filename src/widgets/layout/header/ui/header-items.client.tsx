'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Paths } from '@/features/routes';
import { cn } from '@/shared/cn';

const linkClassName = 'transition-transform duration-200 ease-in-out hover:-translate-y-0.5';

function AboutLink({ year }: { year: 22 | 23 }) {
  const pathname = usePathname();

  return (
    <li key={`${year}-about`} className={linkClassName}>
      <Link href={Paths[year].about} className={cn(pathname === Paths[year].about && 'font-bold')}>
        about
      </Link>
    </li>
  );
}

function CreditLink({ year }: { year: 22 | 23 }) {
  const pathname = usePathname();

  return (
    <li key={`${year}-credit`} className={linkClassName}>
      <Link
        href={Paths[year].credit}
        className={cn(pathname === Paths[year].credit && 'font-bold')}
      >
        credit
      </Link>
    </li>
  );
}

function ProgramLink() {
  const pathname = usePathname();

  return (
    <li key={'program'} className={linkClassName}>
      <Link href={Paths[23].program} className={cn(pathname === Paths[23].program && 'font-bold')}>
        program
      </Link>
    </li>
  );
}

export { AboutLink, CreditLink, ProgramLink };
