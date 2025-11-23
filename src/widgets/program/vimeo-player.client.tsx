'use client';

import dynamic from 'next/dynamic';
import { isMobile } from 'react-device-detect';

const VimeoPlayer = dynamic(() => import('react-player/vimeo'), { ssr: false });

interface ProgramVideoPlayerProps {
  videoSrc: string;
  programId: number;
}

export function ProgramVideoPlayer({ videoSrc, programId }: ProgramVideoPlayerProps) {
  if (!videoSrc) return null;

  return (
    <div className="h-[36rem] w-full">
      <VimeoPlayer
        volume={1}
        playing
        width="100%"
        height="100%"
        url={videoSrc}
        title={String(programId)}
        controls={isMobile}
        stopOnUnmount={true}
      />
    </div>
  );
}
