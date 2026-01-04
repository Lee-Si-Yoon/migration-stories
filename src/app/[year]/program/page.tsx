import { notFound } from 'next/navigation';

import { ProgramList } from './program-list.client';

export default async function ProgramPage({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;
  const yearKey = year as '22' | '23';

  // Program is only available for 2023
  if (yearKey !== '23') {
    notFound();
  }

  return <ProgramList />;
}
