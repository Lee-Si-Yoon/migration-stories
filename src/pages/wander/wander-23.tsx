import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "./wander-23.module.scss";
import stories from "./wander-data-23";
import ProgressiveImg from "../../components/utils/progressive-image";
import WanderOBJ from "../../components/wander-obj/wander-obj";
import wanderBackground from "../../imgs/wander/2023/wanderBackground.webp";
import Paths from "../../routes/paths";

function Wander23Page() {
  const navigate = useNavigate();

  return (
    <div className={classes.Container}>
      <img
        src={wanderBackground}
        loading="lazy"
        draggable={false}
        alt="background"
        className={classes.BackgroundImage}
      />
      <div className={classes.Story}>
        {stories.map((story) => (
          <WanderOBJ
            key={story.name}
            translation={story.translation}
            text={story.text}
            onSubmit={() => navigate(`${Paths[23].video}/${story.name}`)}
          >
            <ProgressiveImg
              placeholderSrc={story.placeholderSrc}
              src={story.src}
              alt={story.name}
            />
          </WanderOBJ>
        ))}
      </div>
    </div>
  );
}

Wander23Page.displayName = "Wander23Page";

export default Wander23Page;
