import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useOverlayTriggerState } from "react-stately";

import WanderDialog from "./wander-dialog";
import WanderModal from "./wander-modal";
import classes from "./wander-obj.module.scss";
import Paths from "../../routes/paths";
import { lerp } from "../../utils/math";
import ProgressiveImg from "../utils/progressive-image";

interface WanderOBJProps {
  imgsrc: string;
  placeholderSrc: string;
  name: string;
  text: string;
  translation: string;
}

function WanderOBJ({
  imgsrc,
  placeholderSrc,
  name,
  text,
  translation,
}: WanderOBJProps) {
  const navigate = useNavigate();
  const state = useOverlayTriggerState({});
  const imgRef = React.useRef<HTMLDivElement>(null);
  // ANIMATE
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  // STYLING
  const [opacity, setOpacity] = React.useState(1);
  const [durationState, setDuration] = React.useState(0);
  const [centered, setCentered] = React.useState<boolean>(false);
  // INTERACTIONS
  const [isPaused, setIsPaused] = React.useState(true);
  const [isClicked, setIsClicked] = React.useState(false);

  React.useEffect(() => {
    if (!isPaused) return;
    let timerId: number;
    let direction = Math.random() * Math.PI * 2;
    let velocity = 0.5 + Math.random() * 1;
    const f = () => {
      if (!imgRef.current) return;
      const { x, y, width, height } = imgRef.current.getBoundingClientRect();
      if (
        x + width < 0 ||
        x > window.innerWidth ||
        y + height < 0 ||
        y > window.innerHeight
      ) {
        setOpacity(0);
        setPosition({ x: 0, y: 0 });
        setCentered(true);
      } else {
        if (centered) {
          setOpacity((prevOpacity) => lerp(prevOpacity, 1, 0.05));
          if (opacity > 0.95) {
            setCentered(false);
          }
        }
        setPosition((pos) => ({
          x: pos.x + Math.sin(direction) * velocity,
          y: pos.y + Math.cos(direction) * velocity,
        }));
      }

      timerId = requestAnimationFrame(f);
    };
    timerId = requestAnimationFrame(f);

    return () => cancelAnimationFrame(timerId);
  }, [isPaused, centered]);

  // 클릭시 중앙으로
  React.useEffect(() => {
    if (!isClicked || !imgRef.current) return;
    const { height } = imgRef.current.getBoundingClientRect();
    setDuration(0);
    let timerId: number;
    let targetPosition = {
      x: 0,
      y: 0 - height * 0.5,
    };
    const f = () => {
      setPosition((pos) => ({
        x: lerp(pos.x, targetPosition.x, 0.05),
        y: lerp(pos.y, targetPosition.y, 0.05),
      }));
      timerId = requestAnimationFrame(f);
    };
    timerId = requestAnimationFrame(f);
    return () => cancelAnimationFrame(timerId);
  }, [isClicked]);

  return (
    <>
      <WanderModal state={state}>
        <WanderDialog
          onClose={() => {
            state.close();
            setIsPaused((prev) => !prev);
            setIsClicked((prev) => !prev);
          }}
          onSubmit={() => navigate(`${Paths[22].story}/${name}`)}
        >
          <div className={classes.Modal}>
            <p className={classes.ModalText}>{text}</p>
            <p className={classes.ModalTranslation}>{translation}</p>
          </div>
        </WanderDialog>
      </WanderModal>
      <motion.div
        ref={imgRef}
        role="presentation"
        onClick={() => {
          if (!isClicked) {
            state.open();
            setIsPaused((prev) => !prev);
            setIsClicked((prev) => !prev);
          }
        }}
        className={[
          isClicked ? classes.Clicked : "",
          classes.MovingObject,
        ].join(" ")}
        transition={{ duration: durationState }}
        animate={{
          x: position.x,
          y: position.y,
          opacity: opacity,
        }}
      >
        <ProgressiveImg
          src={imgsrc}
          alt={name}
          placeholderSrc={placeholderSrc}
        />
      </motion.div>
    </>
  );
}

WanderOBJ.displayName = "WanderOBJ";

export default WanderOBJ;
