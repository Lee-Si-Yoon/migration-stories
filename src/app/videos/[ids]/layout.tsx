import { Metadata } from 'next';
import { notFound } from 'next/navigation';

const videosIds = [
  '1089577016,1089591185',
  '1138077407,1137386731,1137387597,1137435078,1137387128,1137401797,1138001618,1137390753,1137435388',
];

export async function generateStaticParams() {
  return videosIds.map((id) => ({ ids: id.toString() }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  return {
    title: `Migration Stories`,
  };
}

export default async function VideoLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ ids: string }>;
}) {
  const { ids } = await params;
  const decodedIds = decodeURIComponent(ids);

  if (!videosIds.includes(decodedIds)) {
    notFound();
  }

  return children;
}
