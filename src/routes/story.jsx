// REACT
import { Suspense, useRef } from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ScrollRequest from "../components/ScrollRequest";
// STYLING
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
// 3D
import { Canvas } from "@react-three/fiber";
import { Akinain } from "../draco/Akinain-draco";
import { Chamikara } from "../draco/Chamikara-draco";
import { Dipak } from "../draco/Dipak-draco";
import { Kemra } from "../draco/kemra-draco";
import { Sajana2 } from "../draco/Sajana2";
import { Sunyena } from "../draco/Sunyena-draco";
import { Ting } from "../draco/Ting";
import { OrbitControls } from "@react-three/drei";

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

export default function Story() {
  const containerRef = useRef(null);
  const [isScrolling, setScrolling] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [scrollEnd, setEnd] = useState(false);
  const [name, setName] = useState("");

  let scrollingID = useRef(null);
  let location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setName(location.pathname.split("/")[2]);
  }, [location.pathname]);

  // 맨 처음 스크롤 띄우기
  useEffect(() => {
    setScrolling(true);
    setScrollPos(15);
  }, []);

  function logic() {
    setScrolling(false);
    window.clearTimeout(scrollingID);
    const ratio = window.scrollY / (containerRef.current.offsetHeight - window.innerHeight);
    const percentage = map_range(ratio, 0, 1, 15, 100);
    setScrollPos(percentage);
    // FIXED 끝에 도착했을때 스크롤 안뜨게끔 - navigate 방식으로 해결
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
      navigate(`/video/${name}`);
      // redirect(`/video/${location.pathname.split("/")[2]}`);
    } else {
      setEnd(false);
    }
  }, [scrollPos, name, navigate]);

  return (
    <>
      <Layout ref={containerRef} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <OBJContainer>
          {/* <HTMLContent /> */}
          <Container>
            <div style={{ position: "absolute", width: "100%", height: "100%" }}>
              <Canvas
                frameloop="demand"
                camera={{ position: [0, 0, 0], fov: 45, far: 5000, near: 1 }}
              >
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                {/* <directionalLight position={[-2, 12, scrollPos + 10]} intensity={0.25} /> */}
                {/* <directionalLight position={[20, 12, scrollPos + 10]} intensity={0.25} /> */}
                <spotLight position={[-2, 50, scrollPos + 10]} intensity={0.25} />
                <spotLight position={[-20, 50, scrollPos + 20]} intensity={0.25} />
                <Suspense fallback={null}>
                  {/* TODO location 받아와서 model 변환 */}
                  {name === "sajana" ? (
                    <Sajana2 rotation={[0, 0, 0.0]} position={[0, 0, scrollPos]} />
                  ) : name === "chamikara" ? (
                    <Chamikara rotation={[0, 0, 0.0]} position={[0, 0, scrollPos]} />
                  ) : name === "kemra" ? (
                    <Kemra rotation={[0, 0, 0.0]} position={[0, 0, scrollPos]} />
                  ) : name === "sunyena" ? (
                    <Sunyena rotation={[0, 0, 0.0]} position={[0, 0, scrollPos]} />
                  ) : name === "akanain" ? (
                    <Akinain rotation={[0, 0, 0.0]} position={[0, 0, scrollPos]} />
                  ) : name === "dpiak" ? (
                    <Dipak rotation={[0, 0, 0.0]} position={[0, 0, scrollPos]} />
                  ) : name === "ting" ? (
                    <Ting rotation={[0, 0, 0.0]} position={[0, 0, scrollPos]} />
                  ) : null}
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
