import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeInUp, fadeInFromLeft, stagger } from "../motion";

const Layout = styled(motion.div)`
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Spacer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  min-width: 1080px;
  height: 100%;
`;
const CenterMain = styled(motion.div)`
  width: 50%;
  text-align: center;
  line-height: 200%;
  font-size: 2.5rem;
`;
const CreditInfo = styled.div`
  width: 50%;
  line-height: 180%;
  margin: 0 2.5rem;
`;

export default function Credit() {
  return (
    <Layout variants={fadeInUp} initial="initial" animate="animate">
      <Spacer>
        <CenterMain variants={stagger}>
          <motion.p variants={fadeInFromLeft}>이주 이야기 프로젝트</motion.p>
          <motion.p variants={fadeInFromLeft}>MIGRATION STORIES PROJECT</motion.p>
          <motion.p variants={fadeInFromLeft}>प्रवास कथा परियोजना</motion.p>
          <motion.p variants={fadeInFromLeft}>සංක්‍රමණිකයන්ගේ කතා මාලාව</motion.p>
          <motion.p variants={fadeInFromLeft}>dự án câu chuyện di cư</motion.p>
          <motion.p variants={fadeInFromLeft}>ရွှေ့ပြောင်းနေထိုင်မှု</motion.p>
          <motion.p variants={fadeInFromLeft}>ဇာတ်လမ်းပရောဂျက် គម្រោងរឿងចំណាកស្រុក</motion.p>
        </CenterMain>
        <CreditInfo>
          <p>전시 일시 : 2022년 12월 15일(목) - 2022년 12월 23일 (금)</p>
          <p>전시 장소 : 화성문화원 갤러리, 경기도 화성시 향남읍 행정리 287-1</p>
          <p>전시 시간 : 오전 9시 저녁 8시</p>
          <br />
          <p>
            참여자 : චාමිකර CHAMICAKRA 차미카라, NGUYỄN ĐÌNH THỊNH NGUYEN DINH THINH 웅엔딩팅,
            အာကာငြိမ်း AR KER NYEIN 아카나인, सजना याक्सो SAJANA YAKSO 서저나 약소 , DINH TAM NHU
            HUONG 띵담느흐엉, ឃាម រ៉ា KHEAM RA 캠라, दीपक बञ्जारा Dipak Banjara
          </p>
          <br />
          <p>
            작가: 김양우
            <br />
            웹: 이시윤
            <br />
            포스터 및 인쇄물 디자인: 양윤아
            <br />
            3D 디자인: 강혜영
            <br />
            홍보: 배진선
            <br />
            텍스트: 전솔비
            <br />
            번역: 웰시스
          </p>
          <br />
          <p>
            도움 : 컬쳐플레이트, 화성시민네트워크
            <br />
            협력 : 화성시외국인복지센터, 문화더함공간 '서로'
            <br />
            후원 : 한국문화예술위원회 다원예술창작지원
            <br />
            한국문화예술위원회 (2022년 다원예술 창작지원사업)
            {/* TODO 로고 추가 */}
          </p>
          <div
            style={{
              display: "flex",
              width: "100%",
              marginTop: "2rem",
              alignItems: "center",
              columnGap: "2rem",
            }}
          >
            <img src="/imgs/partner1.png" alt="partner1" style={{ height: "30px" }} />
            <img src="/imgs/partner2.png" alt="partner2" style={{ height: "30px" }} />
            <img src="/imgs/partner3.png" alt="partner3" style={{ height: "30px" }} />
          </div>
        </CreditInfo>
      </Spacer>
    </Layout>
  );
}
