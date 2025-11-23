// Centralized year configuration
export const VALID_YEARS = ['22', '23'] as const;
export type Year = (typeof VALID_YEARS)[number];

export function isValidYear(year: string): year is Year {
  return VALID_YEARS.includes(year as Year);
}

type BasePaths = {
  base: string;
  wander: string;
  video: string;
  credit: string;
  about: string;
};

type PathsWith23 = BasePaths & {
  program: string;
};

function createPaths(year: Year): BasePaths | PathsWith23 {
  const base = `/${year}`;
  const paths: BasePaths = {
    base,
    wander: `${base}/wander`,
    video: `${base}/video`,
    credit: `${base}/credit`,
    about: `${base}/about`,
  };

  if (year === '23') {
    return {
      ...paths,
      program: `${base}/program`,
    };
  }

  return paths;
}

// Function overload for better type inference
function Paths(year: '22'): BasePaths;
function Paths(year: '23'): PathsWith23;
function Paths(year: Year): BasePaths | PathsWith23;
function Paths(year: Year): BasePaths | PathsWith23 {
  return createPaths(year);
}

// For backward compatibility and root path
Paths.default = '/';
Paths['22'] = createPaths('22') as BasePaths;
Paths['23'] = createPaths('23') as PathsWith23;

export default Paths;
