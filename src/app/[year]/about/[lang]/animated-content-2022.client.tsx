'use client';

import { AnimatePresence, m } from 'framer-motion';

import { cn } from '@/shared/cn';

interface AnimatedAboutContentProps {
  title: string;
  text: string;
}

const initial = { opacity: 0, y: 40 };
const animate = { opacity: 1, y: 0 };

export function AnimatedContent2022({ title, text }: AnimatedAboutContentProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-y-6',
        'leading-relaxed whitespace-pre-line text-white',
        'pb-4'
      )}
    >
      <AnimatePresence mode="wait">
        <m.h2
          key={`title-${title}`}
          initial={initial}
          animate={animate}
          transition={{ delay: 0.25, duration: 0.25 }}
          className="text-2xl font-bold"
        >
          {title}
        </m.h2>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <m.p
          key={`text-${text}`}
          initial={initial}
          animate={animate}
          transition={{ delay: 0.5, duration: 0.25 }}
        >
          {text}
        </m.p>
      </AnimatePresence>
    </div>
  );
}

AnimatedContent2022.displayName = 'AnimatedContent2022';
