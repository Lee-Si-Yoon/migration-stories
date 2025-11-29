'use client';

import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Page } from 'react-pdf';
import { ClickModeViewer } from './click-mode-viewer.client';
import { usePageWidth } from './use-page-width';

interface BookModeViewerProps {
  pageNumber: number;
  numPages: number;
  goToPrevPage: () => void;
  goToNextPage: () => void;
}

export function BookModeViewer({
  pageNumber,
  numPages,
  goToPrevPage,
  goToNextPage,
}: BookModeViewerProps) {
  const { pageWidth, isMobile } = usePageWidth({
    mobileWidth: (width: number) => width - 32,
    desktopWidth: (width: number) => {
      const availableWidth = Math.min(1400, width - 128);
      return Math.floor(availableWidth / 2) - 16;
    },
  });

  if (isMobile) {
    return (
      <ClickModeViewer
        pageNumber={pageNumber}
        numPages={numPages}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
      />
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center gap-8">
      <div className="flex gap-4">
        <Page pageNumber={pageNumber} width={pageWidth} />
        {pageNumber + 1 <= numPages && <Page pageNumber={pageNumber + 1} width={pageWidth} />}
      </div>

      {numPages > 0 && (
        <div className="flex flex-col items-center gap-4">
          <Button onClick={goToPrevPage} disabled={pageNumber <= 1} variant="outline-transparent">
            <ChevronUp className="size-4" />
          </Button>
          <p className="text-sm">
            {pageNumber}
            {pageNumber + 1 <= numPages && `-${pageNumber + 1}`} / {numPages}
          </p>
          <Button
            onClick={goToNextPage}
            disabled={pageNumber >= numPages}
            variant="outline-transparent"
          >
            <ChevronDown className="size-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
