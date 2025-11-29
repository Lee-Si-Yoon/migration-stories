import { PDFPageClient } from './pdf-page.client';

interface PDFPageProps {
  params: Promise<{ id: string }>;
}

export default async function PDFPage({ params }: PDFPageProps) {
  const { id } = await params;

  return <PDFPageClient id={id} />;
}
