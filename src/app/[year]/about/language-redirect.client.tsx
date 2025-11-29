'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  detectPreferredLanguageClient,
  getLanguageCode,
  type LanguageCode,
} from '@/features/about/model';
import { Paths, Year } from '@/features/routes';

interface LanguageRedirectProps {
  year: string;
  supportedLanguages: string[];
  fallbackCode?: LanguageCode;
}

/**
 * Client-side language detection and redirect component
 * Detects browser language and redirects to appropriate /about/[lang] page
 */
export function LanguageRedirect({
  year,
  supportedLanguages,
  fallbackCode = 'ko',
}: LanguageRedirectProps) {
  const router = useRouter();

  useEffect(() => {
    const detectedLang = detectPreferredLanguageClient(supportedLanguages, fallbackCode);
    router.replace(Paths(year as Year).about + '/' + getLanguageCode(detectedLang));
  }, [year, supportedLanguages, fallbackCode, router, getLanguageCode]);

  return null;
}
