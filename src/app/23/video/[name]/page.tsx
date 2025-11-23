import { notFound } from 'next/navigation';

import videoData from '../video-data.json';
import { VideoPlayerModal } from './video-player-modal';

interface VideoData {
  name: string;
  src: string;
}

export async function generateStaticParams() {
  return videoData.map((video) => ({
    name: video.name,
  }));
}

interface PageProps {
  params: Promise<{ name: string }>;
}

export default async function Video23Page({ params }: PageProps) {
  const { name } = await params;
  const video = (videoData as VideoData[]).find((v) => v.name === name);

  if (!video) {
    notFound();
  }

  return <VideoPlayerModal videoSrc={video.src} videoName={video.name} />;
}
