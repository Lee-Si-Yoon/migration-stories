import React from "react";

import classes from "./wander-22.module.scss";
import stories from "./wander-data-23";
import WanderOBJ from "../../components/wander-obj/wander-obj";
import wanderBackground from "../../imgs/wander/2023/wanderBackground.webp";

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

Wander23Page.displayName = "Wander23Page";

export default Wander23Page;
