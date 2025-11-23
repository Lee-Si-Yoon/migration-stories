import React from 'react';

import contentJSON from './content-22.json';
import classes from './credit-22.module.scss';
import type { Content as ContentProps } from './model';
import titlesJSON from './title-22.json';
import { partner1, partner2, partner3 } from '../../imgs/partners/2022';
import Content from '../../views/credit/content';
import PartnerLogos from '../../views/credit/partner-logos';
import Title from '../../views/credit/title';

interface Titles {
  titles: string[];
}

const { titles } = JSON.parse(JSON.stringify(titlesJSON)) as Titles;
const { info, participants, creators, partners } = JSON.parse(
  JSON.stringify(contentJSON)
) as ContentProps;
const partnerLogos = [
  { src: partner1, height: 35 },
  { src: partner2, height: 30 },
  { src: partner3, height: 60 },
];

function Credit22Page() {
  return (
    <main className={classes.CreditPage}>
      <div className={classes.TitlesContainer}>
        <Title data={titles} />
      </div>
      <div className={classes.ContentContainer}>
        <Content info={info} participants={participants} creators={creators} partners={partners} />
      </div>
      <div className={classes.PartnerContainer}>
        <PartnerLogos data={partnerLogos} />
      </div>
    </main>
  );
}

Credit22Page.displayName = 'Credit22Page';

export default Credit22Page;
