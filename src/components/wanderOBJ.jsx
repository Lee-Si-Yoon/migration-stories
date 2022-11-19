import { motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Blocker = styled.div`
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;

const StoryWrapper = styled.div`
  width: 100%;
  height: 50%;
  align-self: flex-end;
  justify-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
`;

const Story = styled.p`
  text-align: center;
  font-size: 1.5rem;
`;

// TODO X버튼 높이 지정하기
const ButtonWrapper = styled.div`
  margin-top: 2rem;
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  border: none;
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const OBJ = styled(motion.img)`
  /* position: absolute; */
  cursor: pointer;
  z-index: ${(props) => (props.focus ? 100 : 0)};
  filter: brightness(${(props) => (props.focus ? 1.5 : 1)});
`;

const lerp = (a, b, n) => (1 - n) * a + n * b;

export default function WanderOBJ({ imgsrc, name, func, text }) {
  const imgRef = useRef(null);
  // ANIMATE
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // STYLING
  const [opacity, setOpacity] = useState(1);
  const [durationState, setDuration] = useState(0);
  // INTERACTIONS
  const [isPaused, setIsPaused] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [focus, setFocus] = useState(false);

  // 화면 벗어났을때 boolean 반환
  function resetPosition() {
    let bool = false;
    if (
      imgRef.current.getBoundingClientRect().x < 0 - imgRef.current.getBoundingClientRect().width ||
      imgRef.current.getBoundingClientRect().x > window.innerWidth ||
      imgRef.current.getBoundingClientRect().y <
        0 - imgRef.current.getBoundingClientRect().height ||
      imgRef.current.getBoundingClientRect().y > window.innerHeight
    ) {
      let targetPosition = {
        x: window.innerWidth / 2 - imgRef.current.getBoundingClientRect().width / 2,
        y: window.innerHeight / 2 - imgRef.current.getBoundingClientRect().height / 2,
      };
      bool = true;
      setOpacity(0);
      setDuration(0.25);
      setPosition((pos) => ({
        x: lerp(pos.x, targetPosition.x, 1),
        y: lerp(pos.y, targetPosition.y, 1),
      }));
      // TODO 이거 안됨, 서서히 생기게 만들기
      setTimeout(() => {
        let alpha = 0;
        let intervalId = 0;
        function fadeIn() {
          if (alpha > 1) {
            alpha = alpha + 0.1;
            return alpha;
          } else {
            clearInterval(intervalId);
          }
        }
        intervalId = setInterval(fadeIn, 25);
        setOpacity(fadeIn);
      }, 1000);
    } else {
      bool = false;
    }
    return { bool };
  }

  // 모서리 접근시
  // function nearBorder() {
  //   if (
  //     imgRef.current.getBoundingClientRect().x < 0 ||
  //     imgRef.current.getBoundingClientRect().x >
  //       window.innerWidth - imgRef.current.getBoundingClientRect().width / 2 ||
  //     imgRef.current.getBoundingClientRect().y < 0 ||
  //     imgRef.current.getBoundingClientRect().y >
  //       window.innerHeight - imgRef.current.getBoundingClientRect().height / 2
  //   ) {
  //     // imgRef.current.style.opacity = 0;
  //     setOpacity(0);
  //   } else {
  //     setOpacity(1);
  //   }
  // }

  // 기본 렌더

  useLayoutEffect(() => {
    if (isPaused) {
      let timerId;
      let direction = Math.random() * Math.PI * 2;
      // let turningSpeed = Math.random() - 0.8;
      let velocity = 0.5 + Math.random() * 1;
      const f = () => {
        // resetPosition();
        if (resetPosition().bool) {
          direction = Math.random() * Math.PI * 2;
          // turningSpeed = Math.random() - 0.8;
          velocity = 0.5 + Math.random() * 1;
        }
        // direction = direction + turningSpeed * 0.01;
        setPosition((pos) => ({
          x: pos.x + Math.sin(direction) * velocity,
          y: pos.y + Math.cos(direction) * velocity,
        }));
        timerId = requestAnimationFrame(f);
      };

      timerId = requestAnimationFrame(f);
      return () => cancelAnimationFrame(timerId);
    }
  }, [isPaused]);

  // 클릭시 중앙으로
  useLayoutEffect(() => {
    if (isClicked) {
      setDuration(0);
      let timerId;
      let targetPosition = {
        x: window.innerWidth / 2 - imgRef.current.getBoundingClientRect().width / 2,
        y: window.innerHeight / 2 - imgRef.current.getBoundingClientRect().height,
      };
      const f = () => {
        setPosition((pos) => ({
          x: lerp(pos.x, targetPosition.x, 0.025),
          y: lerp(pos.y, targetPosition.y, 0.025),
        }));
        timerId = requestAnimationFrame(f);
      };
      timerId = requestAnimationFrame(f);
      return () => cancelAnimationFrame(timerId);
    }
  }, [isClicked]);

  function onClick() {
    setIsPaused((prev) => !prev);
    setIsClicked((prev) => !prev);
    setFocus((prev) => !prev);
  }

  return (
    <div>
      <OBJ
        style={{ position: "absolute" }}
        ref={imgRef}
        src={imgsrc}
        alt={name}
        height={350}
        transition={{ duration: durationState }}
        animate={{
          x: position.x,
          y: position.y,
          opacity: opacity,
        }}
        onClick={() => {
          func(onClick);
        }}
        focus={focus}
        whileHover={{ scale: 1.1 }}
      />
      {isClicked ? (
        <Blocker>
          <div style={{ width: "100%", height: "50%" }}></div>
          <StoryWrapper>
            <Story>{text}</Story>
            <ButtonWrapper>
              <motion.div
                whileHover={{
                  y: -5,
                  borderRadius: "1.5rem",
                }}
              >
                <LinkButton to={`/${name}`}>스토리 보기</LinkButton>
              </motion.div>
              <CancelButton
                whileHover={{ y: -5, color: "black", backgroundColor: "#999" }}
                onClick={() => {
                  func(onClick);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </CancelButton>
            </ButtonWrapper>
          </StoryWrapper>
        </Blocker>
      ) : null}
    </div>
  );
}
