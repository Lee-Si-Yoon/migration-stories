import React from "react";
import { useDialog, type AriaDialogProps } from "react-aria";

import Button from "../buttons/button";

interface DialogProps extends AriaDialogProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
  onSubmit: () => void;
  className?: string;
}

function WanderDialog({
  children,
  title,
  onClose,
  onSubmit,
  ...props
}: DialogProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { dialogProps, titleProps } = useDialog(
    {
      ...props,
      role: "alertdialog",
    },
    ref
  );

  return (
    <div {...dialogProps} ref={ref}>
      {title && (
        <h3 {...titleProps} style={{ marginTop: 0 }}>
          {title}
        </h3>
      )}
      <div className={props.className}>{children}</div>
      <div>
        <Button onPress={() => onClose()}>close</Button>
        <Button onPress={() => onSubmit()}>confirm</Button>
      </div>
    </div>
  );
}

WanderDialog.displayName = "WanderDialog";

export default WanderDialog;
