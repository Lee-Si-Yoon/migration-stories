import { notFound } from 'next/navigation';
import { VideoCarousel } from './video-carousel.client';
import { Metadata } from 'next';

const videosIds = ['1089577016,1089591185'];

export async function generateStaticParams() {
  return videosIds.map((id) => ({ ids: id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ids: string }>;
}): Promise<Metadata> {
  return {
    title: `Migration Stories`,
  };
}
export default async function VideosPage({ params }: { params: Promise<{ ids: string }> }) {
  const { ids } = await params;
  const decodedIds = decodeURIComponent(ids);

  if (!videosIds.includes(decodedIds)) {
    notFound();
  }

  const idsArray = decodedIds.split(',');

  return <VideoCarousel idsArray={idsArray} />;
}
