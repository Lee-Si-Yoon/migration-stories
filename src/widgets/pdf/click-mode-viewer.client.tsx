'use client';

import { useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Page } from 'react-pdf';

import { Button } from '@/components/ui/button';
import { cn } from '@/shared/cn';

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
  const { pageWidth, isMobile } = usePageWidth();
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return (
    <div className="absolute inset-0 flex w-full items-center justify-center gap-4">
      <Page pageNumber={pageNumber} width={pageWidth} />

      {numPages > 0 && (
        <div
          className={cn(
            'flex flex-col items-center justify-center gap-4',
            isMobile && 'absolute right-0 bottom-0 left-0 flex-row pb-4'
          )}
        >
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
