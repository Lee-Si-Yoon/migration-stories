import { headers } from 'next/headers';
import { getLanguageCode, LANGUAGE_CODE_MAP, type LanguageCode } from './language-codes';

/**
 * Detects the user's preferred language from the Accept-Language header
 * @param supportedLanguages - Array of supported language names (e.g., ['한국어', 'English'])
 * @param fallbackCode - Fallback language code if no match is found (default: 'ko')
 * @returns ISO 639-1 language code
 */
export async function detectPreferredLanguage(
  supportedLanguages: string[],
  fallbackCode: LanguageCode = 'ko'
): Promise<string> {
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language');

  if (!acceptLanguage) {
    return fallbackCode;
  }

  // Parse Accept-Language header (e.g., "en-US,en;q=0.9,ko;q=0.8")
  const languages = acceptLanguage
    .split(',')
    .map((lang) => {
      const [code, qValue] = lang.trim().split(';');
      const quality = qValue ? parseFloat(qValue.split('=')[1]) : 1.0;
      // Extract primary language code (e.g., "en-US" -> "en")
      const primaryCode = code.split('-')[0].toLowerCase();
      return { code: primaryCode, quality };
    })
    .sort((a, b) => b.quality - a.quality);

  // Find the first matching language that we support
  for (const { code } of languages) {
    const languageCode = code as LanguageCode;
    if (languageCode in LANGUAGE_CODE_MAP) {
      const languageName = LANGUAGE_CODE_MAP[languageCode];
      if (supportedLanguages.includes(languageName)) {
        return languageCode;
      }
    }
  }

  // No match found, return fallback
  return fallbackCode;
}
