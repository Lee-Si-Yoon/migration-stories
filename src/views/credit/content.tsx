import React from "react";

import classes from "./content.module.scss";
import type { Content as ContentProps } from "../../pages/credit/model";

const contentMapper = (data: Record<string, string>) =>
  Object.entries(data).map(([key, value]) => (
    <p key={key}>{`${key}: ${value}`}</p>
  ));

function Content({ info, participants, creators, partners }: ContentProps) {
  return (
    <div className={classes.Texts}>
      {contentMapper(info)}
      <br />
      <p>{`참여자 : ${participants}`}</p>
      <br />
      {contentMapper(creators)}
      <br />
      {contentMapper(partners)}
    </div>
  );
}

Content.displayName = "Content";

export default Content;
