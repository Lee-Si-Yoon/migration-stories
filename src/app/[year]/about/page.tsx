import { redirect } from 'next/navigation';
import { detectPreferredLanguage } from '@/features/about/model/detect-language';
import languages22 from './[lang]/languages-22.json';
import languages23 from './[lang]/languages-23.json';

const languagesMap = {
  '22': languages22,
  '23': languages23,
};

export default async function AboutPage({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;
  const yearKey = year as '22' | '23';
  const languages = languagesMap[yearKey];
  const preferredLang = await detectPreferredLanguage(languages.languages);
  redirect(`/${year}/about/${preferredLang}`);
}
