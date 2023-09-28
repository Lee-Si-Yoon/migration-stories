import React from "react";
import { useDialog, type AriaDialogProps } from "react-aria";

import classes from "./headphone-request-dialog.module.scss";
import Button from "../../buttons/button";

interface DialogProps extends AriaDialogProps {
  onSubmit: () => void;
}

function HeadphoneRequestDialog({ onSubmit, ...props }: DialogProps) {
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
      <div className={[classes.Content].join(" ")} {...titleProps}>
        <h1>이야기를 재생하시겠습니까?</h1>
        <h4>(헤드폰이 있다면 헤드폰을 착용하세요)</h4>
      </div>
      <div className={classes.ButtonWrapper}>
        <Button onPress={() => onSubmit()} className={classes.ConfirmButton}>
          네
        </Button>
      </div>
    </div>
  );
}

HeadphoneRequestDialog.displayName = "HeadphoneRequestDialog";

export default HeadphoneRequestDialog;
