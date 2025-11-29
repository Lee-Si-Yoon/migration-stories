import { LANGUAGE_CODE_MAP, type LanguageCode } from './language-codes';

/**
 * Detects the user's preferred language from browser languages (client-side)
 * @param supportedLanguages - Array of supported language names (e.g., ['한국어', 'English'])
 * @param fallbackCode - Fallback language code if no match is found (default: 'ko')
 * @returns ISO 639-1 language code
 */
export function detectPreferredLanguageClient(
  supportedLanguages: string[],
  fallbackCode: LanguageCode = 'ko'
): string {
  // Get browser languages
  const browserLanguages = navigator.languages || [navigator.language];

  // Find the first matching language that we support
  for (const browserLang of browserLanguages) {
    // Extract primary language code (e.g., "en-US" -> "en")
    const primaryCode = browserLang.split('-')[0].toLowerCase() as LanguageCode;

    if (primaryCode in LANGUAGE_CODE_MAP) {
      const languageName = LANGUAGE_CODE_MAP[primaryCode];
      if (supportedLanguages.includes(languageName)) {
        return primaryCode;
      }
    }
  }

  // No match found, return fallback
  return fallbackCode;
}
