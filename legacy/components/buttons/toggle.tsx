import React from "react";
import {
  type AriaToggleButtonProps,
  useFocusRing,
  useToggleButton,
  mergeProps,
} from "react-aria";
import { useToggleState } from "react-stately";

import classes from "./button.module.scss";

interface ToggleProps extends AriaToggleButtonProps {
  className?: string;
}

function Toggle(props: ToggleProps): React.JSX.Element {
  const { className, children = "-" } = props;

  const ariaRef = React.useRef<HTMLButtonElement>(null);
  const state = useToggleState(props);
  const { buttonProps, isPressed } = useToggleButton(props, state, ariaRef);

  const { isFocusVisible, focusProps } = useFocusRing();
  const mergedProps = mergeProps(focusProps, buttonProps);

  return (
    <button
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
      {...mergedProps}
    >
      {children}
    </button>
  );
}

export type ToggleType = typeof Toggle;

Toggle.displayName = "Toggle";

export default Toggle;
