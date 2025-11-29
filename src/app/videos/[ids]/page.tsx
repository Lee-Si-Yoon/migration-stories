import { notFound } from 'next/navigation';
import { VideoCarousel } from './video-carousel.client';

const videosIds = ['1089577016,1089591185'];

export async function generateStaticParams() {
  return videosIds.map((id) => ({ ids: id }));
}

export default async function VideosPage({ params }: { params: Promise<{ ids: string }> }) {
  const { ids } = await params;
  const decodedIds = decodeURIComponent(ids);

  if (!videosIds.includes(decodedIds)) {
    notFound();
  }

  const idsArray = decodedIds.split(',');

  return (
    <div className="flex justify-center p-4">
      <VideoCarousel idsArray={idsArray} />
    </div>
  );
}
