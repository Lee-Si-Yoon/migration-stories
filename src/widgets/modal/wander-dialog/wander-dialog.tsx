import React from 'react';
import { useDialog, type AriaDialogProps } from 'react-aria';

import classes from './wander-dialog.module.scss';

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
    <div {...dialogProps} ref={ref} className={classes.Dialog}>
      <div className={[props.className, classes.Content].join(' ')} {...titleProps}>
        {children}
      </div>
    </div>
  );
}

WanderDialog22.displayName = 'WanderDialog22';

export default WanderDialog22;
