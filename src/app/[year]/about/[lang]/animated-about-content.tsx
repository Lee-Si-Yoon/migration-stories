'use client';

import { AnimatePresence, motion } from 'framer-motion';

interface AnimatedAboutContentProps {
  title: string;
  text: string;
}

export function AnimatedAboutContent({ title, text }: AnimatedAboutContentProps) {
  return (
    <div className="mx-auto mt-8 w-full max-w-[56.25rem] pb-8 md:w-[calc(100%-1rem)]">
      <AnimatePresence mode="wait">
        <motion.h2
          key={`title-${title}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.25 }}
          className="w-full text-center text-2xl leading-[150%] font-bold text-white"
        >
          {title}
        </motion.h2>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={`text-${text}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.25 }}
          className="mx-auto mt-4 w-full"
        >
          <p className="text-base leading-[180%] font-normal break-words whitespace-pre-line text-white">
            {text}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

AnimatedAboutContent.displayName = 'AnimatedAboutContent';
