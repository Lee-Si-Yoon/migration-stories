'use client';

import React from 'react';

import { getLanguageName, type LanguageCode } from '@/features/about/model';
import { CreditTitle } from '@/widgets/i18n/credit-title.client';
import { Button } from '@/components/ui/button';
import { cn } from '@/shared/cn';

import _data from './data.json';

const data = _data.find((item) => item.id === '1136731489');

type LangOverride = Record<
  string,
  {
    title: string;
    description: string;
    opening: string;
    opening_1: string;
    opening_1_description: string;
    opening_2: string;
    opening_2_description: string;
    opening_3: string;
    opening_3_description: string;
    exhibition: string;
    exhibition_description: string;
  }
>;

export default function Credit1136731489() {
  const [lang, setLang] = React.useState<LanguageCode>('ko');

  return (
    <div className="flex flex-col gap-y-4 pb-4 whitespace-pre-line">
      <CreditTitle data={data?.titles as string[]} />
      <div className="grid w-full grid-cols-2 gap-4 pt-4">
        {data?.langs &&
          Object.entries(data.langs).map(([key, _]) => (
            <Button
              key={key}
              onClick={() => setLang(key as LanguageCode)}
              variant="outline-transparent"
              rounded="full"
              size="lg"
              className={cn(lang === key && 'bg-white text-black hover:bg-white')}
            >
              {getLanguageName(key)}
            </Button>
          ))}
      </div>
      {lang && <p>{(data?.langs as unknown as LangOverride)[lang].description}</p>}
      {lang && (
        <p className="text-2xl font-bold">
          {(data?.langs as unknown as LangOverride)[lang].opening}
        </p>
      )}
      {lang && (
        <p className="font-bold">{(data?.langs as unknown as LangOverride)[lang].opening_1}</p>
      )}
      {lang && <p>{(data?.langs as unknown as LangOverride)[lang].opening_1_description}</p>}
      {lang && (
        <p className="font-bold">{(data?.langs as unknown as LangOverride)[lang].opening_2}</p>
      )}
      {lang && <p>{(data?.langs as unknown as LangOverride)[lang].opening_2_description}</p>}
      {lang && (
        <p className="font-bold">{(data?.langs as unknown as LangOverride)[lang].opening_3}</p>
      )}
      {lang && <p>{(data?.langs as unknown as LangOverride)[lang].opening_3_description}</p>}
      {lang && (
        <p className="text-2xl font-bold">
          {(data?.langs as unknown as LangOverride)[lang].exhibition}
        </p>
      )}
      {lang && <p>{(data?.langs as unknown as LangOverride)[lang].exhibition_description}</p>}
    </div>
  );
}
