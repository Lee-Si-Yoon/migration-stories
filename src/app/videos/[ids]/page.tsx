import MultiplayerClient from './multiplayer.client';

export default async function VideosPage({ params }: { params: Promise<{ ids: string }> }) {
  const { ids } = await params;
  const decodedIds = decodeURIComponent(ids);
  const idsArray = decodedIds.split(',');

  return <MultiplayerClient ids={idsArray} />;
}
