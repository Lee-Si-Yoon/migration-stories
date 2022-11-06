// STYLING
import styled from "styled-components";
import { motion } from "framer-motion";

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
  position: relative;
`;
const ImageContainer = styled(motion.div)`
  width: 800px;
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid white; */
`;
const Spacer = styled(motion.div)`
  width: 100%;
  height: 100%;
  margin-left: 2rem;
  position: relative;
`;
const GridImgs = styled(motion.img)`
  position: absolute;
`;
// 이주 이야기...
const One = styled(GridImgs)`
  top: 0;
  left: 0;
`;
// migration...
const Two = styled(GridImgs)`
  top: 0;
  left: 40%;
`;
// සංක්‍රමණිකයන්ගේ
const Three = styled(GridImgs)`
  top: 33%;
  left: 0;
`;
// ရွှေ့ပြောင်းနေထိုင်မှု
const Four = styled(GridImgs)`
  top: 47%;
  left: 5%;
`;
// प्रवास कथा
const Five = styled(GridImgs)`
  left: 80%;
  top: 12%;
`;
const Six = styled(GridImgs)`
  top: 80%;
  left: 0;
`;
const StartBtn = styled(motion.button)`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  border: 1px solid ${(props) => props.theme.colors.text};
  border-radius: 2rem;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  position: absolute;
  bottom: 8rem;
`;

// 이거 작동하는지 모르겠
const stagger = {
  hidden: { opacity: 0 },
  show: {
    transition: { staggerChildren: 1 },
  },
};

function randomDuration() {
  return `duration: ${Math.random() * 2}`;
}

export default function Loader(show) {
  return (
    <Layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ImageContainer>
        <Spacer variants={stagger}>
          <One
            src="/imgs/fragment/1.png"
            alt="1.png"
            exit={{ x: -80, transition: { randomDuration } }}
          />
          <Two
            src="/imgs/fragment/2.png"
            alt="2.png"
            exit={{ y: -160, transition: { randomDuration } }}
          />
          <Three
            src="/imgs/fragment/3.png"
            alt="3.png"
            exit={{ x: -120, transition: { randomDuration } }}
          />
          <Four
            src="/imgs/fragment/4.png"
            alt="4.png"
            exit={{ y: 100, transition: { randomDuration } }}
          />
          <Five
            src="/imgs/fragment/5.png"
            alt="5.png"
            exit={{ x: 40, transition: { randomDuration } }}
          />
          <Six
            src="/imgs/fragment/6.png"
            alt="6.png"
            exit={{ y: 200, transition: { randomDuration } }}
          />
        </Spacer>
      </ImageContainer>
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
    </Layout>
  );
}
