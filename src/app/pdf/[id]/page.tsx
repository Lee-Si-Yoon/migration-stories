import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { PDFPageClient } from './pdf-page.client';

interface PDFPageProps {
  params: Promise<{ id: string }>;
}

const pdfIds = ['sample-local-pdf'];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  return {
    title: `Migration Stories`,
  };
}

export async function generateStaticParams() {
  return pdfIds.map((id) => ({ id }));
}

export default async function PDFPage({ params }: PDFPageProps) {
  const { id } = await params;

  if (!pdfIds.includes(id)) {
    notFound();
  }

  return <PDFPageClient id={id} />;
}
