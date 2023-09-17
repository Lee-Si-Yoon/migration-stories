import React from "react";
import { useNavigate } from "react-router-dom";
import { useOverlayTriggerState } from "react-stately";

import classes from "./wander-22.module.scss";
import Button from "../../components/buttons/button";
import WanderDialog from "../../components/wander-modal/wander-dialog";
import WanderModal from "../../components/wander-modal/wander-modal";
import wanderBackground from "../../imgs/wander/wanderBackground.png";
import Paths from "../../routes/paths";

function Wander22Page() {
  const state = useOverlayTriggerState({});
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
      <WanderModal state={state}>
        <WanderDialog
          title={"d"}
          onClose={() => state.close()}
          onSubmit={() => navigate(`${Paths[22].story}/name`)}
        >
          modal
        </WanderDialog>
      </WanderModal>
      <Button onPress={() => state.open()}>open</Button>
    </div>
  );
}

Wander22Page.displayName = "Wander22Page";

export default Wander22Page;
