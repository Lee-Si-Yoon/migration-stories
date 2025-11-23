import type { Year } from '@/features/routes';

import { CreditContent } from './content';
import { CreditTitle } from './title';
import { PartnerLogos } from './partner-logos';
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
    { src: '/imgs/partners/2022/partner1.png', height: 35 },
    { src: '/imgs/partners/2022/partner2.png', height: 30 },
    { src: '/imgs/partners/2022/partner3.png', height: 60 },
  ],
  '23': [
    { src: '/imgs/partners/2023/cultural-sharing-space.png', height: 40 },
    { src: '/imgs/partners/2023/lion-sheep-small-library.webp', height: 55 },
    { src: '/imgs/partners/2023/gyeonggi-cultural-foundation.webp', height: 80 },
  ],
};

export default async function CreditPage({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;
  const yearKey = year as Year;
  const { titles } = titlesMap[yearKey];
  const { info, participants, creators, partners } = contentMap[yearKey];
  const partnerLogos = partnerLogosMap[yearKey];

  return (
    <main className="mx-auto w-[80rem] md:w-full">
      <div className="mt-32 md:mt-24">
        <CreditTitle data={titles} />
      </div>
      <div className="mx-auto mt-16 w-[56.25rem] md:mt-8 md:w-[calc(100%-1rem)]">
        <CreditContent
          info={info}
          participants={participants}
          creators={creators}
          partners={partners}
        />
      </div>
      <div className="mx-auto mt-16 w-[56.25rem] pb-16 md:mt-8 md:w-full md:pb-8">
        <PartnerLogos data={partnerLogos} />
      </div>
    </main>
  );
}
