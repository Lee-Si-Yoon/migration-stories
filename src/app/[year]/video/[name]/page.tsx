import { notFound } from 'next/navigation';
import type { Year } from '@/features/routes';

import videoData22 from './video-data-22.json';
import videoData23 from './video-data-23.json';
import { VideoPlayerModal } from './video-player-modal.client';

interface VideoData {
  name: string;
  src: string;
}

const videoDataMap = {
  '22': videoData22 as VideoData[],
  '23': videoData23 as VideoData[],
};

export async function generateStaticParams() {
  const params22 = videoData22.map((video) => ({
    year: '22',
    name: video.name,
  }));

  const params23 = videoData23.map((video) => ({
    year: '23',
    name: video.name,
  }));

  return [...params22, ...params23];
}

interface PageProps {
  params: Promise<{ year: string; name: string }>;
}

export default async function VideoPage({ params }: PageProps) {
  const { year, name } = await params;
  const yearKey = year as Year;
  const videoData = videoDataMap[yearKey];
  const video = videoData.find((v) => v.name === name);

  if (!video) {
    notFound();
  }

  return <VideoPlayerModal videoSrc={video.src} year={yearKey} />;
}
