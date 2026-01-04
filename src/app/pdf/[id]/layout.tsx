import { Metadata } from 'next';

const pdfIds = ['unhomely-map', 'migration-project-research'];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  return {
    title: `Migration Stories - ${id}`,
  };
}

export async function generateStaticParams() {
  return pdfIds.map((id) => ({ id }));
}

export default async function PDFLayout({ children }: { children: React.ReactNode }) {
  return children;
}
