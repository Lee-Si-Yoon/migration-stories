import Image from 'next/image';
import type { Metadata } from 'next';

import type { Content2023, Languages } from '@/features/about/model';
import { getLanguageCode, getLanguageName } from '@/features/about/model';
import contentRaw from '@/features/about/data/content-23.json';
import languagesRaw from '@/features/about/data/languages-23.json';
import { LanguageButtons, AnimatedAboutContent2023 } from '@/widgets/about';

const texts = contentRaw as Content2023;
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
    title: `${title} - Migration Stories 2023`,
  };
}

export default async function About23LangPage({ params }: { params: Promise<{ lang: string }> }) {
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
            src="/imgs/poster/poster-23.webp"
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
        <LanguageButtons data={languages} currentLanguage={language} baseUrl="/23/about" />
      </div>

      {/* About Content Container - Client Component with Animations */}
      <AnimatedAboutContent2023
        title={texts[language].title}
        subtitle1={texts[language].subtitle1}
        text1={texts[language].text1}
        subtitle2={texts[language].subtitle2}
        text2={texts[language].text2}
      />
    </main>
  );
}
