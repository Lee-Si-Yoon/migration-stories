import _data from './data.json';
import Credit1089614890 from './1089614890.client';

export default async function CreditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = _data.find((item) => item.id === id);

  return <>{id === '1089614890' && <Credit1089614890 />}</>;
}
