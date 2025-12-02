'use client';

import { useEffect } from 'react';

/**
 * Suppresses console warnings from react-pdf's text layer cancellation.
 * This is a known issue when pages unmount before text layer rendering completes.
 */
export function useSuppressPDFWarnings(): void {
  useEffect(() => {
    const originalError = console.error;
    const originalWarn = console.warn;

    console.error = (...args: unknown[]) => {
      const message = String(args[0]);
      if (
        message.includes('AbortException') ||
        message.includes('TextLayer task cancelled') ||
        message.includes('AnnotationLayer task cancelled')
      ) {
        return;
      }
      originalError.apply(console, args);
    };

    console.warn = (...args: unknown[]) => {
      const message = String(args[0]);
      if (
        message.includes('AbortException') ||
        message.includes('TextLayer task cancelled') ||
        message.includes('AnnotationLayer task cancelled')
      ) {
        return;
      }
      originalWarn.apply(console, args);
    };

    return () => {
      console.error = originalError;
      console.warn = originalWarn;
    };
  }, []);
}
