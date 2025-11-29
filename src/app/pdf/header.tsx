import Link from 'next/link';

import { ScaleAdjuster } from '@/widgets/pdf/scale-adjuster.client';
import { ModeSelector } from '@/widgets/pdf/view-mode-selector.client';

export function Header() {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between bg-black px-6 py-5">
      <Link href="/" className="text-sm md:text-base">
        뒤로가기
      </Link>
      <div className="flex items-center gap-2 md:gap-4">
        <ModeSelector />
        <ScaleAdjuster />
      </div>
    </div>
  );
}
