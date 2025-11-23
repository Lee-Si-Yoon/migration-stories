'use client';

import Image from 'next/image';
import { useState } from 'react';

import { cn } from '@/shared/cn';

interface ProgressiveImageProps
  extends Omit<React.ComponentProps<typeof Image>, 'src' | 'priority'> {
  placeholdersrc: string;
  src: string;
}

export function ProgressiveImage(props: ProgressiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Image
        {...props}
        className={cn(
          'transition-opacity duration-500',
          isLoaded ? 'opacity-0' : `opacity-100 blur-[30px]`,
          isLoaded ? 'hidden' : 'block',
          props.className
        )}
        priority
        src={props.placeholdersrc}
      />
      <Image
        {...props}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          'transition-opacity duration-500',
          isLoaded ? 'opacity-100' : 'opacity-0',
          props.className
        )}
        src={props.src}
      />
    </>
  );
}
