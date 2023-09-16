import { motion } from "framer-motion";
import React from "react";

import classes from "./button.module.scss";

type ButtonBaseProps = {
  className?: string;
  onClick?: VoidFunction;
} & React.PropsWithChildren;

function Button(
  { children = "-", onClick, className, ...rest }: ButtonBaseProps,
  ref: React.Ref<HTMLButtonElement>
): React.JSX.Element {
  return (
    <motion.button
      ref={ref}
      {...rest}
      onClick={onClick}
      className={[classes.Button, className].join(" ")}
    >
      {children}
    </motion.button>
  );
}

export type ButtonType = typeof Button;

const ButtonComponent = React.forwardRef(Button);

ButtonComponent.displayName = "Button";

export default motion(Button, { forwardMotionProps: true });
