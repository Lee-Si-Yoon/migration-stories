'use client';

import { AnimatePresence, m } from 'framer-motion';

interface AnimatedAboutContentProps {
  title: string;
  text: string;
}

export function AnimatedAboutContent({ title, text }: AnimatedAboutContentProps) {
  return (
    <div className="text-white">
      <AnimatePresence mode="wait">
        <m.h2
          key={`title-${title}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.25 }}
          className="text-center text-2xl font-bold"
        >
          {title}
        </m.h2>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <m.p
          key={`text-${text}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.25 }}
        >
          {text}
        </m.p>
      </AnimatePresence>
    </div>
  );
}

AnimatedAboutContent.displayName = 'AnimatedAboutContent';
