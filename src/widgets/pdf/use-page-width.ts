import { useEffect, useState } from 'react';

interface UsePageWidthOptions {
  mobileWidth?: (windowWidth: number) => number;
  desktopWidth?: (windowWidth: number) => number;
  breakpoint?: number;
  debounceMs?: number;
}

/**
 * Custom hook to manage responsive PDF page width
 * @param options - Configuration options for width calculation
 * @returns Object containing pageWidth and isMobile state
 */
export function usePageWidth(options: UsePageWidthOptions = {}) {
  const {
    mobileWidth = (width: number) => width - 32,
    desktopWidth = (width: number) => Math.min(800, width - 64),
    breakpoint = 768,
    debounceMs = 150,
  } = options;

  const [pageWidth, setPageWidth] = useState<number>(800);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    function updateWidth() {
      const width = window.innerWidth;
      const mobile = width < breakpoint;
      setIsMobile(mobile);

      if (mobile) {
        setPageWidth(mobileWidth(width));
      } else {
        setPageWidth(desktopWidth(width));
      }
    }

    // Debounce resize to avoid too many re-renders
    let timeoutId: NodeJS.Timeout;
    function handleResize() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateWidth, debounceMs);
    }

    updateWidth();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [mobileWidth, desktopWidth, breakpoint, debounceMs]);

  return { pageWidth, isMobile };
}
