import { redirect } from 'next/navigation';

import { Paths } from '@/features/routes';

export default function Page() {
  redirect(Paths[23].wander);
}
