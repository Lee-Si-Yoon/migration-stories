'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

import { cn } from '@/shared/cn';

export default function VideoLayout({ children }: { children: React.ReactNode }) {
  const { ids } = useParams();
  const decodedIds = decodeURIComponent(ids as string);
  const pathname = usePathname();
  const isInCredit = pathname.includes('credit');

  return (
    <div className="relative flex h-screen flex-col">
      <div className="sticky top-0 z-10 flex items-center justify-between bg-black px-6 py-5">
        <Link href="/" className="text-sm md:text-base">
          뒤로가기
        </Link>
        <Link
          href={isInCredit ? `/videos/${decodedIds}` : `/videos/${decodedIds}/credit`}
          className={cn(isInCredit ? 'font-bold underline underline-offset-4' : 'hover:underline')}
        >
          credit
        </Link>
      </div>
      <article>{children}</article>
    </div>
  );
}
