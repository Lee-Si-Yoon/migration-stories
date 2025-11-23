import type { PartnerLogo } from './model';

interface PartnerLogosProps {
  data: PartnerLogo[];
}

export function PartnerLogos({ data }: PartnerLogosProps) {
  return (
    <div className="mt-8 grid w-full grid-cols-[repeat(auto-fit,minmax(18.75rem,1fr))] gap-10 md:flex md:flex-col md:items-center">
      {data.map((datum, index) => (
        <div
          key={`partner-${index}`}
          className={index > 1 ? 'col-[1/-1] grid place-items-center' : 'grid place-items-center'}
        >
          <img
            loading="lazy"
            alt={`partner-${index}`}
            src={datum.src}
            height={datum.height ?? 30}
            width="auto"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}
