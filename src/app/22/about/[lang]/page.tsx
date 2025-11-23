import Image from 'next/image';
import type { Metadata } from 'next';

import type { Content, Languages } from '@/features/about/model';
import { getLanguageCode, getLanguageName } from '@/features/about/model';
import contentRaw from '@/features/about/data/content-22.json';
import languagesRaw from '@/features/about/data/languages-22.json';
import { LanguageButtons, AnimatedAboutContent } from '@/widgets/about';

const texts = contentRaw as Content;
const languages = languagesRaw as Languages;

export async function generateStaticParams() {
  return languages.languages.map((langName) => ({
    lang: getLanguageCode(langName),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const langName = getLanguageName(lang);
  const title = texts[langName]?.title || texts['한국어'].title;

  return {
    title: `${title} - Migration Stories 2022`,
  };
}

export default async function About22LangPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const langName = getLanguageName(lang);
  const language = texts[langName] ? langName : '한국어';

  return (
    <main className="mx-auto w-full max-w-[80rem]">
      {/* Poster Container */}
      <div className="mt-32 flex justify-center md:mt-24">
        <div className="w-full max-w-[37.5rem] md:w-full">
          <Image
            alt="poster"
            src="/imgs/poster/poster-22.jpg"
            width={600}
            height={800}
            className="h-auto w-full object-scale-down"
            draggable={false}
            loading="lazy"
            priority={false}
          />
        </div>
      </div>

      {/* Language Buttons Container */}
      <div className="mx-auto mt-16 w-full max-w-[56.25rem] px-4 md:mt-8 md:px-4">
        <LanguageButtons data={languages} currentLanguage={language} baseUrl="/22/about" />
      </div>

      {/* About Content Container - Client Component with Animations */}
      <AnimatedAboutContent title={texts[language].title} text={texts[language].text} />
    </main>
  );
}
