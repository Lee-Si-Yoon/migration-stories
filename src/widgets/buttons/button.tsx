import React from 'react';
import { Button as ShadcnButton } from '@/components/ui/button';
import { cn } from '@/shared/cn';

interface ButtonProps extends React.ComponentProps<'button'> {
  onPress?: () => void;
  className?: string;
}

function Button({ onPress, onClick, className, children = '-', ...props }: ButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    onPress?.();
  };

  return (
    <ShadcnButton
      onClick={handleClick}
      className={cn(
        'flex cursor-pointer items-center justify-center rounded-full border border-white bg-transparent p-2 text-xl leading-[150%] whitespace-nowrap text-white md:text-base',
        'transition-all duration-500 ease-out hover:bg-white hover:text-black',
        'active:scale-[0.975]',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500',
        className
      )}
      {...props}
    >
      {children}
    </ShadcnButton>
  );
}

export type ButtonType = typeof Button;

Button.displayName = 'Button';

export default Button;
