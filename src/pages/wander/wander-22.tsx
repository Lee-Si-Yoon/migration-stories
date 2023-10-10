import React from "react";

import classes from "./wander-22.module.scss";
import stories from "./wander-data-22";
import WanderOBJ from "../../components/wander-obj/wander-obj";
import wanderBackground from "../../imgs/wander/2022/wanderBackground.png";

function Wander22Page() {
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
            imgsrc={story.src}
            placeholderSrc={story.placeholderSrc}
            translation={story.translation}
            text={story.text}
            name={story.name}
          />
        ))}
      </div>
    </div>
  );
}

Wander22Page.displayName = "Wander22Page";

export default Wander22Page;
