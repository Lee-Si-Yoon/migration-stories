import React from "react";

import classes from "./partner-logo.module.scss";

function PartnerLogos({
  data,
}: {
  data: Array<{ src: string; height?: number }>;
}) {
  return (
    <div className={classes.Logos}>
      {data.map((datum, index) => (
        <div
          key={`partner-${index}`}
          className={index > 1 ? classes.CenterRow : classes.LogoWrapper}
        >
          <img
            loading="lazy"
            alt={`partner-${index}`}
            src={datum.src}
            height={datum.height ?? 30}
            width={"auto"}
            draggable="false"
          />
        </div>
      ))}
    </div>
  );
}

PartnerLogos.displayName = "PartnerLogos";

export default PartnerLogos;
