'use client';

import Link from 'next/link';

import { getLanguageCode } from '@/features/about/model';
import { useStaggerInitialAnimation } from '@/shared/animation';
import { cn } from '@/shared/cn';
import { useScrollRestoration } from '@/shared/hooks';

interface LanguageButtonsProps {
  data: { languages: string[] };
  currentLanguage: string;
  baseUrl: string;
}

export function LanguageButtons({ data, currentLanguage, baseUrl }: LanguageButtonsProps) {
  const scope = useStaggerInitialAnimation({ targetChild: 'div' });
  const saveScrollTarget = useScrollRestoration(currentLanguage);

  return (
    <div ref={scope} className="grid w-full grid-cols-4 gap-4 md:grid-cols-3">
      {data.languages.map((langName: string) => {
        const langCode = getLanguageCode(langName);
        const isSelected = langName === currentLanguage;
        const buttonId = `lang-button-${langCode}`;

        return (
          <div key={langName} className="flex justify-center opacity-0">
            <Link
              id={buttonId}
              href={`${baseUrl}/${langCode}`}
              onClick={() => saveScrollTarget(buttonId)}
              scroll={false}
              className={cn(
                'flex w-full items-center justify-center rounded-sm border px-4 py-2 text-center text-sm font-medium transition-colors duration-200',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500',
                isSelected
                  ? 'border-white bg-white text-black'
                  : 'border-white bg-black text-white hover:bg-gray-800'
              )}
            >
              {langName}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

LanguageButtons.displayName = 'LanguageButtons';
