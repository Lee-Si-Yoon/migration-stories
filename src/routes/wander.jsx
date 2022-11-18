import styled from "styled-components";
import { motion } from "framer-motion";
// import { useLayoutEffect, useRef, useState } from "react";
import WanderOBJ from "../components/wanderOBJ";
import { useState } from "react";

const Layout = styled(motion.div)`
  color: ${(props) => props.theme.colors.text};
  width: 100%;
  height: 100vh;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
`;
const ObjContainer = styled.div`
  position: absolute;
`;
const Background = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0;
  background-size: 100%;
  /* object-fit: cover; */
`;

const stories = [
  { sajana: { src: "/imgs/wander/sajana.png", text: "지금까지 아주 가끔만 만날 수 있었어요" } },
  {
    chamikara: {
      src: "/imgs/wander/chamikara.png",
      text: "고등학교 졸업하자마자 1년정도 하고 있었는데 대학교 준비했었어요",
    },
  },
  { kemra: { src: "/imgs/wander/kemra.png", text: "31살이고 산지 8년 정도 되었고요" } },
  { sunyena: { src: "/imgs/wander/sunyena.png", text: "저는 결혼 비자를 하고 왔어요" } },
  { ting: { src: "/imgs/wander/ting.png", text: "실수가 없으면 진짜 못해요, 경험이 없잖아요" } },
  { akanain: { src: "/imgs/wander/akanain.png", text: "분체 도장은 여러 부분이 있어요" } },
  {
    dpiak: {
      src: "/imgs/wander/dpiak.png",
      text: "사람은 할 수 없는 거는 아무거나 없어요. 생각 따라서 가면 다 할 수 있어요",
    },
  },
];

export default function Wander() {
  const [clicked, setClicked] = useState(false);
  console.log(clicked);
  return (
    <Layout>
      <Background
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        src="/imgs/wander/wanderBackground.png"
        alt="background"
      />
      <ObjContainer>
        {stories.map((s) => (
          <WanderOBJ
            key={Object.keys(s)[0]}
            imgsrc={s[Object.keys(s)].src}
            name={Object.keys(s)[0]}
            clicked={setClicked}
          />
        ))}
      </ObjContainer>
    </Layout>
  );
}
