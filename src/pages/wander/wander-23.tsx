import React from "react";
import { Link } from "react-router-dom";

import classes from "./wander-22.module.scss";
import wanderBackground from "../../imgs/wander/2023/wanderBackground.webp";
import Paths from "../../routes/paths";

function Wander23Page() {
  return (
    <div className={classes.Container}>
      <img
        src={wanderBackground}
        loading="lazy"
        draggable={false}
        alt="background"
        className={classes.BackgroundImage_2023}
      />
      <Link to={`${Paths[22].video}/name`} style={{ zIndex: 1 }}>
        to video
      </Link>
    </div>
  );
}

Wander23Page.displayName = "Wander23Page";

export default Wander23Page;
