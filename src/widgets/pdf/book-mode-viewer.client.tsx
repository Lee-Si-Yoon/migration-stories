'use client';

import React from 'react';
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
  const { isMobile } = usePageWidth();
  const [height, setHeight] = React.useState(0);

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
    <div
      ref={(ref) => {
        setHeight(ref?.clientHeight || 0);
      }}
      className="flex w-full items-center justify-center gap-8"
    >
      <div className="flex gap-0">
        <Page pageNumber={pageNumber} height={height} key={`page-${pageNumber}`} />
        {pageNumber + 1 <= numPages && (
          <Page pageNumber={pageNumber + 1} height={height} key={`page-${pageNumber + 1}`} />
        )}
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
