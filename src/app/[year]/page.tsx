import { redirect } from 'next/navigation';
import Paths from '@/features/routes/model';

export default async function YearPage({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;
  const yearKey = year as '22' | '23';
  redirect(Paths(yearKey).wander);
}
