'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Paths from '@/features/routes/model';
import type { Year } from '@/features/routes';
import { cn } from '@/shared/cn';

const linkClassName = 'transition-transform duration-200 ease-in-out hover:-translate-y-0.5';

function AboutLink({ year }: { year: Year }) {
  const pathname = usePathname();
  const paths = Paths(year);

  return (
    <li key={`${year}-about`} className={linkClassName}>
      <Link href={paths.about} className={cn(pathname === paths.about && 'font-bold')}>
        about
      </Link>
    </li>
  );
}

function CreditLink({ year }: { year: Year }) {
  const pathname = usePathname();
  const paths = Paths(year);

  return (
    <li key={`${year}-credit`} className={linkClassName}>
      <Link href={paths.credit} className={cn(pathname === paths.credit && 'font-bold')}>
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
    <li key={'program'} className={linkClassName}>
      <Link href={paths.program} className={cn(pathname === paths.program && 'font-bold')}>
        program
      </Link>
    </li>
  );
}

export { AboutLink, CreditLink, ProgramLink };
