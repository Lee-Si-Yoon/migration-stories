/* eslint-disable react/no-unknown-property */

import { Html, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import classes from "./story.module.scss";
import Paths from "../../routes/paths";
import { lerpRange } from "../../utils/math";
import storiesData from "../wander/wander-data-22";

const Akanain = React.lazy(() => import("../../gltf/Akinain.jsx"));
const Chamikara = React.lazy(() => import("../../gltf/Chamikara.jsx"));
const Dipak = React.lazy(() => import("../../gltf/Dipak.jsx"));
const Kemra = React.lazy(() => import("../../gltf/Kemra.jsx"));
const Sajana = React.lazy(() => import("../../gltf/Sajana.jsx"));
const Sunyena = React.lazy(() => import("../../gltf/Sunyena.jsx"));
const Ting = React.lazy(() => import("../../gltf/Ting.jsx"));

function GLTFLoader({ name }: { name: string }) {
  if (name === storiesData[0].name) {
    return <Sajana />;
  } else if (name === storiesData[1].name) {
    return <Chamikara />;
  } else if (name === storiesData[2].name) {
    return <Kemra />;
  } else if (name === storiesData[3].name) {
    return <Sunyena position={[0, -2, 0]} />;
  } else if (name === storiesData[4].name) {
    return <Ting />;
  } else if (name === storiesData[5].name) {
    return <Akanain />;
  } else if (name === storiesData[6].name) {
    return <Dipak />;
  } else {
    return null;
  }
}

function StoryPage() {
  const { name = "" } = useParams();
  const { progress } = useProgress();
  const navigate = useNavigate();

  let scrollingID = React.useRef<NodeJS.Timeout>();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = React.useState<number>(0);
  const [isScrolling, setScrolling] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (progress > 99 && containerRef.current) {
      containerRef.current.style.height = "500vh";
      setScrolling(true);
      setScrollPos(15);
    }
  }, [progress, containerRef.current]);

  React.useEffect(() => {
    function logic() {
      setScrolling(false);
      clearTimeout(scrollingID.current);
      if (!containerRef.current) return;
      const ratio =
        window.scrollY /
        (containerRef.current.offsetHeight - window.innerHeight);
      const percentage = lerpRange(ratio, 0, 1, 15, 100);
      setScrollPos(percentage);
      // FIXED 끝에 도착했을때 스크롤 안뜨게끔 - navigate 방식으로 해결
      scrollingID.current = setTimeout(function () {
        setScrolling(true);
      }, 2000);
    }

    function watchScroll() {
      window.addEventListener("scroll", logic, false);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logic, false);
    };
  });

  React.useEffect(() => {
    if (scrollPos > 99) {
      setScrolling(false);
      navigate(`${Paths[22].video}/${name}`, { replace: true });
    }
  }, [scrollPos, name, navigate]);

  return (
    <div ref={containerRef} className={classes.Container}>
      <div className={classes.StickyContainer}>
        <Canvas frameloop="demand">
          {/* <color attach="background" args={["skyblue"]} /> */}
          <directionalLight position={[0, 0, scrollPos]}>
            <ambientLight />
            <spotLight>
              <mesh visible position={[0, 0, scrollPos - 15]}>
                <React.Suspense
                  fallback={
                    <Html>
                      <div className={classes.Fallback}>{`${+progress.toFixed(
                        1
                      )}%`}</div>
                    </Html>
                  }
                >
                  <GLTFLoader name={name} />
                </React.Suspense>
              </mesh>
            </spotLight>
          </directionalLight>
        </Canvas>
      </div>
      {isScrolling && (
        <motion.div
          initial={{
            y: -4,
          }}
          animate={{
            y: 4,
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className={classes.ScrollRequest}
        >
          <h1>
            스크롤을 이용해
            <br /> 진행해주세요
          </h1>
        </motion.div>
      )}
    </div>
  );
}

StoryPage.displayName = "StoryPage";

export default StoryPage;
