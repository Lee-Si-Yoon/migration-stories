import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import classes from "./about-22.module.scss";
import { fadeInUp } from "./animation";
import contentRaw from "./content-22.json";
import languagesRaw from "./languages-22.json";
import type { Content, Languages } from "./model";
import poster from "../../imgs/poster/poster-22.jpg";
import LanguageButtons from "../../views/about/language-buttons";

const texts = JSON.parse(JSON.stringify(contentRaw)) as Content;
const languages = JSON.parse(JSON.stringify(languagesRaw)) as Languages;
function About22Page() {
  const [language, setLanguage] = React.useState<string>(
    languages.languages[0]
  );

  return (
    <div className={classes.Layout}>
      <div className={classes.PosterContainer}>
        <img alt="poster" src={poster} draggable={false} loading="lazy" />
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
            {...fadeInUp}
          >
            {texts[language].title}
          </motion.h2>
          <motion.div
            key={`${language}-text`}
            className={classes.TextContainer}
            {...fadeInUp}
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
