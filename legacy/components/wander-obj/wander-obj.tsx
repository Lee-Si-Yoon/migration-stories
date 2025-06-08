import { motion } from "framer-motion";
import React from "react";
import { useOverlayTriggerState } from "react-stately";

import classes from "./wander-obj.module.scss";
import { lerp } from "../../utils/math";
import Button from "../buttons/button";
import Modal from "../modal/modal";
import WanderDialog22 from "../modal/wander-dialog/wander-dialog";
import XCancelIcon from "../svg/x-cancel.svg?react";

interface WanderOBJProps extends React.PropsWithChildren {
  text: string;
  translation: string;
  submitText?: string;
  onSubmit: VoidFunction;
}

function WanderOBJ({
  text,
  submitText,
  translation,
  children,
  onSubmit,
}: WanderOBJProps) {
  const state = useOverlayTriggerState({});
  const imgRef = React.useRef<HTMLDivElement>(null);
  // ANIMATE
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  // STYLING
  const [opacity, setOpacity] = React.useState(1);
  const [durationState, setDuration] = React.useState(0);
  const [centered, setCentered] = React.useState(false);
  // INTERACTIONS
  const [isClicked, setIsClicked] = React.useState(false);

  React.useEffect(() => {
    if (isClicked) return;

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
  }, [isClicked, centered]);

  // center when clicked
  React.useEffect(() => {
    if (!isClicked || !imgRef.current) return;
    const { height } = imgRef.current.getBoundingClientRect();
    setDuration(0);
    let timerId: number;
    let targetPosition = {
      x: 0,
      // 0 is center of screen, 48 is header's height
      y: 0 - height * 0.5 - 48,
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
      <Modal state={state} variant="wander" isKeyboardDismissDisabled>
        <WanderDialog22>
          <div className={classes.Modal}>
            <span className={classes.ModalText}>{text}</span>
            <span className={classes.ModalTranslation}>{translation}</span>
            <div className={classes.ButtonWrapper}>
              <Button
                onPress={() => onSubmit()}
                className={classes.ConfirmButton}
              >
                <pre>
                  {`스토리 보기\n`}
                  <span>{submitText}</span>
                </pre>
              </Button>
              <Button
                onPress={() => {
                  setTimeout(() => {
                    state.close();
                    setIsClicked(false);
                  }, 100);
                }}
                className={classes.CloseButton}
              >
                <XCancelIcon height={24} width={24} />
              </Button>
            </div>
          </div>
        </WanderDialog22>
      </Modal>
      <motion.div
        ref={imgRef}
        role="presentation"
        onClick={() => {
          if (!isClicked) {
            state.open();
            setIsClicked(true);
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
        {children}
      </motion.div>
    </>
  );
}

WanderOBJ.displayName = "WanderOBJ";

export default WanderOBJ;
