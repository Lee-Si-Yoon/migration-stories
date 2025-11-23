import React from 'react';
import { cn } from '@/shared/cn';

interface DialogProps {
  children: React.ReactNode;
  className?: string;
}

function WanderDialog22({ children, className }: DialogProps) {
  return (
    <div role="alertdialog" className="flex flex-col items-center">
      <div className={cn('flex flex-col items-center text-center', className)}>{children}</div>
    </div>
  );
}

WanderDialog22.displayName = 'WanderDialog22';

export default WanderDialog22;
