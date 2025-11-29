import Image from 'next/image';
import type { Metadata } from 'next';

import type { Content, Content2023, Languages } from '@/features/about/model';
import { getLanguageCode, getLanguageName } from '@/features/about/model';
import type { Year } from '@/features/routes';

import { AnimatedAboutContent } from './animated-about-content';
import content22Raw from './content-22.json';
import content23Raw from './content-23.json';
import languages22Raw from './languages-22.json';
import languages23Raw from './languages-23.json';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/shared/cn';
import { AnimatedAboutContent2023 } from './animated-about-content-2023';

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
  return Object.entries(languagesMap).flatMap(([year, { languages }]) =>
    languages.map((langName) => ({
      year,
      lang: getLanguageCode(langName),
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ year: string; lang: string }>;
}): Promise<Metadata> {
  const { year, lang } = await params;
  const yearKey = year as Year;
  const langName = getLanguageName(lang);
  const texts = contentMap[yearKey];
  const language = texts[langName] ? langName : '한국어';

  return {
    title: `${texts[language].title} - Migration Stories 20${year}`,
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
  const langName = getLanguageName(lang);
  const language = texts[langName] ? langName : '한국어';

  return (
    <>
      <Image
        alt="poster"
        src={posterMap[yearKey]}
        width={600}
        height={800}
        draggable={false}
        className="object-contain"
      />
      <div className="grid w-full grid-cols-4 gap-4 md:grid-cols-3">
        {languagesMap[yearKey].languages.map((langName: string) => {
          const langCode = getLanguageCode(langName);

          return (
            <Button
              key={langName}
              variant="outline"
              className={cn(
                'rounded-full bg-transparent',
                langName === language && 'bg-white text-black',
                'active:scale-95'
              )}
              size="lg"
              asChild
            >
              <Link href={`/${year}/about/${langCode}`}>{langName}</Link>
            </Button>
          );
        })}
      </div>

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
    </>
  );
}
