import data from './data.json';

interface PDFPageProps {
  params: Promise<{ id: string }>;
}

export default async function CreditPage({ params }: PDFPageProps) {
  const { id } = await params;
  const credit = data.find((item) => item.id === id);

  return (
    <div className="flex flex-col gap-y-4 pb-4 whitespace-pre-line">
      <h1 className="text-2xl font-bold">{credit?.title}</h1>
      <p>{credit?.credit}</p>
      {credit?.info ? (
        <>
          <h2 className="pt-8 text-lg font-bold">{credit?.info.title}</h2>
          <p>{credit?.info.date}</p>
          <p>{credit?.info.location}</p>
          <p>{credit?.info.credit}</p>
        </>
      ) : null}
    </div>
  );
}
