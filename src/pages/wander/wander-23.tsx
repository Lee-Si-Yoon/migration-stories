import React from "react";
import { Link } from "react-router-dom";

import classes from "./wander-22.module.scss";
import wanderBackground from "../../imgs/wander/wanderBackground.png";
import Paths from "../../routes/paths";

function Wander23Page() {
  return (
    <div className={classes.Container}>
      <img
        src={wanderBackground}
        loading="lazy"
        draggable={false}
        alt="background"
        className={classes.BackgroundImage}
      />
      <Link to={`${Paths[22].video}/name`} style={{ zIndex: 1 }}>
        to video
      </Link>
    </div>
  );
}

Wander23Page.displayName = "Wander23Page";

export default Wander23Page;
