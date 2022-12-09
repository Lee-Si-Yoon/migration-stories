// STYLING
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProgressiveImg from "../components/ProgressiveImg";

const Layout = styled.div`
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
const ImageContainer = styled.div`
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
const Spacer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  -webkit-touch-callout: none;
  user-select: none;
  /* border: 1px solid red; */
`;
const GridImgs = styled(ProgressiveImg)`
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

const StartBtn = styled.button`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  border: 1px solid ${(props) => props.theme.colors.text};
  border-radius: 2rem;
  padding: 2rem 2rem;
  font-size: 1.5rem;
  line-height: 0%;
  &:hover {
    background-color: ${(props) => props.theme.colors.text};
    color: ${(props) => props.theme.colors.background};
    transition: all 0.5s ease-out;
  }
  @media screen and (max-width: 575.98px) {
    font-size: 2rem;
    border-radius: 3rem;
  }
`;

export default function Loader(show) {
  return (
    <Layout>
      <ImageContainer>
        <Spacer>
          <One
            placeholderSrc="/imgs/fragment-min/네팔어-min.png"
            src="/imgs/fragment/네팔어.png"
            alt="1.png"
            fetchpriority="high"
          />
          <Two
            placeholderSrc="/imgs/fragment-min/미얀마어-min.png"
            src="/imgs/fragment/미얀마어.png"
            alt="2.png"
            fetchpriority="high"
          />
          <Three
            placeholderSrc="/imgs/fragment-min/베트남어-min.png"
            src="/imgs/fragment/베트남어.png"
            alt="3.png"
            fetchpriority="high"
          />
          <Four
            placeholderSrc="/imgs/fragment-min/스리랑카어-min.png"
            src="/imgs/fragment/스리랑카어.png"
            alt="4.png"
            fetchpriority="high"
          />
          <Five
            placeholderSrc="/imgs/fragment-min/영어-min.png"
            src="/imgs/fragment/영어.png"
            alt="5.png"
            fetchpriority="high"
          />
          <Six
            placeholderSrc="/imgs/fragment-min/캄보디아어-min.png"
            src="/imgs/fragment/캄보디아어.png"
            alt="6.png"
            fetchpriority="high"
          />
          <Seven
            placeholderSrc="/imgs/fragment-min/한국어-min.png"
            src="/imgs/fragment/한국어.png"
            alt="6.png"
            fetchpriority="high"
          />
        </Spacer>
      </ImageContainer>
      <Link
        style={{
          width: "max-content",
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
        >
          Start
        </StartBtn>
      </Link>
    </Layout>
  );
}
