import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

import partner1 from "../imgs/partner1.png";
import partner2 from "../imgs/partner2.png";
import partner3 from "../imgs/partner3.png";

const Layout = styled(motion.div)`
  width: 100%;
  max-width: 100%;
  height: max-content;
  overflow-y: auto;
  background-color: ${(props) => props.theme.colors.background};
  color: white;
`;
const Spacer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 575.98px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;
const CreditMain = styled(motion.div)`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  p {
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    line-height: 240%;
  }
  @media screen and (max-width: 575.98px) {
    width: 90%;
    padding: 10rem 0 0 0;
    p {
      line-height: 200%;
    }
  }
`;
const CreditInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  @media screen and (max-width: 575.98px) {
    width: 90%;
    padding: 3rem 0;
  }
`;
const TextContainer = styled.div`
  width: 600px;
  p {
    font-size: 1rem;
    line-height: 160%;
  }
  @media screen and (max-width: 575.98px) {
    width: 100%;
    p {
      font-size: 1.2rem;
      line-height: 190%;
    }
  }
`;
const PartnerContainer = styled.div`
  display: flex;
  column-gap: 2rem;
  width: 600px;
  padding-top: 2rem;
  img {
    width: 30%;
    object-fit: contain;
    -webkit-touch-callout: none;
    user-select: none;
  }
  @media screen and (max-width: 575.98px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 3rem;
    width: 100%;
    padding-top: 4rem;
    img {
      width: 50%;
    }
  }
`;

const fadeInFromLeft = {
  hidden: {
    x: -60,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};
const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Credit() {
  return (
    <Layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Spacer>
        <CreditMain variants={stagger} initial="hidden" animate="show">
          <motion.p variants={fadeInFromLeft}>이주 이야기 프로젝트</motion.p>
          <motion.p variants={fadeInFromLeft}>
            MIGRATION STORIES PROJECT
          </motion.p>
          <motion.p variants={fadeInFromLeft}>प्रवास कथा परियोजना</motion.p>
          <motion.p variants={fadeInFromLeft}>
            සංක්‍රමණිකයන්ගේ කතා මාලාව
          </motion.p>
          <motion.p variants={fadeInFromLeft}>dự án câu chuyện di cư</motion.p>
          <motion.p variants={fadeInFromLeft}>ရွှေ့ပြောင်းနေထိုင်မှု</motion.p>
          <motion.p variants={fadeInFromLeft}>
            ဇာတ်လမ်းပရောဂျက် គម្រោងរឿងចំណាកស្រុក
          </motion.p>
        </CreditMain>
        <CreditInfo>
          <TextContainer>
            <p>전시 일시 : 2022년 12월 15일(목) - 2022년 12월 23일 (금)</p>
            <p>
              전시 장소 : 화성문화원 갤러리, 경기도 화성시 향남읍 행정리 287-1
            </p>
            <p>전시 시간 : 오전 9시 - 저녁 8시</p>
            <br />
            <p>
              참여자 : චාමිකර CHAMICAKRA 차미카라, NGUYỄN ĐÌNH THỊNH NGUYEN DINH
              THINH 웅엔딩팅, အာကာငြိမ်း AR KER NYEIN 아카나인, सजना याक्सो
              SAJANA YAKSO 서저나 약소 , DINH TAM NHU HUONG 띵담느흐엉, ឃាម រ៉ា
              KHEAM RA 캠라, दीपक बञ्जारा Dipak Banjara
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
            </p>
          </TextContainer>
          <PartnerContainer>
            <img draggable="false" src={partner1} alt="partner1" />
            <img draggable="false" src={partner2} alt="partner2" />
            <img draggable="false" src={partner3} alt="partner3" />
          </PartnerContainer>
        </CreditInfo>
      </Spacer>
    </Layout>
  );
}
