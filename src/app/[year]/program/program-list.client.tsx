'use client';

import { m } from 'framer-motion';
import Link from 'next/link';

import Paths from '@/features/routes/model';

import { Program } from './[programId]/model';
import programsData from './[programId]/programs-23.json';

export function ProgramList() {
  const programs: Program[] = programsData as Program[];

  return (
    <m.main
      variants={container}
      initial="hidden"
      animate="show"
      className="flex min-h-screen w-screen flex-col items-center justify-center gap-6"
    >
      {programs.map((program, index) => (
        <m.div key={program.id} variants={index % 2 === 0 ? leftToRight : rightToLeft}>
          <Link
            href={`${Paths('23').program}/${program.id}`}
            className="text-lg font-normal text-white transition-opacity hover:opacity-70"
          >
            {program.name as string}
          </Link>
        </m.div>
      ))}
    </m.main>
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
