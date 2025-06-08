import Link from 'next/link';

import { Paths } from '@/features/routes';

import classes from './header.module.scss';

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
    <nav className={classes.NavContainer}>
      <ul>
        <Logo22 />
      </ul>
      <ul className={classes.LinkContainer}>{children}</ul>
    </nav>
  );
}

function HeaderContent23({ children }: { children: React.ReactNode }) {
  return (
    <nav className={classes.NavContainer}>
      <ul>
        <Logo23 />
      </ul>
      <ul className={classes.LinkContainer}>{children}</ul>
    </nav>
  );
}

export { HeaderContent22, HeaderContent23 };
