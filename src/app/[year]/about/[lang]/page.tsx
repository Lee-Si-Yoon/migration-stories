import Image from 'next/image';
import type { Metadata } from 'next';

import type { Content, Content2023, Languages } from '@/features/about/model';
import { getLanguageCode, getLanguageName } from '@/features/about/model';
import { LanguageButtons, AnimatedAboutContent, AnimatedAboutContent2023 } from '@/widgets/about';
import type { Year } from '@/features/routes';
import content22Raw from './content-22.json';
import content23Raw from './content-23.json';
import languages22Raw from './languages-22.json';
import languages23Raw from './languages-23.json';

const contentMap = {
  '22': content22Raw as Content,
  '23': content23Raw as Content2023,
};

const languagesMap = {
  '22': languages22Raw as Languages,
  '23': languages23Raw as Languages,
};

const posterMap = {
  '22': '/imgs/poster/poster-22.jpg',
  '23': '/imgs/poster/poster-23.webp',
};

export async function generateStaticParams() {
  const params22 = languagesMap['22'].languages.map((langName) => ({
    year: '22',
    lang: getLanguageCode(langName),
  }));

  const params23 = languagesMap['23'].languages.map((langName) => ({
    year: '23',
    lang: getLanguageCode(langName),
  }));

  return [...params22, ...params23];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ year: string; lang: string }>;
}): Promise<Metadata> {
  const { year, lang } = await params;
  const yearKey = year as Year;
  const texts = contentMap[yearKey];
  const langName = getLanguageName(lang);
  const title = texts[langName]?.title || texts['한국어'].title;

  return {
    title: `${title} - Migration Stories 20${year}`,
  };
}

export default async function AboutLangPage({
  params,
}: {
  params: Promise<{ year: string; lang: string }>;
}) {
  const { year, lang } = await params;
  const yearKey = year as Year;
  const texts = contentMap[yearKey];
  const languages = languagesMap[yearKey];
  const posterSrc = posterMap[yearKey];
  const langName = getLanguageName(lang);
  const language = texts[langName] ? langName : '한국어';

  return (
    <main className="mx-auto w-full max-w-[80rem]">
      {/* Poster Container */}
      <div className="mt-32 flex justify-center md:mt-24">
        <div className="w-full max-w-[37.5rem] md:w-full">
          <Image
            alt="poster"
            src={posterSrc}
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
        <LanguageButtons data={languages} currentLanguage={language} baseUrl={`/${year}/about`} />
      </div>

      {/* About Content Container - Client Component with Animations */}
      {yearKey === '22' ? (
        <AnimatedAboutContent
          title={(texts as Content)[language].title}
          text={(texts as Content)[language].text}
        />
      ) : (
        <AnimatedAboutContent2023
          title={(texts as Content2023)[language].title}
          subtitle1={(texts as Content2023)[language].subtitle1}
          text1={(texts as Content2023)[language].text1}
          subtitle2={(texts as Content2023)[language].subtitle2}
          text2={(texts as Content2023)[language].text2}
        />
      )}
    </main>
  );
}
