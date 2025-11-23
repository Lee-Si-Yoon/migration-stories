import { notFound } from 'next/navigation';
import { ProgramList } from '@/widgets/program/program-list.client';
import Paths from '@/features/routes/model';
import programsData from './[programId]/programs-23.json';

interface ProgramJSON {
  [key: string]: string | number | undefined;
  id: number;
  imgSrc: string;
  videoSrc: string;
}

const programs: ProgramJSON[] = programsData as ProgramJSON[];

export default async function ProgramPage({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;
  const yearKey = year as '22' | '23';

  // Program is only available for 2023
  if (yearKey !== '23') {
    notFound();
  }

  return <ProgramList programs={programs} basePath={Paths(yearKey).program} />;
}
