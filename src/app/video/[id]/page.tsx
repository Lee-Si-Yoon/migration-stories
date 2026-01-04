import { VimeoPlayer } from '@/widgets/video-player';

export default async function VideoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <VimeoPlayer url={`https://player.vimeo.com/video/${id}`} variant="inline" />;
}
