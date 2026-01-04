'use client';

import { usePathname } from 'next/navigation';
import { ErrorBoundary } from '@/widgets/error';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const pathname = usePathname();
  // Extract year from pathname (e.g., /22/wander -> 22)
  const year = pathname.split('/')[1] as '22' | '23';
  const returnPath = `/${year}/wander`;

  return (
    <ErrorBoundary error={error} reset={reset} returnPath={returnPath} returnLabel="Go back" />
  );
}
