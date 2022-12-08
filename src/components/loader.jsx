// STYLING
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Layout = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const ImageContainer = styled(motion.div)`
  min-width: 300px;
  max-width: 800px;
  width: 100%;
  aspect-ratio: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 575.98px) {
    width: 80%;
  }
`;
const Spacer = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  /* border: 1px solid red; */
`;
const GridImgs = styled(motion.img)`
  position: absolute;
  object-fit: scale-down;
`;
// 네팔어
const One = styled(GridImgs)`
  width: 60%;
  top: 75%;
  left: 0;
`;
// 미얀마어
const Two = styled(GridImgs)`
  width: 50%;
  top: 42%;
  left: 30%;
`;
// 베트남어
const Three = styled(GridImgs)`
  width: 87.5%;
  top: 85%;
  left: 0;
`;
// 스리랑카어
const Four = styled(GridImgs)`
  width: 57.5%;
  top: 32%;
  left: 0;
`;
// 영어
const Five = styled(GridImgs)`
  width: 42.5%;
  left: 50%;
  top: 0;
`;
// 캄보디아
const Six = styled(GridImgs)`
  width: 9.25%;
  top: 25%;
  left: 90%;
`;
// 한국어
const Seven = styled(GridImgs)`
  width: 31.25%;
  top: 0;
  left: 0;
`;
const StartBtn = styled(motion.button)`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  border: 1px solid ${(props) => props.theme.colors.text};
  border-radius: 2rem;
  padding: 2rem 2rem;
  font-size: 1.5rem;
  line-height: 0%;
  @media screen and (max-width: 575.98px) {
    font-size: 2rem;
    border-radius: 3rem;
  }
`;

function randomDuration() {
  return `duration: ${Math.random() * 2}`;
}

export default function Loader(show) {
  return (
    <Layout exit={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ImageContainer>
        <Spacer layout>
          <One
            src="/imgs/fragment/네팔어.png"
            alt="1.png"
            exit={{ x: -80, transition: { randomDuration } }}
          />
          <Two
            src="/imgs/fragment/미얀마어.png"
            alt="2.png"
            exit={{ y: -160, transition: { randomDuration } }}
          />
          <Three
            src="/imgs/fragment/베트남어.png"
            alt="3.png"
            exit={{ x: -120, transition: { randomDuration } }}
          />
          <Four
            src="/imgs/fragment/스리랑카어.png"
            alt="4.png"
            exit={{ y: 100, transition: { randomDuration } }}
          />
          <Five
            src="/imgs/fragment/영어.png"
            alt="5.png"
            exit={{ x: 40, transition: { randomDuration } }}
          />
          <Six
            src="/imgs/fragment/캄보디아어.png"
            alt="6.png"
            exit={{ y: 200, transition: { randomDuration } }}
          />
          <Seven
            src="/imgs/fragment/한국어.png"
            alt="6.png"
            exit={{ y: 200, transition: { randomDuration } }}
          />
        </Spacer>
      </ImageContainer>
      <Link
        style={{
          // border: "3px solid pink",
          width: "100%",
          height: "max-content",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
        }}
        to={"/wander"}
      >
        <StartBtn
          onClick={() => {
            show.show(false);
          }}
          whileHover={{
            backgroundColor: `rgb(255,255,255)`,
            color: `rgb(0,0,0)`,
            border: `0px solid rgb(0,0,0)`,
          }}
        >
          Start
        </StartBtn>
      </Link>
    </Layout>
  );
}
