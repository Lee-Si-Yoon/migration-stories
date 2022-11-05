import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeInUp } from "../motion";

const Layout = styled(motion.div)`
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Spacer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  min-width: 1080px;
  height: 100%;
`;
const Poster = styled(motion.div)`
  width: 50%;
  text-align: center;
  line-height: 200%;
  font-size: 2.5rem;
`;
const AboutInfo = styled.div`
  width: 50%;
  line-height: 180%;
  margin: 0 2.5rem;
`;

export default function About() {
  return (
    <Layout variants={fadeInUp} initial="initial" animate="animate">
      <Spacer>
        <Poster>
          <motion.img
            src="/imgs/migration_poster.jpg"
            alt="migration_poster.jpg"
            width={500}
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          />
        </Poster>
        <AboutInfo>
          <p>
            ‘이주 이야기 프로젝트’는 경기도 남부지역의 이주민들의 이야기를
            들어볼 수 있는 작품입니다.
            <br />
            웹페이지를 통해 그리고 2022년 12월 경기도 화성시의 화성 문화원에서
            열리는 전시를 통해 국내의 거주하는 이주민분들의 경험과 이야기를 들어
            볼 수 있습니다. ‘이주 이야기 프로젝트’는 경기도 남부지역에 살고 있는
            멀리서 온 가까이에 있는 이웃인 이주민들의 이야기를 담아 보았습니다.
            본 프로젝트를 진행하면서 올해 국내에 머물고 계시는 6분을 만날 수
            있었고 한국에서의 삶과 경험 그리고 거주에 대하여 이야기를 나눌 수
            있었습니다. 실제로 만난 이주민 분들의 경험은 예상했던 것보다
            다양했고, 이동한 후에 낮선 환경에서 시간을 보내면서 정착하고
            융화되려고 노력하며 꾿꾿히 살아가는 이웃으로 다가오기도 했습니다.
            이주민분들의 이야기를 들으면서, 미래에서 아이들이 자랐을 때 자신이
            겪었던 차별을 격지 않았으면 좋겠다는 소망을 이야기 해주기도 했으며,
            우리가 서로 다르지 않음을 느끼기도 하고, 이웃들의 삶과 거주의
            이야기를 들으면서 나의 삶도 반추하게 되기도 했습니다. ‘이주 이야기
            프로젝트’는 클릭을 하며 이야기를 들어볼 수 있는 웹페이지와 전시를
            통해 작품을 관람하고 들어볼 수 있도록 제작해보았습니다.
            <br />
            <br />몇 천 킬로의 먼 거리를 넘어 한국이라는 낯선 공간에서 살아가는
            사람들의 이야기는 이주민 분들이 직접 겪은 경험과 이야기를 중심으로
            삶의 주변 일터인 산업현장과 풍경과 사물들을 담아 만들어 보았습니다.
            작고 소중한 우리 주변에 있는 먼 거리에서 온 이웃들의 이야기에
            집중하고 귀 기울일 수 있는 시간이 되었으면 좋겠습니다.
          </p>
        </AboutInfo>
      </Spacer>
    </Layout>
  );
}
