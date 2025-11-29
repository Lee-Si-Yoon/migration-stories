import Link from 'next/link';

export default function VideoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-screen flex-col">
      <div className="sticky top-0 z-10 flex items-center justify-between bg-black px-6 py-5">
        <Link href="/" className="text-sm md:text-base">
          뒤로가기
        </Link>
      </div>
      <article className="mx-auto flex w-full max-w-7xl flex-1 items-center justify-center">
        {children}
      </article>
    </div>
  );
}
