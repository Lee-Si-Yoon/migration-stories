'use client';

import dynamic from 'next/dynamic';
import { ComponentProps } from 'react';
import { isMobile } from 'react-device-detect';
import { cn } from '@/shared/cn';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

interface VimeoPlayerProps {
  url: string;
  showControls?: boolean;
  controlsOnMobileOnly?: boolean;
  autoPlay?: boolean;
  volume?: number;
  onEnded?: () => void;
  variant?: 'fullscreen' | 'inline';
  className?: string;
}

export function VimeoPlayer({
  url,
  showControls = true,
  controlsOnMobileOnly = false,
  autoPlay = true,
  volume = 1,
  onEnded,
  variant = 'fullscreen',
  className,
}: VimeoPlayerProps) {
  const playerConfig: ComponentProps<typeof ReactPlayer>['config'] = {
    vimeo: {
      title: false,
      byline: false,
      portrait: false,
    },
  };

  const controls = controlsOnMobileOnly ? isMobile : showControls;

  if (variant === 'inline') {
    return (
      <div className={cn('h-[36rem] w-full', className)}>
        <ReactPlayer
          src={url}
          playing={autoPlay}
          controls={controls}
          volume={volume}
          muted={false}
          loop={false}
          onEnded={onEnded}
          width="100%"
          height="100%"
          config={playerConfig}
        />
      </div>
    );
  }

  return (
    <div className={cn('fixed inset-0 bg-black', className)}>
      <ReactPlayer
        src={url}
        playing={autoPlay}
        controls={controls}
        volume={volume}
        muted={false}
        loop={false}
        onEnded={onEnded}
        width="100%"
        height="100%"
        config={playerConfig}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
}
