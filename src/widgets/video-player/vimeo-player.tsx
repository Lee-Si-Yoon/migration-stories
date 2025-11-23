'use client';

import dynamic from 'next/dynamic';
import { ComponentProps } from 'react';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

interface VimeoPlayerProps {
  url: string;
  title?: string;
  showControls?: boolean;
  autoPlay?: boolean;
  onEnded?: () => void;
}

export function VimeoPlayer({
  url,
  title,
  showControls = true,
  autoPlay = true,
  onEnded,
}: VimeoPlayerProps) {
  const playerConfig: ComponentProps<typeof ReactPlayer>['config'] = {
    vimeo: {
      title: false,
      byline: false,
      portrait: false,
    },
  };

  return (
    <div className="fixed inset-0 bg-black">
      <ReactPlayer
        src={url}
        playing={autoPlay}
        controls={showControls}
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
