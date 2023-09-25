import React from "react";
import { useDialog, type AriaDialogProps } from "react-aria";

import classes from "./wander-dialog.module.scss";
import Button from "../buttons/button";

interface DialogProps extends AriaDialogProps {
  children: React.ReactNode;
  onClose: () => void;
  onSubmit: () => void;
  className?: string;
}

function WanderDialog({ children, onClose, onSubmit, ...props }: DialogProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { dialogProps, titleProps } = useDialog(
    {
      ...props,
      role: "alertdialog",
    },
    ref
  );

  return (
    <div {...dialogProps} ref={ref} className={classes.Dialog}>
      <div
        className={[props.className, classes.Content].join(" ")}
        {...titleProps}
      >
        {children}
      </div>
      <div className={classes.ButtonWrapper}>
        <Button onPress={() => onSubmit()} className={classes.ConfirmButton}>
          스토리 보기
        </Button>
        <Button onPress={() => onClose()} className={classes.CloseButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width={24}
            height={24}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}

WanderDialog.displayName = "WanderDialog";

export default WanderDialog;
