import { motion } from "framer-motion";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./index.module.scss";
import Button from "../components/buttons/button";
import ProgressiveImg from "../components/utils/progressive-image";
import nepal from "../imgs/fragment/네팔어.png";
import myanmar from "../imgs/fragment/미얀마어.png";
import vietnam from "../imgs/fragment/베트남어.png";
import sriLanka from "../imgs/fragment/스리랑카어.png";
import english from "../imgs/fragment/영어.png";
import cambodia from "../imgs/fragment/캄보디아어.png";
import korea from "../imgs/fragment/한국어.png";
import nepalMin from "../imgs/fragment-min/네팔어-min.png";
import myanmarMin from "../imgs/fragment-min/미얀마어-min.png";
import vietnamMin from "../imgs/fragment-min/베트남어-min.png";
import sriLankaMin from "../imgs/fragment-min/스리랑카어-min.png";
import englishMin from "../imgs/fragment-min/영어-min.png";
import cambodiaMin from "../imgs/fragment-min/캄보디아어-min.png";
import koreaMin from "../imgs/fragment-min/한국어-min.png";
import logo23Min from "../imgs/logo/logo23-min.webp";
import logo23 from "../imgs/logo/logo23.webp";
import Paths from "../routes/paths";

function IndexPage() {
  const navigate = useNavigate();

  return (
    <div className={classes.Layout}>
      <div className={classes.Container22}>
        <div className={classes.Spacer}>
          <ProgressiveImg
            className={[classes.Nepal, classes.GridImgs].join(" ")}
            placeholderSrc={nepalMin}
            src={nepal}
            alt="1.png"
          />
          <ProgressiveImg
            className={[classes.Myanmar, classes.GridImgs].join(" ")}
            placeholderSrc={myanmarMin}
            src={myanmar}
            alt="2.png"
          />
          <ProgressiveImg
            className={[classes.Vietnam, classes.GridImgs].join(" ")}
            placeholderSrc={vietnamMin}
            src={vietnam}
            alt="3.png"
          />
          <ProgressiveImg
            className={[classes.SriLanka, classes.GridImgs].join(" ")}
            placeholderSrc={sriLankaMin}
            src={sriLanka}
            alt="4.png"
          />
          <ProgressiveImg
            className={[classes.English, classes.GridImgs].join(" ")}
            placeholderSrc={englishMin}
            src={english}
            alt="5.png"
          />
          <ProgressiveImg
            className={[classes.Cambodia, classes.GridImgs].join(" ")}
            placeholderSrc={cambodiaMin}
            src={cambodia}
            alt="6.png"
          />
          <ProgressiveImg
            className={[classes.Korea, classes.GridImgs].join(" ")}
            placeholderSrc={koreaMin}
            src={korea}
            alt="7.png"
          />
        </div>
        <Button onPress={() => navigate(Paths[22].wander)}>to 2022</Button>
      </div>
      <div className={classes.Container23}>
        <div className={classes.Spacer}>
          <ProgressiveImg
            placeholderSrc={logo23Min}
            src={logo23}
            alt="logo23.png"
          />
          <Button onPress={() => navigate(Paths[23].wander)}>to 2023</Button>
        </div>
      </div>
    </div>
  );
}

IndexPage.displayName = "IndexPage";

export default IndexPage;
