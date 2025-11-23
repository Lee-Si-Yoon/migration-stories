import { redirect } from 'next/navigation';
import { detectPreferredLanguage } from '@/features/about/model/detect-language';
import languages from '@/features/about/data/languages-23.json';

export default async function About23Page() {
  const preferredLang = await detectPreferredLanguage(languages.languages);
  redirect(`/23/about/${preferredLang}`);
}
