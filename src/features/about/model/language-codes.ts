/**
 * Language code mappings following ISO 639-1 standard
 */

export const LANGUAGE_CODE_MAP = {
  ko: '한국어',
  en: 'English',
  ne: 'नेपाली',
  km: 'ភាសាខ្មែរ',
  vi: 'TiếngViệt',
  si: 'සිංහල',
  my: 'မြန်မာဘာသာ',
  ru: 'Русский',
} as const;

export const LANGUAGE_NAME_TO_CODE = {
  한국어: 'ko',
  English: 'en',
  नेपाली: 'ne',
  ភាសាខ្មែរ: 'km',
  TiếngViệt: 'vi',
  සිංහල: 'si',
  မြန်မာဘာသာ: 'my',
  Русский: 'ru',
} as const;

export type LanguageCode = keyof typeof LANGUAGE_CODE_MAP;
export type LanguageName = (typeof LANGUAGE_CODE_MAP)[LanguageCode];

export function getLanguageName(code: string): string {
  return LANGUAGE_CODE_MAP[code as LanguageCode] || LANGUAGE_CODE_MAP.ko;
}

export function getLanguageCode(name: string): string {
  return LANGUAGE_NAME_TO_CODE[name as LanguageName] || 'ko';
}
