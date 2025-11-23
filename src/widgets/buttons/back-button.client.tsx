'use client';

import { useRouter } from 'next/navigation';
import Button from './button';

export function BackButton() {
  const router = useRouter();

  return (
    <Button
      onPress={() => {
        router.back();
      }}
      className="z-[999] mt-24 md:mt-32"
    >
      <XCancelIcon className="h-6 w-6" />
    </Button>
  );
}

function XCancelIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
