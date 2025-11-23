import { redirect } from 'next/navigation';
import { detectPreferredLanguage } from '@/features/about/model/detect-language';
import languages from '@/features/about/data/languages-22.json';

export default async function About22Page() {
  const preferredLang = await detectPreferredLanguage(languages.languages);
  redirect(`/22/about/${preferredLang}`);
}
