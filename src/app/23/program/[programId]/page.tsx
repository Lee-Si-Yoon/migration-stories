import { notFound } from 'next/navigation';
import Image from 'next/image';
import { programs, type ProgramJSON } from '@/features/program/data/programs-23';
import { BackButton } from '@/widgets/buttons/back-button.client';
import { AnimatedImage, AnimatedText } from '@/widgets/program/program-content-animated.client';
import { ProgramVideoPlayer } from '@/widgets/program/vimeo-player.client';

interface PageProps {
  params: Promise<{ programId: string }>;
}

export async function generateStaticParams() {
  return programs.map((program) => ({
    programId: String(program.id),
  }));
}

export default async function ProgramDetailPage({ params }: PageProps) {
  const { programId } = await params;

  const currentProgram = programs.find((p) => String(p.id) === programId) as
    | ProgramJSON
    | undefined;

  if (!currentProgram) {
    notFound();
  }

  return (
    <div className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-10 pb-10 md:w-[64rem]">
      <BackButton />

      <AnimatedImage>
        <Image
          alt={currentProgram.imgSrc as string}
          src={currentProgram.imgSrc as string}
          width={1024}
          height={576}
          className="h-[36rem] w-full object-cover md:px-0 md:py-2"
          priority
        />
      </AnimatedImage>

      <AnimatedText>
        <ProgramDetailTexts data={currentProgram} />
      </AnimatedText>

      <ProgramVideoPlayer
        videoSrc={currentProgram.videoSrc as string}
        programId={currentProgram.id}
      />
    </div>
  );
}

function ProgramDetailTexts({ data }: { data: ProgramJSON }) {
  const { id, imgSrc, videoSrc, ...rest } = data;

  return (
    <div className="flex flex-col gap-3 md:gap-2">
      {Object.entries(rest).map(([key, value]) => {
        if (key.includes('name')) {
          return (
            <span key={key} className="text-base leading-[150%] text-white">
              {value}
            </span>
          );
        }

        return (
          <span key={key} className="text-base leading-[150%] text-white">
            {`${key} : ${value}`}
          </span>
        );
      })}
    </div>
  );
}
