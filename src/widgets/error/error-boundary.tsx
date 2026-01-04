'use client';

import Link from 'next/link';
import { useEffect } from 'react';

interface ErrorBoundaryProps {
  error: Error & { digest?: string };
  reset: () => void;
  returnPath?: string;
  returnLabel?: string;
}

export function ErrorBoundary({
  error,
  reset,
  returnPath = '/',
  returnLabel = 'Go home',
}: ErrorBoundaryProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4">
      <div className="flex max-w-md flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold text-white">Oops!</h1>
        <p className="text-xl text-gray-300">Sorry, an unexpected error has occurred.</p>
        {error.message && <p className="text-sm text-gray-400 italic">{error.message}</p>}
        <div className="flex gap-4">
          <button
            onClick={() => reset()}
            className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-200"
          >
            Try again
          </button>
          <Link
            href={returnPath}
            className="rounded-lg border border-white px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
          >
            {returnLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
