import React from 'react';
import { useButton, type AriaButtonProps, useFocusRing, mergeProps } from 'react-aria';

import classes from './button.module.scss';

interface ButtonProps extends AriaButtonProps {
  className?: string;
}

function Button(props: ButtonProps) {
  const { className, children = '-' } = props;

  const ariaRef = React.useRef<HTMLButtonElement>(null);
  let { buttonProps } = useButton(props, ariaRef);
  const { isFocusVisible, focusProps } = useFocusRing();
  const mergedProps = mergeProps(focusProps, buttonProps);

  return (
    <button
      ref={ariaRef}
      className={[classes.Button, className].join(' ')}
      style={{
        outline: isFocusVisible ? '2px solid gray' : 'none',
        outlineOffset: 2,
      }}
      {...mergedProps}
    >
      {children}
    </button>
  );
}

export type ButtonType = typeof Button;

Button.displayName = 'Button';

export default Button;
