'use client';

import { AnimatePresence, m } from 'framer-motion';

interface AnimatedAboutContent2023Props {
  title: string;
  subtitle1: string;
  text1: string;
  subtitle2: string;
  text2: string;
}

export function AnimatedAboutContent2023({
  title,
  subtitle1,
  text1,
  subtitle2,
  text2,
}: AnimatedAboutContent2023Props) {
  return (
    <div className="text-white">
      {/* Title */}
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

      {/* Subtitle 1 */}
      <AnimatePresence mode="wait">
        <m.h3
          key={`subtitle1-${subtitle1.slice(0, 5)}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.25 }}
          className="text-center text-xl font-semibold"
        >
          {subtitle1}
        </m.h3>
      </AnimatePresence>

      {/* Text 1 */}
      <AnimatePresence mode="wait">
        <m.p
          key={`text1-${text1.slice(0, 5)}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.25 }}
        >
          {text1}
        </m.p>
      </AnimatePresence>

      {/* Divider and Subtitle 2 */}
      <AnimatePresence mode="wait">
        <m.hr
          key={`divider-${subtitle2.slice(0, 5)}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.25 }}
          className="bg-white"
        />
        <m.h3
          key={`subtitle2-${subtitle2.slice(0, 5)}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.25 }}
          className="text-center text-xl font-semibold"
        >
          {subtitle2}
        </m.h3>
      </AnimatePresence>

      {/* Text 2 */}
      <AnimatePresence mode="wait">
        <m.p
          key={`text2-${text2.slice(0, 5)}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.25 }}
        >
          {text2}
        </m.p>
      </AnimatePresence>
    </div>
  );
}

AnimatedAboutContent2023.displayName = 'AnimatedAboutContent2023';
