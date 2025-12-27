import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { cn } from '@/shared/cn';

import { PDFPageClient } from './pdf-page.client';
import data from './data.json';

interface PDFPageProps {
  params: Promise<{ id: string }>;
}

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

export default async function PDFPage({ params }: PDFPageProps) {
  const { id } = await params;

  if (!pdfIds.includes(id)) {
    notFound();
  }

  const credit = data.find((item) => item.id === id);

  return (
    <div
      className={cn(
        'flex min-h-[calc(100vh-5rem)] w-full flex-col items-center justify-center',
        'gap-4 px-4 md:px-8'
        // 'border-2 border-green-500'
      )}
    >
      <PDFPageClient id={id} />
      <div
        className={cn(
          'relative right-auto bottom-auto',
          'sm:absolute sm:right-4 sm:bottom-4',
          'text-sm text-white'
        )}
      >
        <p className="font-semibold whitespace-pre-line">{credit?.title}</p>
        <p>{credit?.credit}</p>
      </div>
    </div>
  );
}
