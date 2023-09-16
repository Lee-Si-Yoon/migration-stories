import React from "react";
import {
  type AriaToggleButtonProps,
  useFocusRing,
  useToggleButton,
} from "react-aria";
import { useToggleState } from "react-stately";

import classes from "./button.module.scss";
import type { OverridableProps } from "../../utils/polymorphic-type";

type ToggleBaseProps = {
  className?: string;
} & React.PropsWithChildren;
type ButtonProps<T extends React.ElementType> = OverridableProps<
  T,
  ToggleBaseProps
> &
  AriaToggleButtonProps<"button">;

function Toggle<T extends React.ElementType = "button">(
  props: ButtonProps<T>
): React.JSX.Element {
  const { as, className, children = "-", ...rest } = props;
  const Component = as ?? "button";

  const ariaRef = React.useRef<HTMLButtonElement>(null);
  const state = useToggleState(props);
  const { buttonProps, isPressed } = useToggleButton(props, state, ariaRef);

  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <Component
      ref={ariaRef}
      className={[classes.Button, className].join(" ")}
      style={{
        outline: isFocusVisible ? "2px solid gray" : "none",
        outlineOffset: 2,
        background: isPressed
          ? state.isSelected
            ? "white"
            : "gray"
          : state.isSelected
          ? "white"
          : "black",
        color: state.isSelected ? "black" : "white",
      }}
      {...rest}
      {...buttonProps}
      {...focusProps}
    >
      {children}
    </Component>
  );
}

export type ToggleType = typeof Toggle;

Toggle.displayName = "Toggle";

export default Toggle;
