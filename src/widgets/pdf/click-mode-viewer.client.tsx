'use client';

import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Page } from 'react-pdf';

import { Button } from '@/components/ui/button';
import { cn } from '@/shared/cn';

interface ClickModeViewerProps {
  pageNumber: number;
  numPages: number;
  goToPrevPage: () => void;
  goToNextPage: () => void;
}

export function ClickModeViewer({
  pageNumber,
  numPages,
  goToPrevPage,
  goToNextPage,
}: ClickModeViewerProps) {
  const [height, setHeight] = React.useState(0);

  return (
    <div
      ref={(ref) => {
        setHeight(ref?.clientHeight || 0);
      }}
      className="flex w-full flex-col items-center justify-center"
    >
      <Page pageNumber={pageNumber} height={height - 120} />

      {numPages > 0 && (
        <div className={cn('flex items-center justify-center gap-4 pt-4')}>
          <Button onClick={goToPrevPage} disabled={pageNumber <= 1} variant="outline-transparent">
            <ChevronUp className="size-4" />
          </Button>
          <p className="text-sm">
            {pageNumber} of {numPages}
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
