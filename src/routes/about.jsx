import styled from "styled-components";
import { motion } from "framer-motion";
// import { fadeInUp, stagger } from "../motion";
import { Texts } from "../aboutText";
import { useState } from "react";

// TODO css 좀 고치기

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
const PosterContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  @media screen and (max-width: 575.98px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8rem 0 0 0;
  }
`;
const Poster = styled(motion.img)`
  width: 60%;
  user-select: none;
  @media screen and (max-width: 575.98px) {
    width: 90%;
  }
`;
const AboutContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-top: 10rem;
  @media screen and (max-width: 575.98px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 3rem;
    align-items: center;
    justify-content: center;
  }
`;
const ButtonContainer = styled(motion.div)`
  width: 600px;
  padding-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
  button {
    background: none;
    color: white;
    border: 1px solid white;
    padding: 0.5rem 0;
    border-radius: 2rem;
    white-space: nowrap;
    font-size: 1rem;
  }
  button:hover {
    background-color: white;
    color: black;
    border: none;
    transition: all 0.5s ease-out;
    cursor: pointer;
  }
  @media screen and (max-width: 575.98px) {
    width: 400px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.5rem;
    row-gap: 1rem;
    padding-bottom: 3rem;
    button {
      background: none;
      color: white;
      border: 1px solid white;
      padding: 1rem 0;
      border-radius: 2rem;
      white-space: nowrap;
      font-size: 1.2rem;
    }
  }
`;
const TextConatiner = styled(motion.div)`
  width: 600px;
  padding-bottom: 2.5rem;
  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    line-height: 160%;
  }
  p {
    line-height: 160%;
  }
  @media screen and (max-width: 575.98px) {
    width: 90%;
    /* padding: 0 2rem; */
    padding-bottom: 2.5rem;
    h2 {
      line-height: 180%;
    }
    p {
      font-size: 1.2rem;
      line-height: 190%;
    }
  }
`;

const lagnuages = [
  "한국어",
  "English",
  "नेपाली",
  "ភាសាខ្មែរ",
  "TiếngViệt",
  "සිංහල",
  "မြန်မာဘာသာ",
];

const fadeInUp = {
  hidden: {
    y: -60,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};
const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function About() {
  const [language, setLanguage] = useState(lagnuages[0]);

  return (
    <Layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Spacer>
        <PosterContainer>
          <Poster
            draggable="false"
            src="/imgs/poster.jpg"
            alt="poster"
            loading="lazy"
          />
        </PosterContainer>
        <AboutContainer variants={stagger} initial="hidden" animate="show">
          <ButtonContainer variants={fadeInUp}>
            {lagnuages.map((l) => (
              <button
                onClick={() => {
                  setLanguage(l);
                }}
              >
                {l}
              </button>
            ))}
          </ButtonContainer>
          <TextConatiner variants={fadeInUp}>
            <h2>{Texts[language].title}</h2>
            {Texts[language].text.split("\n").map((t) => (
              <p>{t}</p>
            ))}
          </TextConatiner>
        </AboutContainer>
      </Spacer>
    </Layout>
  );
}
