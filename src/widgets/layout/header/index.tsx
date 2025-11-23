import { HeaderContent } from './ui';
import { AboutLink, CreditLink, ProgramLink } from './ui/header-items.client';
import type { Year } from '@/features/routes';

export function Header({ year }: { year: Year }) {
  return (
    <HeaderContent year={year}>
      {year === '23' && <ProgramLink year={year} />}
      <AboutLink year={year} />
      <CreditLink year={year} />
    </HeaderContent>
  );
}

// Backward compatibility exports
export function Header22() {
  return <Header year="22" />;
}

export function Header23() {
  return <Header year="23" />;
}
