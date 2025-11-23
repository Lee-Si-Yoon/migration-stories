'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimatedImageProps {
  children: ReactNode;
}

export function AnimatedImage({ children }: AnimatedImageProps) {
  return (
    <motion.div
      initial={{ x: 150 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: 'linear' }}
      className="flex flex-col gap-4"
    >
      {children}
    </motion.div>
  );
}

interface AnimatedTextProps {
  children: ReactNode;
}

export function AnimatedText({ children }: AnimatedTextProps) {
  return (
    <motion.div
      initial={{ x: -150 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: 'linear' }}
      className="w-full px-2 md:w-auto md:px-0"
    >
      {children}
    </motion.div>
  );
}
