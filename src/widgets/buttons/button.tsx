import React from 'react';
import { useButton, type AriaButtonProps, useFocusRing, mergeProps } from 'react-aria';

import { cn } from '@/shared/cn';

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
      className={cn(
        'flex cursor-pointer items-center justify-center rounded-full border border-white bg-transparent p-2 text-xl leading-[150%] whitespace-nowrap text-white md:text-base',
        'transition-all duration-500 ease-out hover:bg-white hover:text-black',
        'active:scale-[0.975]',
        className
      )}
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
