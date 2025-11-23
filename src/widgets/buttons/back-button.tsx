import Link from 'next/link';
import { X } from 'lucide-react';
import { cn } from '@/shared/cn';

export function BackButton() {
  return (
    <Link
      href=".."
      className={cn(
        'z-[999] mt-24 md:mt-32',
        'flex items-center justify-center',
        'rounded-full border border-white',
        'p-2 transition-colors hover:bg-white hover:text-black'
      )}
    >
      <X className="h-6 w-6" />
    </Link>
  );
}
