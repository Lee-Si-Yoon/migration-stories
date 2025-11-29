import { cn } from '@/shared/cn';

export default function ProgramLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        'mx-auto flex flex-col items-center',
        'mt-36 gap-y-8 p-4 md:p-0 md:pb-4',
        'max-w-[1024px]'
      )}
    >
      {children}
    </div>
  );
}
