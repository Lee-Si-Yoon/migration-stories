import type { CreditContent } from './model';

const contentMapper = (data: Record<string, string>) =>
  Object.entries(data).map(([key, value]) => (
    <p key={key} className="m-0 leading-[180%] md:leading-[200%]">{`${key}: ${value}`}</p>
  ));

export function CreditContent({ info, participants, creators, partners }: CreditContent) {
  return (
    <div className="w-full text-base font-normal [word-break:keep-all] text-white [word-wrap:break-word]">
      {contentMapper(info)}
      <br />
      <p className="m-0 leading-[180%] md:leading-[200%]">{`참여자 : ${participants}`}</p>
      <br />
      {contentMapper(creators)}
      <br />
      {contentMapper(partners)}
    </div>
  );
}
