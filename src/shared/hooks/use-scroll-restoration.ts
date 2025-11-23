import { useEffect } from 'react';

const SCROLL_TARGET_KEY = 'scrollToElement';

/**
 * Hook to scroll to a target element after navigation
 * Waits for animations to complete before scrolling
 *
 * @param dependency - Dependency that triggers scroll restoration (e.g., current language)
 * @returns Function to save element ID for scroll restoration
 *
 * @example
 * ```tsx
 * const saveScrollTarget = useScrollRestoration(currentLanguage);
 *
 * <Link
 *   id="lang-button-ko"
 *   onClick={() => saveScrollTarget('lang-button-ko')}
 * >
 *   한국어
 * </Link>
 * ```
 */
export function useScrollRestoration(dependency?: string | number) {
  // Disable browser's native scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Scroll to saved element when dependency changes
  useEffect(() => {
    const targetElementId = sessionStorage.getItem(SCROLL_TARGET_KEY);

    if (targetElementId) {
      // Wait for DOM and animations to complete
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTimeout(() => {
            const element = document.getElementById(targetElementId);
            if (element) {
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              });
            }
            sessionStorage.removeItem(SCROLL_TARGET_KEY);
          }, 300);
        });
      });
    }
  }, [dependency]);

  // Return function to save element ID
  return (elementId: string) => {
    sessionStorage.setItem(SCROLL_TARGET_KEY, elementId);
  };
}
