import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  width: 10rem;
  height: 4rem;
  position: absolute;
  bottom: 8rem;
  @media screen and (max-width: 575.98px) {
    bottom: 4rem;
  }
`;
const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  h1 {
    text-align: center;
    line-height: 140%;
  }
`;

export default function ScrollRequest() {
  return (
    <Wrapper
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <TextContainer
        initial={{
          y: -4,
        }}
        animate={{
          y: 4,
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <h1>
          스크롤을 이용해
          <br /> 진행해주세요
        </h1>
      </TextContainer>
    </Wrapper>
  );
}
