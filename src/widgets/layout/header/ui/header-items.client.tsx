'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Paths } from '@/features/routes';
import { cn } from '@/shared/cn';

import classes from './header-items.module.scss';

function AboutLink({ year }: { year: 22 | 23 }) {
  const pathname = usePathname();

  return (
    <li key={`${year}-about`} className={classes.Link}>
      <Link href={Paths[year].about} className={cn(pathname === Paths[year].about && 'font-bold')}>
        about
      </Link>
    </li>
  );
}

function CreditLink({ year }: { year: 22 | 23 }) {
  const pathname = usePathname();

  return (
    <li key={`${year}-credit`} className={classes.Link}>
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
    <li key={'program'} className={classes.Link}>
      <Link href={Paths[23].program} className={cn(pathname === Paths[23].program && 'font-bold')}>
        program
      </Link>
    </li>
  );
}

export { AboutLink, CreditLink, ProgramLink };
