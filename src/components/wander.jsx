import styled from "styled-components";
import { motion } from "framer-motion";

const Layout = styled(motion.div)`
  color: ${(props) => props.theme.colors.text};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const stories = {
//   서저나: "운동화와 케이블과 수출입 자동차와 버스",
//   차미카라: "로웨세마",
//   캠라: "",
//   선예나: "꽃과 아이와 언어와 트롱",
//   팅: "전자 설비와 아이와 행복",
//   아카나인: "도장공장과 한국과 미얀마",
// };

export default function Wander() {
  return (
    <Layout>
      <h1>this is wander</h1>
    </Layout>
  );
}
