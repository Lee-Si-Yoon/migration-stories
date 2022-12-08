import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeInUp } from "../motion";
import { Texts } from "../aboutText";
import { useState } from "react";

// TODO css 좀 고치기

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
  min-width: 600px;
  width: 100%;
  @media screen and (max-width: 575.98px) {
    flex-direction: column;
    width: 80%;
  }
`;
const Poster = styled(motion.div)`
  width: 50%;
  text-align: center;
  line-height: 200%;
`;
const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 50%;
  line-height: 160%;
  font-size: 0.8rem;
`;

const lagnuages = ["Korean", "English", "Hindi", "Khmer", "Vietnamese", "Sinhala", "Verma"];

export default function About() {
  const [language, setLanguage] = useState(lagnuages[0]);

  return (
    <Layout variants={fadeInUp} initial="initial" animate="animate">
      <Spacer>
        <Poster>
          <motion.img
            src="/imgs/poster.jpg"
            alt="poster"
            width={500}
            // variants={fadeInUp}
            initial="initial"
            animate="animate"
            loading="lazy"
          />
        </Poster>
        <AboutInfo>
          {lagnuages.map((l) => (
            <button
              onClick={() => {
                setLanguage(l);
              }}
            >
              {l}
            </button>
          ))}
          <h2>{Texts[language].title}</h2>
          {Texts[language].text.split("\n").map((t) => (
            <p>{t}</p>
          ))}
        </AboutInfo>
      </Spacer>
    </Layout>
  );
}
