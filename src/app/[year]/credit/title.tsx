'use client';

import { motion } from 'framer-motion';

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
}

export function CreditTitle({ data }: TitleProps) {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col">
      {data.map((title, index) => (
        <motion.p
          variants={item}
          key={`${title}-${index}`}
          className="m-0 text-center text-[2.5rem] leading-[200%] font-bold text-white md:text-2xl"
        >
          {title}
        </motion.p>
      ))}
    </motion.div>
  );
}
