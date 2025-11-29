import Link from 'next/link';

export default function VideoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-dvh w-full">
      <div className="sticky top-0 z-10 flex justify-between px-6 py-5">
        <Link href="/" className="text-sm md:text-base">
          뒤로가기
        </Link>
      </div>
      <article className="absolute inset-0 flex items-center justify-center">{children}</article>
    </div>
  );
}
