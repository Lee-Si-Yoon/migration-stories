'use client';

import { cn } from '@/shared/cn';
import { m } from 'framer-motion';

const container = {
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0 },
};

interface TitleProps {
  data: string[];
  className?: string;
}

export function CreditTitle({ data, className }: TitleProps) {
  return (
    <m.div variants={container} initial="hidden" animate="show" className="flex flex-col">
      {data.map((title, index) => (
        <m.p
          variants={item}
          key={`${title}-${index}`}
          className={cn(
            'm-0 text-center text-2xl leading-[200%] font-bold text-white md:text-[2.5rem]',
            className
          )}
        >
          {title}
        </m.p>
      ))}
    </m.div>
  );
}
