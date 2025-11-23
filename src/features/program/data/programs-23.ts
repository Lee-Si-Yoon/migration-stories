import programsData from './programs-23.json';

export interface ProgramJSON {
  [key: string]: string | number;
  id: number;
  imgSrc: string;
  videoSrc: string;
}

export const programs: ProgramJSON[] = programsData as ProgramJSON[];
