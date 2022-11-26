// REACT
import { Suspense, useRef } from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// STYLING
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
// 3D
import { Canvas } from "@react-three/fiber";
import { Model } from "../components/Draco";
// import { OrbitControls } from "@react-three/drei";

const Layout = styled(motion.div)`
  width: 100vw;
  max-width: 100%;
  height: 500vh;
  /* border: 3px solid red; */
  background-color: ${(props) => props.theme.colors.background};
`;

const OBJContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function map_range(value, low1, high1, low2, high2) {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
}

function ScrollRequest() {
  return (
    <motion.div
      style={{
        width: "10rem",
        height: "4rem",
        position: "absolute",
        bottom: "10rem",
      }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <motion.div
        style={{
          color: "white",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
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
      >
        <div
          style={{
            width: "4rem",
            marginBottom: "1rem",
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <h1>스크롤을 내려주세요</h1>
      </motion.div>
    </motion.div>
  );
}

export default function Story() {
  const containerRef = useRef(null);
  const [isScrolling, setScrolling] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [scrollEnd, setEnd] = useState(false);

  let scrollingID = useRef(null);
  let location = useLocation();
  const navigate = useNavigate();

  // console.log(location.pathname);

  // 맨 처음 스크롤 띄우기
  useEffect(() => {
    setScrolling(true);
    setScrollPos(15);
  }, []);

  function logic() {
    const ratio = window.scrollY / (containerRef.current.offsetHeight - window.innerHeight);
    const percentage = map_range(ratio, 0, 1, 15, 100);
    setScrollPos(percentage);
    setScrolling(false);
    // console.log(percentage);
    window.clearTimeout(scrollingID);
    // TODO 끝에 도착했을때 스크롤 안뜨게끔
    scrollingID = setTimeout(function () {
      setScrolling(true);
      // console.log("scrolling stoped");
    }, 2000);
  }
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logic, false);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logic, false);
    };
  });

  useEffect(() => {
    if (scrollPos >= 99) {
      setEnd(true);
      navigate(`/video/${location.pathname.split("/")[2]}`);
      // redirect(`/video/${location.pathname.split("/")[2]}`);
    } else {
      setEnd(false);
    }
  }, [scrollPos, location, navigate]);

  return (
    <>
      <Layout ref={containerRef} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <OBJContainer>
          {/* <HTMLContent /> */}
          <Container>
            <div style={{ position: "absolute", width: "100%", height: "100%" }}>
              <Canvas frameloop="demand" camera={{ position: [0, 0, 0], fov: 45, far: 1000 }}>
                {/* <OrbitControls enableZoom={false} /> */}
                <ambientLight intensity={0.1} />
                {/* <directionalLight position={[-2, 12, scrollPos + 10]} intensity={0.25} /> */}
                {/* <directionalLight position={[20, 12, scrollPos + 10]} intensity={0.25} /> */}
                <spotLight position={[-2, 50, scrollPos + 10]} intensity={0.25} />
                <spotLight position={[-20, 50, scrollPos + 10]} intensity={0.25} />
                <Suspense fallback={null}>
                  <Model rotation={[0, 0, 0.0]} position={[0, 0, scrollPos]} />
                </Suspense>
              </Canvas>
            </div>
            <AnimatePresence>
              {isScrolling && !scrollEnd ? <ScrollRequest /> : null}
            </AnimatePresence>
          </Container>
        </OBJContainer>
      </Layout>
    </>
  );
}
