import { notFound } from 'next/navigation';

import { VimeoPlayer } from '@/widgets/video-player';

const videoIds = [1089614890, 1136731489];

export async function generateStaticParams() {
  return videoIds.map((id) => ({ id: id.toString() }));
}

export default async function VideoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!videoIds.includes(Number(id))) {
    notFound();
  }

  return <VimeoPlayer url={`https://player.vimeo.com/video/${id}`} variant="inline" />;
}
