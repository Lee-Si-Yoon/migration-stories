'use client';

import { m } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimatedImageProps {
  children: ReactNode;
}

export function AnimatedImage({ children }: AnimatedImageProps) {
  return (
    <m.div initial={{ x: 150 }} animate={{ x: 0 }} transition={{ duration: 0.5, ease: 'linear' }}>
      {children}
    </m.div>
  );
}

interface AnimatedTextProps {
  children: ReactNode;
}

export function AnimatedText({ children }: AnimatedTextProps) {
  return (
    <m.div initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 0.5, ease: 'linear' }}>
      {children}
    </m.div>
  );
}
