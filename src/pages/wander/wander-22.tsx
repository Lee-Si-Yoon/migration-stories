import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "./wander-22.module.scss";
import stories from "./wander-data-22";
import ProgressiveImg from "../../components/utils/progressive-image";
import WanderOBJ from "../../components/wander-obj/wander-obj";
import wanderBackground from "../../imgs/wander/2022/wanderBackground.png";
import Paths from "../../routes/paths";

function Wander22Page() {
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
            onSubmit={() => navigate(`${Paths[22].story}/${story.name}`)}
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

Wander22Page.displayName = "Wander22Page";

export default Wander22Page;
