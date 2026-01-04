import Credit1089577016 from './1089577016.client'; // welcome home
import Credit1138077407 from './1138077407.client'; // home sound day

export default async function CreditPage({ params }: { params: Promise<{ ids: string }> }) {
  const { ids } = await params;
  const decodedIds = decodeURIComponent(ids);

  return (
    <>
      {decodedIds === '1089577016,1089591185' && <Credit1089577016 />}
      {decodedIds ===
        '1138077407,1137386731,1137387597,1137435078,1137387128,1137401797,1138001618,1137390753,1137435388' && (
        <Credit1138077407 />
      )}
    </>
  );
}
