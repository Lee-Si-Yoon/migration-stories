import { motion, AnimatePresence } from "framer-motion";
import React from "react";

import classes from "./about-22.module.scss";
import { stagger, fadeInUp } from "./animation";
import contentRaw from "./content-22.json";
import languagesRaw from "./languages.json";
import poster from "../../imgs/poster.jpg";

interface Content {
  [key: string]: {
    title: string;
    text: string;
  };
}

interface Languages {
  languages: string[];
}

const texts = JSON.parse(JSON.stringify(contentRaw)) as Content;
const languages = JSON.parse(JSON.stringify(languagesRaw)) as Languages;

function About22Page() {
  const [language, setLanguage] = React.useState<string>(
    languages.languages[0]
  );
  return (
    <div className={classes.Layout}>
      <div className={classes.PosterContainer}>
        <img width={560} src={poster} draggable={false} loading="lazy" />
      </div>
      <motion.div variants={stagger} className={classes.AboutContainer}>
        <motion.div variants={fadeInUp} className={classes.ButtonContainer}>
          {languages.languages.map((lang: string) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={[language === lang && classes.Selected].join(" ")}
            >
              {lang}
            </button>
          ))}
        </motion.div>
        <h2>{texts[language].title}</h2>
        <motion.div variants={fadeInUp} className={classes.TextContainer}>
          <p>{texts[language].text}</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

About22Page.displayName = "About22Page";

export default About22Page;
