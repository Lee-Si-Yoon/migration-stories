'use client';

import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Page } from 'react-pdf';

import { Button } from '@/components/ui/button';
import { usePageWidth } from './use-page-width';

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
  const { pageWidth } = usePageWidth();
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <Page pageNumber={pageNumber} width={pageWidth} />

      {numPages > 0 && (
        <div className="flex items-center justify-center gap-4">
          <Button onClick={goToPrevPage} disabled={pageNumber <= 1} variant="outline-transparent">
            <ChevronLeft className="size-4" />
          </Button>
          <p className="text-sm">
            {pageNumber} of {numPages}
          </p>
          <Button
            onClick={goToNextPage}
            disabled={pageNumber >= numPages}
            variant="outline-transparent"
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
