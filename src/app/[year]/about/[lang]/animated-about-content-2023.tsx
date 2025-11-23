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
    <div className="mx-auto mt-8 w-full max-w-[56.25rem] pb-8 md:w-[calc(100%-1rem)]">
      {/* Title */}
      <AnimatePresence mode="wait">
        <m.h2
          key={`title-${title}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.25 }}
          className="w-full text-center text-2xl leading-[150%] font-bold text-white"
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
          className="w-full text-center text-xl leading-[150%] font-semibold text-white"
        >
          {subtitle1}
        </m.h3>
      </AnimatePresence>

      {/* Text 1 */}
      <AnimatePresence mode="wait">
        <m.div
          key={`text1-${text1.slice(0, 5)}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.25 }}
          className="mx-auto mt-2 w-full"
        >
          <p className="text-base leading-[180%] font-normal break-words whitespace-pre-line text-white">
            {text1}
          </p>
        </m.div>
      </AnimatePresence>

      {/* Divider and Subtitle 2 */}
      <AnimatePresence mode="wait">
        <m.hr
          key={`divider-${subtitle2.slice(0, 5)}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.25 }}
          className="my-10 h-px border-0 bg-white"
        />
        <m.h3
          key={`subtitle2-${subtitle2.slice(0, 5)}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.25 }}
          className="w-full text-center text-xl leading-[150%] font-semibold text-white"
        >
          {subtitle2}
        </m.h3>
      </AnimatePresence>

      {/* Text 2 */}
      <AnimatePresence mode="wait">
        <m.div
          key={`text2-${text2.slice(0, 5)}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.25 }}
          className="mx-auto mt-2 w-full"
        >
          <p className="text-base leading-[180%] font-normal break-words whitespace-pre-line text-white">
            {text2}
          </p>
        </m.div>
      </AnimatePresence>
    </div>
  );
}

AnimatedAboutContent2023.displayName = 'AnimatedAboutContent2023';
