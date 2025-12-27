'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

import { ScaleAdjuster } from '@/widgets/pdf/scale-adjuster.client';
import { ModeSelector } from '@/widgets/pdf/view-mode-selector.client';
import { cn } from '@/shared/cn';

export function Header() {
  const { id } = useParams();
  const pathname = usePathname();
  const isInCredit = pathname.includes('credit');

  return (
    <div className="sticky top-0 z-10 flex items-center justify-between bg-black px-6 py-5">
      <Link href="/" className="text-sm md:text-base">
        뒤로가기
      </Link>
      <div className="flex items-center gap-2 md:gap-4">
        <Link
          href={`${isInCredit ? `/pdf/${id}` : `/pdf/${id}/credit`}`}
          className={cn(
            'text-sm hover:underline md:text-base',
            isInCredit ? 'font-bold underline underline-offset-4' : ''
          )}
        >
          credit
        </Link>
        <ModeSelector />
        <div className="hidden md:block">
          <ScaleAdjuster />
        </div>
      </div>
    </div>
  );
}
