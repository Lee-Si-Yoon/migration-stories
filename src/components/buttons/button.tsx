import React from "react";
import { useButton, type AriaButtonOptions, useFocusRing } from "react-aria";

import classes from "./button.module.scss";
import type { OverridableProps } from "../../utils/polymorphic-type";

type ButtonBaseProps = {
  className?: string;
} & React.PropsWithChildren;
type ButtonProps<T extends React.ElementType> = OverridableProps<
  T,
  ButtonBaseProps
> &
  AriaButtonOptions<"button">;

function Button<T extends React.ElementType = "button">(
  props: ButtonProps<T>
): React.JSX.Element {
  const { as, className, children = "-", ...rest } = props;
  const Component = as ?? "button";

  const ariaRef = React.useRef<HTMLButtonElement>(null);
  let { buttonProps } = useButton(
    {
      ...props,
      elementType: Component,
    },
    ariaRef
  );
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <Component
      ref={ariaRef}
      className={[classes.Button, className].join(" ")}
      style={{
        outline: isFocusVisible ? "2px solid gray" : "none",
        outlineOffset: 2,
      }}
      {...rest}
      {...buttonProps}
      {...focusProps}
    >
      {children}
    </Component>
  );
}

export type ButtonType = typeof Button;

Button.displayName = "Button";

export default Button;
