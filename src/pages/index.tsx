import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "./index.module.scss";
import Button from "../components/buttons/button";
import ProgressiveImg from "../components/utils/progressive-image";
import logo22Min from "../imgs/logo/logo22-min.webp";
import logo22 from "../imgs/logo/logo22.webp";
import logo23Min from "../imgs/logo/logo23-min.webp";
import logo23 from "../imgs/logo/logo23.webp";
import Paths from "../routes/paths";

function IndexPage() {
  const navigate = useNavigate();

  return (
    <main className={classes.Index}>
      <div className={classes.Layout}>
        <div className={classes.Container22}>
          <ProgressiveImg
            placeholderSrc={logo22Min}
            src={logo22}
            alt="logo22.png"
          />
          <Button onPress={() => navigate(Paths[22].wander)}>to 2022</Button>
        </div>
        <div className={classes.Container23}>
          <ProgressiveImg
            placeholderSrc={logo23Min}
            src={logo23}
            alt="logo23.png"
          />
          <Button onPress={() => navigate(Paths[23].wander)}>to 2023</Button>
        </div>
      </div>
    </main>
  );
}

IndexPage.displayName = "IndexPage";

export default IndexPage;
