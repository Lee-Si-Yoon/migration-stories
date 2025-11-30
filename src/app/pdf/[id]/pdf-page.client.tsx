'use client';

import dynamic from 'next/dynamic';

const PDFViewer = dynamic(
  () => import('@/widgets/pdf/pdf-viewer.client').then((mod) => ({ default: mod.PDFViewer })),
  { ssr: false }
);

export function PDFPageClient({ id }: { id: string }) {
  return <PDFViewer fileUrl={`/pdfs/${id}.pdf`} />;
}
