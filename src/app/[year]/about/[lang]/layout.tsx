import { cn } from '@/shared/cn';

export default function AboutLangLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        'mx-auto flex flex-col items-center',
        'mt-36 gap-y-8 p-4 md:pt-0 md:pr-4 md:pl-0',
        'max-w-[900px]'
      )}
    >
      {children}
    </div>
  );
}
