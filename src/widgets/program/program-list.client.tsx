'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProgramJSON {
  [key: string]: string | number | undefined;
  id: number;
  imgSrc: string;
  videoSrc: string;
}

interface ProgramListProps {
  programs: ProgramJSON[];
  basePath: string;
}

export function ProgramList({ programs, basePath }: ProgramListProps) {
  return (
    <motion.main
      variants={container}
      initial="hidden"
      animate="show"
      className="flex min-h-screen w-screen flex-col items-center justify-center gap-6"
    >
      {programs.map((program, index) => (
        <motion.div key={program.id} variants={index % 2 === 0 ? leftToRight : rightToLeft}>
          <Link
            href={`${basePath}/${program.id}`}
            className="text-lg font-normal text-white transition-opacity hover:opacity-70"
          >
            {program.name as string}
          </Link>
        </motion.div>
      ))}
    </motion.main>
  );
}

const container = {
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const leftToRight = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0 },
};

const rightToLeft = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0 },
};
