'use client';

import { getLanguageName, type LanguageCode } from '@/features/about/model';
import { CreditTitle } from '@/widgets/i18n/credit-title.client';

import _data from './data.json';
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/shared/cn';

const data = _data.find((item) => item.id === '1089614890');

export default function Credit1089614890() {
  const [lang, setLang] = React.useState<LanguageCode>('ko');

  return (
    <div className="flex flex-col gap-y-4 pb-4 whitespace-pre-line">
      <CreditTitle data={data?.titles as string[]} />
      <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4">
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
      {lang && <p>{data?.langs?.[lang as keyof typeof data.langs]}</p>}
      <p>{data?.credit}</p>
      <p>{data?.sponsor}</p>
    </div>
  );
}
