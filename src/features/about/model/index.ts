export type { Content, Content2023, Languages } from './types';
export {
  LANGUAGE_CODE_MAP,
  LANGUAGE_NAME_TO_CODE,
  getLanguageCode,
  getLanguageName,
} from './language-codes';
export type { LanguageCode, LanguageName } from './language-codes';
// Note: detectPreferredLanguage is not exported here because it uses server-only APIs (headers())
// Import it directly from './detect-language' in server components only
