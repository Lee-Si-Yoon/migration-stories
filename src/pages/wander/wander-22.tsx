import React from "react";

import classes from "./wander-22.module.scss";
import stories from "./wander-data-22";
import WanderOBJ from "../../components/wander-modal/wander-obj";
import wanderBackground from "../../imgs/wander/wanderBackground.png";

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
  );
}

Wander22Page.displayName = "Wander22Page";

export default Wander22Page;
