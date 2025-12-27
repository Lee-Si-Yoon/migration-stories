'use client';

import { Page } from 'react-pdf';
import { usePageWidth } from './use-page-width';

interface ScrollModeViewerProps {
  numPages: number;
}

export function ScrollModeViewer({ numPages }: ScrollModeViewerProps) {
  const { isMobile, pageWidth } = usePageWidth();

  return (
    <div className="flex w-full flex-col items-center gap-4">
      {Array.from(new Array(numPages), (_, index) => (
        <div key={`page_${index + 1}`}>
          <Page
            pageNumber={index + 1}
            width={isMobile ? pageWidth : undefined}
            height={isMobile ? undefined : window.innerHeight - 76}
          />
        </div>
      ))}
    </div>
  );
}
