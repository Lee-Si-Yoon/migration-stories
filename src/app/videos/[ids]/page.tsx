export default async function VideosPage({ params }: { params: Promise<{ ids: string }> }) {
  const { ids } = await params;
  const decodedIds = decodeURIComponent(ids);
  const idsArray = decodedIds.split(',');

  return <div>{decodedIds}</div>;
}
