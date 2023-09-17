import React from "react";

import contentJSON from "./content-22.json";
import classes from "./credit-22.module.scss";
import type { Content as ContentProps } from "./model";
import titlesJSON from "./title-22.json";
import { partner1, partner2, partner3 } from "../../imgs/partners/2022";
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
const partnerLogos = [partner1, partner2, partner3];

function Credit22Page() {
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
        <PartnerLogos data={partnerLogos} />
      </div>
    </div>
  );
}

Credit22Page.displayName = "Credit22Page";

export default Credit22Page;
