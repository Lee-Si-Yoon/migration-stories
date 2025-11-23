import { programs } from '@/features/program/data/programs-23';
import { ProgramList } from '@/widgets/program/program-list.client';
import Paths from '@/features/routes/model';

export default function ProgramPage() {
  return <ProgramList programs={programs} basePath={Paths[23].program} />;
}
