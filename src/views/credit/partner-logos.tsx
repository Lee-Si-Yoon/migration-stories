import React from "react";

import classes from "./partner-logo.module.scss";

function PartnerLogos({ data }: { data: string[] }) {
  return (
    <div className={classes.Logos}>
      {data.map((logo, index) => (
        <img
          loading="lazy"
          key={`partner-${index}`}
          alt={`partner-${index}`}
          src={logo}
          draggable="false"
        />
      ))}
    </div>
  );
}

PartnerLogos.displayName = "PartnerLogos";

export default PartnerLogos;
