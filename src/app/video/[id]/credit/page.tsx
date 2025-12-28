import Credit1089614890 from './1089614890.client'; // Seed workshop
import Credit1100973311 from './1100973311.client'; // 아유보완

export default async function CreditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <>
      {id === '1089614890' && <Credit1089614890 />}
      {id === '1100973311' && <Credit1100973311 />}
    </>
  );
}
