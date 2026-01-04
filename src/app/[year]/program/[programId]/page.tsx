import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';

import { VimeoPlayer } from '@/widgets/video-player';
import { Button } from '@/components/ui/button';
import { Paths } from '@/features/routes';

import { AnimatedImage, AnimatedText } from './program-content-animated.client';
import type { Program as ProgramJSON } from './model';
import programsData from './programs-23.json';

const programs: ProgramJSON[] = programsData as ProgramJSON[];

interface PageProps {
  params: Promise<{ year: string; programId: string }>;
}

export async function generateStaticParams() {
  // Only generate params for year 23
  return programs.map((program) => ({
    year: '23',
    programId: String(program.id),
  }));
}

export default async function ProgramDetailPage({ params }: PageProps) {
  const { year, programId } = await params;

  // Program is only available for 2023
  if (year !== '23') {
    notFound();
  }

  const currentProgram = programs.find((p) => String(p.id) === programId) as
    | ProgramJSON
    | undefined;

  if (!currentProgram) {
    notFound();
  }

  return (
    <>
      <Button asChild variant="outline-transparent" rounded="full" size="icon-lg">
        <Link href={Paths('23').program}>
          <X className="size-6" />
        </Link>
      </Button>

      <AnimatedImage>
        <Image
          width={1024}
          height={576}
          alt={currentProgram.imgSrc as string}
          src={currentProgram.imgSrc as string}
          priority
          draggable={false}
        />
      </AnimatedImage>

      <AnimatedText>
        <ProgramDetailTexts data={currentProgram} />
      </AnimatedText>

      {currentProgram.videoSrc && (
        <VimeoPlayer
          url={currentProgram.videoSrc as string}
          variant="inline"
          controlsOnMobileOnly
          autoPlay
          volume={1}
        />
      )}
    </>
  );
}

function ProgramDetailTexts({ data }: { data: ProgramJSON }) {
  const { id, imgSrc, videoSrc, ...rest } = data;

  return (
    <article className="flex flex-col gap-y-2 text-white">
      {Object.entries(rest).map(([key, value]) => {
        // name-description-korean, name-description-russian, name-russian, name-korean
        if (key.includes('name')) {
          return <p key={key}>{value}</p>;
        }

        return <p key={key}>{`${key} : ${value}`}</p>;
      })}
    </article>
  );
}
