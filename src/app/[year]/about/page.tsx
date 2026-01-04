import type { Metadata } from 'next';

import type { Languages } from '@/features/about/model';

import { LanguageRedirect } from './language-redirect.client';
import languages22 from './[lang]/languages-22.json';
import languages23 from './[lang]/languages-23.json';
import { Year } from '@/features/routes';

const languagesMap = {
  '22': languages22 as Languages,
  '23': languages23 as Languages,
};

export async function generateStaticParams() {
  return Object.entries(languagesMap).map(([year]) => ({
    year,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ year: string }>;
}): Promise<Metadata> {
  const { year } = await params;
  return {
    title: `About - Migration Stories 20${year}`,
  };
}

export default async function AboutPage({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;
  const yearKey = year as Year;
  const languages = languagesMap[yearKey];

  return (
    <LanguageRedirect year={yearKey} supportedLanguages={languages.languages} fallbackCode="ko" />
  );
}
