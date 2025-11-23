'use client';

import { LazyMotion, domAnimation } from 'framer-motion';
import type { ReactNode } from 'react';

interface MotionProviderProps {
  children: ReactNode;
}

/**
 * MotionProvider wraps the app with LazyMotion for optimized bundle size.
 * Uses domAnimation feature set which includes all animation features except 3D transforms.
 * This reduces the initial bundle size by loading animation features on-demand.
 */
export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
