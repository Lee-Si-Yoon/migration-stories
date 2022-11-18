import { motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

const lerp = (a, b, n) => (1 - n) * a + n * b;

export default function WanderOBJ({ imgsrc, name, clicked }) {
  const imgRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(1);
  const [isPaused, setIsPaused] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [durationState, setDuration] = useState(0);

  function resetPosition(direction, velocity) {
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
      setOpacity(0);
      setDuration(0.25);
      direction = Math.random() * Math.PI * 2;
      velocity = Math.random() * 2;
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
    }
  }
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

  useLayoutEffect(() => {
    if (isPaused) {
      let timerId;
      let direction = Math.random() * Math.PI * 2;
      let turningSpeed = Math.random() - 0.3;
      let velocity = Math.random() * 2;
      const f = () => {
        direction = direction + turningSpeed / 100;
        setPosition((pos) => ({
          x: pos.x + Math.sin(direction) * velocity,
          y: pos.y + Math.cos(direction) * velocity,
        }));
        // nearBorder();
        resetPosition(direction, velocity);
        timerId = requestAnimationFrame(f);
      };

      timerId = requestAnimationFrame(f);
      return () => cancelAnimationFrame(timerId);
    }
  }, [isPaused]);

  useLayoutEffect(() => {
    if (isClicked) {
      setDuration(0);
      let timerId;
      let targetPosition = {
        x: window.innerWidth / 2 - imgRef.current.getBoundingClientRect().width / 2,
        y: window.innerHeight / 2 - imgRef.current.getBoundingClientRect().height / 2,
      };
      const f = () => {
        setPosition((pos) => ({
          x: lerp(pos.x, targetPosition.x, 0.075),
          y: lerp(pos.y, targetPosition.y, 0.075),
        }));
        timerId = requestAnimationFrame(f);
      };
      timerId = requestAnimationFrame(f);
      return () => cancelAnimationFrame(timerId);
    }
  }, [isClicked]);

  return (
    <motion.img
      style={{ position: "absolute" }}
      ref={imgRef}
      src={imgsrc}
      alt={name}
      width={500}
      transition={{ duration: durationState }}
      animate={{
        x: position.x,
        y: position.y,
        opacity: opacity,
      }}
      onClick={() => {
        setIsPaused(!isPaused);
        setIsClicked(!isClicked);
        console.log(clicked((prev) => !prev));
      }}
    />
  );
}
