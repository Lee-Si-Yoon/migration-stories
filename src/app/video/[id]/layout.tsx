import { Metadata } from 'next';
import { notFound } from 'next/navigation';

const videoIds = [1089614890, 1136731489, 1100973311, 1136733453, 1150929688];

export async function generateStaticParams() {
  return videoIds.map((id) => ({ id: id.toString() }));
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
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!videoIds.includes(Number(id))) {
    notFound();
  }

  return children;
}
