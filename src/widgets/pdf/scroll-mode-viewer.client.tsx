'use client';

import { Page } from 'react-pdf';
import { usePageWidth } from './use-page-width';

interface ScrollModeViewerProps {
  numPages: number;
}

export function ScrollModeViewer({ numPages }: ScrollModeViewerProps) {
  const { pageWidth } = usePageWidth();

  return (
    <div className="flex w-full flex-col gap-4">
      {Array.from(new Array(numPages), (_, index) => (
        <div key={`page_${index + 1}`} className="shadow-lg">
          <Page pageNumber={index + 1} width={pageWidth} />
        </div>
      ))}
    </div>
  );
}
