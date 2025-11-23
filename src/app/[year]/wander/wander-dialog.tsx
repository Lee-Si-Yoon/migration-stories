import React from 'react';
import { useDialog, type AriaDialogProps } from 'react-aria';

import { cn } from '@/shared/cn';

interface DialogProps extends AriaDialogProps {
  children: React.ReactNode;
  className?: string;
}

function WanderDialog22({ children, ...props }: DialogProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { dialogProps, titleProps } = useDialog(
    {
      ...props,
      role: 'alertdialog',
    },
    ref
  );

  return (
    <div {...dialogProps} ref={ref} className="flex flex-col items-center">
      <div
        className={cn('flex flex-col items-center text-center', props.className)}
        {...titleProps}
      >
        {children}
      </div>
    </div>
  );
}

WanderDialog22.displayName = 'WanderDialog22';

export default WanderDialog22;
