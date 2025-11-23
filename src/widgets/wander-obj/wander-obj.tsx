'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { useOverlayTriggerState } from 'react-stately';

import { lerp } from '../../../legacy/utils/math';
import Button from '../buttons/button';
import Modal from '../modal/modal';
import WanderDialog22 from '../modal/wander-dialog/wander-dialog';

interface WanderOBJProps extends React.PropsWithChildren {
  text: string;
  translation: string;
  submitText?: string;
  onSubmit: VoidFunction;
}

function WanderOBJ({ text, submitText, translation, children, onSubmit }: WanderOBJProps) {
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
      if (x + width < 0 || x > window.innerWidth || y + height < 0 || y > window.innerHeight) {
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
          <div className="flex w-[37.5rem] flex-col items-center gap-4 max-md:w-[calc(100%-1rem)]">
            <span className="m-0 text-2xl leading-[150%] font-bold text-white max-md:text-base max-md:font-bold">
              {text}
            </span>
            <span className="m-0 text-xl leading-[150%] font-medium text-[#999] max-md:text-sm">
              {translation}
            </span>
            <div className="mt-6 flex flex-col items-center gap-6">
              <Button
                onPress={() => onSubmit()}
                className="rounded-lg border-0 bg-[#999] px-8 py-4 max-md:px-5 max-md:py-3"
              >
                <pre className="m-0 text-xl leading-[initial] font-semibold text-black max-md:text-base">
                  {`스토리 보기\n`}
                  <span className="text-base leading-[140%] font-normal text-black max-md:text-sm">
                    {submitText}
                  </span>
                </pre>
              </Button>
              <Button
                onPress={() => {
                  setTimeout(() => {
                    state.close();
                    setIsClicked(false);
                  }, 100);
                }}
                className="h-7 w-7"
              >
                <Image src="/svgs/x-cancel.svg" alt="Close" width={24} height={24} />
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
        className={`absolute cursor-pointer ${isClicked ? 'z-[101] scale-110 brightness-150' : ''}`}
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

WanderOBJ.displayName = 'WanderOBJ';

export default WanderOBJ;
