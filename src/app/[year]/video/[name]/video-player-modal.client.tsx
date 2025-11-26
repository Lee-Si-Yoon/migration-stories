'use client';

import React from 'react';

import { VimeoPlayer } from '@/widgets/video-player';
import { cn } from '@/shared/cn';
import { Button } from '@/components/ui/button';
import { Year } from '@/features/routes';

interface VideoPlayerModalProps {
  videoSrc: string;
  year: Year;
}

export function VideoPlayerModal({ videoSrc, year }: VideoPlayerModalProps) {
  const [confirmed, setConfirmed] = React.useState(false);

  return (
    <>
      {confirmed && <VimeoPlayer url={videoSrc} showControls autoPlay />}

      <div
        className={cn(
          'fixed inset-0',
          'flex flex-col items-center justify-center gap-y-2',
          confirmed && 'hidden'
        )}
      >
        <h1 className="text-2xl leading-[150%] font-bold text-white">이야기를 재생하시겠습니까?</h1>
        {year === '23' && <p className="font-light text-gray-400">Вы хотите посмотреть историю?</p>}
        <h2 className="text-base leading-[140%] font-normal text-white">
          (헤드폰이 있다면 헤드폰을 착용하세요)
        </h2>
        {year === '23' && (
          <p className="font-light text-gray-400">Надевайте наушники, если у вас есть</p>
        )}

        <Button
          onClick={() => setConfirmed(true)}
          className="mt-4 flex h-fit flex-col gap-0 rounded-full bg-transparent py-2"
          variant="outline"
          size="lg"
        >
          <p>네</p>
          {year === '23' && <p className="font-light text-gray-400">Да</p>}
        </Button>
      </div>
    </>
  );
}
