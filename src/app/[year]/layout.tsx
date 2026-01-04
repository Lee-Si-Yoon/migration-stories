import { notFound } from 'next/navigation';

import { VALID_YEARS, isValidYear } from '@/features/routes';

import { HeaderContent } from './header';
import { AboutLink, CreditLink, ProgramLink } from './header-items.client';

export async function generateStaticParams() {
  return VALID_YEARS.map((year) => ({ year }));
}

export default async function YearLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;

  if (!isValidYear(year)) {
    notFound();
  }

  return (
    <>
      <header>
        <HeaderContent year={year}>
          {year === '23' && <ProgramLink year={year} />}
          <AboutLink year={year} />
          <CreditLink year={year} />
        </HeaderContent>
      </header>
      <main>{children}</main>
    </>
  );
}
