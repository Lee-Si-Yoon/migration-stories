'use client';

import { useState } from 'react';
import { Document, pdfjs } from 'react-pdf';

import { cn } from '@/shared/cn';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { BookModeViewer } from './book-mode-viewer.client';
import { ScrollModeViewer } from './scroll-mode-viewer.client';
import { ClickModeViewer } from './click-mode-viewer.client';
import { usePDFViewer } from './pdf-viewer-provider';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  fileUrl: string;
  className?: string;
}

export function PDFViewer({ fileUrl, className }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { viewMode, scale } = usePDFViewer();

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  function goToPrevPage(): void {
    if (viewMode === 'book') {
      setPageNumber((prev) => Math.max(prev - 2, 1));
    } else {
      setPageNumber((prev) => Math.max(prev - 1, 1));
    }
  }

  function goToNextPage(): void {
    if (viewMode === 'book') {
      setPageNumber((prev) => Math.min(prev + 2, numPages));
    } else {
      setPageNumber((prev) => Math.min(prev + 1, numPages));
    }
  }

  return (
    <div
      className={cn('flex w-full flex-col items-center gap-4 px-4 py-4 md:px-8 md:py-6', className)}
    >
      <Document
        file={fileUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={
          <div className="flex h-[400px] items-center justify-center md:h-[600px]">
            <p className="text-base md:text-lg">Loading PDF...</p>
          </div>
        }
        error={
          <div className="flex h-[400px] items-center justify-center md:h-[600px]">
            <p className="text-base md:text-lg">Error loading PDF</p>
          </div>
        }
        scale={scale}
      >
        {viewMode === 'scroll' && <ScrollModeViewer numPages={numPages} />}
        {viewMode === 'click' && (
          <ClickModeViewer
            pageNumber={pageNumber}
            numPages={numPages}
            goToPrevPage={goToPrevPage}
            goToNextPage={goToNextPage}
          />
        )}
        {viewMode === 'book' && (
          <BookModeViewer
            pageNumber={pageNumber}
            numPages={numPages}
            goToPrevPage={goToPrevPage}
            goToNextPage={goToNextPage}
          />
        )}
      </Document>
    </div>
  );
}
