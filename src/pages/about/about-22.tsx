import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import classes from "./about-22.module.scss";
import contentRaw from "./content-22.json";
import languagesRaw from "./languages.json";
import poster from "../../imgs/poster.jpg";
import LanguageButtons from "../../views/about/language-buttons";

interface Content {
  [key: string]: {
    title: string;
    text: string;
  };
}

interface Languages {
  languages: string[];
}

const props = {
  initial: { opacity: 0, display: "none", y: 40 },
  animate: { opacity: 1, display: "initial", y: 0 },
  exit: { opacity: 0, display: "none" },
  transition: {
    duration: 1,
    delay: 0.1,
    ease: [0.6, -0.5, 0.01, 0.99],
  },
};

const texts = JSON.parse(JSON.stringify(contentRaw)) as Content;
const languages = JSON.parse(JSON.stringify(languagesRaw)) as Languages;
function About22Page() {
  const [language, setLanguage] = React.useState<string>(
    languages.languages[0]
  );

  return (
    <div className={classes.Layout}>
      <div className={classes.PosterContainer}>
        <img src={poster} draggable={false} loading="lazy" />
      </div>
      <div className={classes.AboutContainer}>
        <LanguageButtons
          data={languages}
          currentLanguage={language}
          setLanguage={setLanguage}
        />
        <AnimatePresence>
          <motion.h2
            key={`${language}-title`}
            className={classes.Title}
            {...props}
          >
            {texts[language].title}
          </motion.h2>
          <motion.div
            key={`${language}-text`}
            className={classes.TextContainer}
            {...props}
          >
            <p>{texts[language].text}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

About22Page.displayName = "About22Page";

export default About22Page;
