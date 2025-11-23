'use client';

import { ErrorBoundary } from '@/widgets/error';

export default function Error22({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorBoundary error={error} reset={reset} returnPath="/22/wander" returnLabel="Go back" />
  );
}
