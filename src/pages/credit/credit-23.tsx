import React from "react";

import contentJSON from "./content-23.json";
import classes from "./credit-22.module.scss";
import type { Content as ContentProps } from "./model";
import titlesJSON from "./title-23.json";
import {
  partner1,
  partner2,
  partner3,
  partner4,
} from "../../imgs/partners/2023";
import Content from "../../views/credit/content";
import PartnerLogos from "../../views/credit/partner-logos";
import Title from "../../views/credit/title";

interface Titles {
  titles: string[];
}

const { titles } = JSON.parse(JSON.stringify(titlesJSON)) as Titles;
const { info, participants, creators, partners } = JSON.parse(
  JSON.stringify(contentJSON)
) as ContentProps;
const partnerLogos = [partner1, partner2, partner3, partner4];

function Credit23Page() {
  return (
    <div className={classes.Container}>
      <div className={classes.TitlesContainer}>
        <Title data={titles} />
      </div>
      <div className={classes.ContentContainer}>
        <Content
          info={info}
          participants={participants}
          creators={creators}
          partners={partners}
        />
        {/* TODO: 2023 partners logos */}
        <PartnerLogos data={partnerLogos} />
      </div>
    </div>
  );
}

Credit23Page.displayName = "Credit22Page";

export default Credit23Page;
