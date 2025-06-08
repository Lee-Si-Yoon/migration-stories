import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/cn';

const buttonVariants = cva(
  cn(
    'text-white border border-white rounded-4xl cursor-pointer',
    'hover:bg-white hover:text-black',
    'active:scale-95',
    'transition-all duration-300',
    'text-lg md:text-base'
  ),
  {
    variants: {
      variant: {
        default: 'p-2',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

function Button({
  className,
  variant,
  ...props
}: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants>) {
  return <button className={cn(buttonVariants({ variant }), className)} {...props} />;
}

export { Button, buttonVariants };
