import { CreditContent, CreditTitle, PartnerLogos } from '@/widgets/credit';
import type { CreditContentType, CreditTitles } from '@/widgets/credit';
import contentJSON from '@/shared/data/credit/content-23.json';
import titlesJSON from '@/shared/data/credit/title-23.json';

const { titles } = titlesJSON as CreditTitles;
const { info, participants, creators, partners } = contentJSON as CreditContentType;

const partnerLogos = [
  { src: '/imgs/partners/2023/cultural-sharing-space.png', height: 40 },
  { src: '/imgs/partners/2023/lion-sheep-small-library.webp', height: 55 },
  { src: '/imgs/partners/2023/gyeonggi-cultural-foundation.webp', height: 80 },
];

export default function Credit23Page() {
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
