export type { Content, Content2023, Languages } from './types';
export {
  LANGUAGE_CODE_MAP,
  LANGUAGE_NAME_TO_CODE,
  getLanguageCode,
  getLanguageName,
} from './language-codes';
export type { LanguageCode, LanguageName } from './language-codes';
export { detectPreferredLanguageClient } from './detect-language';
