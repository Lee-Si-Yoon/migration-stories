import { motion } from "framer-motion";
import React, { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProgressiveImg from "./ProgressiveImg";
import { lerp } from "../utils/math";

const OBJWrapper = styled(motion.div)<{ $focus: boolean }>`
  /* position: absolute; */
  cursor: pointer;
  z-index: ${(props) => (props.$focus ? 100 : 0)};
  filter: ${(props) => (props.$focus ? "brightness(1.5)" : "brightness(1)")};
`;

const OBJ = styled(ProgressiveImg)`
  width: 600px;
  @media screen and (max-width: 575.98px) {
    width: 380px;
  }
`;

const Blocker = styled.div`
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StoryWrapper = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Story = styled.div`
  max-width: 600px;
  min-width: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 575.98px) {
    width: 100%;
  }
`;
const StoryMain = styled.div`
  padding-bottom: 1rem;
  p {
    text-align: center;
    color: white;
    font-size: 1.5rem;
    line-height: 160%;
  }
  @media screen and (max-width: 575.98px) {
    width: 80%;
    p {
      font-size: 1.2rem;
    }
  }
`;
const StoryText = styled.div`
  p {
    font-size: 1.2rem;
    text-align: center;
    line-height: 140%;
  }
  @media screen and (max-width: 575.98px) {
    width: 80%;
    p {
      font-size: 1rem;
    }
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LinkButton = styled(Link)`
  background-color: ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.background};
  /* border: 1px solid ${(props) => props.theme.colors.background}; */
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  font-size: 1.25rem;
  padding: 0 2rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;
const CancelButton = styled(motion.button)`
  margin-top: 2rem;
  background: none;
  color: white;
  border: 1px solid white;
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

interface WanderOBJProps {
  imgsrc: string;
  placeholderSrc: string;
  name: string;
  text: string;
  translation: string;
}

export default function WanderOBJ({
  imgsrc,
  placeholderSrc,
  name,
  text,
  translation,
}: WanderOBJProps) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  // ANIMATE
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [centered, setCentered] = useState<boolean>(false);
  // STYLING
  const [opacity, setOpacity] = useState(1);
  const [durationState, setDuration] = useState(0);
  // INTERACTIONS
  const [isPaused, setIsPaused] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [focus, setFocus] = useState(false);

  // 기본 렌더
  React.useEffect(() => {
    if (!isPaused) return;
    let timerId: number;
    let direction = Math.random() * Math.PI * 2;
    // let turningSpeed = Math.random() - 0.8;
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
        const targetPosition = {
          x: window.innerWidth / 2 - width / 2,
          y: window.innerHeight / 2 - height / 2,
        };
        setOpacity(0);
        setPosition({
          x: targetPosition.x,
          y: targetPosition.y,
        });
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
    const { width, height } = imgRef.current.getBoundingClientRect();
    setDuration(0);
    let timerId: number;
    let targetPosition = {
      x: window.innerWidth / 2 - width / 2,
      y: window.innerHeight / 2 - height,
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

  function onClick() {
    setIsPaused((prev) => !prev);
    setIsClicked((prev) => !prev);
    setFocus((prev) => !prev);
  }

  return (
    <div key={name}>
      <OBJWrapper
        // loading="lazy"
        style={{ position: "absolute" }}
        ref={imgRef}
        transition={{ duration: durationState }}
        animate={{
          x: position.x,
          y: position.y,
          opacity: opacity,
        }}
        onClick={onClick}
        $focus={focus}
        whileHover={focus ? { scale: 1 } : { scale: 1.1 }}
      >
        <OBJ src={imgsrc} alt={name} placeholderSrc={placeholderSrc} />
      </OBJWrapper>
      {isClicked ? (
        <Blocker>
          <div className="blank" style={{ width: "100%", height: "40%" }}></div>
          <StoryWrapper>
            <Story>
              <StoryMain>
                {text.split("\n").map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
              </StoryMain>
              <StoryText>
                {translation.split("\n").map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
              </StoryText>
            </Story>
            <ButtonWrapper>
              <motion.div
                whileHover={{
                  y: -5,
                  borderRadius: "1.5rem",
                }}
              >
                <LinkButton to={`/story/${name}`}>스토리 보기</LinkButton>
              </motion.div>
              <CancelButton onClick={onClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </CancelButton>
            </ButtonWrapper>
          </StoryWrapper>
        </Blocker>
      ) : null}
    </div>
  );
}
