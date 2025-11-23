import { notFound } from 'next/navigation';
import { Header } from '@/widgets/layout/header';
import { VALID_YEARS, isValidYear } from '@/features/routes';

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
        <Header year={year} />
      </header>
      <main>{children}</main>
    </>
  );
}
