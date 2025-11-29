import Image from 'next/image';

import type { Year } from '@/features/routes';
import { cn } from '@/shared/cn';

import { CreditTitle } from './title.client';
import type { CreditContent as CreditContentType, CreditTitles } from './model';
import content22JSON from './content-22.json';
import content23JSON from './content-23.json';
import titles22JSON from './title-22.json';
import titles23JSON from './title-23.json';

const contentMap = {
  '22': content22JSON as CreditContentType,
  '23': content23JSON as CreditContentType,
};

const titlesMap = {
  '22': titles22JSON as CreditTitles,
  '23': titles23JSON as CreditTitles,
};

const partnerLogosMap = {
  '22': [
    { src: '/imgs/partners/2022/partner1.png', height: 35, width: 265 },
    { src: '/imgs/partners/2022/partner2.png', height: 30, width: 275 },
    { src: '/imgs/partners/2022/partner3.png', height: 60, width: 200 },
  ],
  '23': [
    { src: '/imgs/partners/2023/cultural-sharing-space.png', height: 40, width: 300 },
    { src: '/imgs/partners/2023/lion-sheep-small-library.webp', height: 55, width: 350 },
    { src: '/imgs/partners/2023/gyeonggi-cultural-foundation.webp', height: 80, width: 180 },
  ],
};

const contentMapper = (data: Record<string, string>) =>
  Object.entries(data).map(([key, value]) => <p key={key}>{`${key}: ${value}`}</p>);

export default async function CreditPage({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;
  const yearKey = year as Year;
  const { titles } = titlesMap[yearKey];
  const { info, participants, creators, partners } = contentMap[yearKey];
  const partnerLogos = partnerLogosMap[yearKey];

  return (
    <>
      <CreditTitle data={titles} />

      <div className="leading-relaxed text-white">
        {contentMapper(info)}
        <br />
        <p>{`참여자 : ${participants}`}</p>
        <br />
        {contentMapper(creators)}
        <br />
        {contentMapper(partners)}
      </div>

      <div className="grid w-full grid-cols-1 gap-8 pb-8 md:grid-cols-2">
        {partnerLogos.map((datum, index) => (
          <div
            key={`partner-${index}`}
            className={cn('flex justify-center', index === partnerLogos.length - 1 && 'col-[1/-1]')}
          >
            <Image
              height={datum.height}
              width={datum.width}
              alt={`partner-${index}`}
              src={datum.src}
              priority
              draggable={false}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </>
  );
}
