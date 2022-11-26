// STYLING
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Layout = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImageContainer = styled(motion.div)`
  width: 800px;
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 3px solid red; */
  /* overflow: hidden; */
`;
const Spacer = styled(motion.div)`
  width: 100%;
  height: 100%;
  margin-left: 2rem;
  position: relative;
  /* border: 1px solid red; */
`;
const GridImgs = styled(motion.img)`
  position: absolute;
  /* transform: scale(0.5); */
  /* object-position: 50% 50%; */
  object-fit: scale-down;
`;
// 네팔어
const One = styled(GridImgs)`
  width: 485px;
  top: 75%;
  left: 0;
`;
// 미얀마어
const Two = styled(GridImgs)`
  width: 400px;
  top: 42%;
  left: 30%;
`;
// 베트남어
const Three = styled(GridImgs)`
  width: 700px;
  top: 85%;
  left: 0;
`;
// 스리랑카어
const Four = styled(GridImgs)`
  width: 460px;
  top: 32%;
  left: 0;
`;
// 영어
const Five = styled(GridImgs)`
  width: 341px;
  left: 50%;
  top: 0;
`;
// 캄보디아
const Six = styled(GridImgs)`
  width: 74px;
  top: 25%;
  left: 90%;
`;
// 한국어
const Seven = styled(GridImgs)`
  width: 250px;
  top: 0;
  left: 0;
`;
const StartBtn = styled(motion.button)`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  border: 1px solid ${(props) => props.theme.colors.text};
  border-radius: 2rem;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  /* position: absolute;
  bottom: 8rem; */
`;

function randomDuration() {
  return `duration: ${Math.random() * 2}`;
}

export default function Loader(show) {
  return (
    <Layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <ImageContainer>
        <Spacer>
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
      <Link to={"/wander"}>
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
