'use client';

import React from 'react';
import Image from 'next/image';

import { VimeoPlayer } from '@/widgets/video-player';
import { cn } from '@/shared/cn';

const getVimeoOEmbed = async (id: string): Promise<Video> => {
  const res = await fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${id}`);
  const data = await res.json();

  return {
    id: id,
    title: data.title,
    duration: data.duration,
    thumbnail_url: data.thumbnail_url,
    thumbnail_width: data.thumbnail_width,
    thumbnail_height: data.thumbnail_height,
  };
};

interface Video {
  id: string;
  title: string;
  duration: number;
  thumbnail_url: string;
  thumbnail_width: number;
  thumbnail_height: number;
}

/**
 * @param duration in seconds
 * @returns formatted duration in MM:SS
 */
const formatDuration = (duration: number) => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export default function MultiplayerClient({ ids }: { ids: string[] }) {
  const [videos, setVideos] = React.useState<Video[]>([]);
  const [playingVideoId, setPlayingVideoId] = React.useState<string>(ids[0]);

  React.useEffect(() => {
    const fetchVideos = async () => {
      const fetchedVideos = await Promise.all(ids.map(getVimeoOEmbed));
      setVideos(fetchedVideos);
    };
    fetchVideos();
  }, [ids]);

  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <VimeoPlayer
        url={`https://player.vimeo.com/video/${playingVideoId}`}
        variant="inline"
        autoPlay
      />
      <ul className={cn('flex flex-col gap-y-4 lg:w-[480px] lg:min-w-[480px]')}>
        {videos.map((video) => (
          <li
            key={video.id}
            className={cn(
              'group relative flex cursor-pointer hover:bg-neutral-800',
              playingVideoId === video.id && 'bg-neutral-800'
            )}
            onClick={() => setPlayingVideoId(video.id)}
          >
            <React.Activity mode={playingVideoId === video.id ? 'visible' : 'hidden'}>
              <div className="absolute top-0 left-0 z-2 h-full w-1 bg-white" />
            </React.Activity>

            <div className="relative min-w-52">
              <div className="relative aspect-video">
                <Image
                  src={video.thumbnail_url}
                  alt={video.title}
                  width={video.thumbnail_width}
                  height={video.thumbnail_height}
                  unoptimized
                  className="absolute inset-0 h-full w-full object-contain"
                />
                <div
                  className={cn(
                    'absolute inset-0 z-1 hidden items-center justify-center bg-black/50 text-4xl text-stone-400 group-hover:flex',
                    'before:absolute before:top-[50%] before:left-[50%] before:block before:h-10 before:w-10 before:translate-x-[-50%] before:translate-y-[-50%]',
                    'before:content-[url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMiI+PHBhdGggZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIiBkPSJNMTcuOTgyIDkuMjc1IDguMDYgMy4yN0EyLjAxMyAyLjAxMyAwIDAgMCA1IDQuOTk0djEyLjAxMWEyLjAxNyAyLjAxNyAwIDAgMCAzLjA2IDEuNzI1bDkuOTIyLTYuMDA1YTIuMDE3IDIuMDE3IDAgMCAwIDAtMy40NSIvPjwvc3ZnPg==)]'
                  )}
                />
              </div>
            </div>

            <article className="relative flex flex-col gap-y-2 pl-2">
              <p>{video.title}</p>
              <p className="flex items-center gap-x-2 text-sm text-stone-400">
                {video.id === playingVideoId && (
                  <div className="flex items-center justify-center rounded-xs bg-stone-700 p-1 text-xs leading-none text-stone-300">
                    <span>Now playing</span>
                  </div>
                )}
                {formatDuration(video.duration)}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
