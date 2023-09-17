import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import classes from "./about-22.module.scss";
import { fadeInUp } from "./animation";
import contentRaw from "./content-23.json";
import languagesRaw from "./languages-23.json";
import type { Content, Languages } from "./model";
import LanguageButtons from "../../views/about/language-buttons";

const texts = JSON.parse(JSON.stringify(contentRaw)) as Content;
const languages = JSON.parse(JSON.stringify(languagesRaw)) as Languages;
function About23Page() {
  const [language, setLanguage] = React.useState<string>(
    languages.languages[0]
  );

  return (
    <div className={classes.Layout}>
      <div className={classes.PosterContainer}>
        {/* TODO add poster */}
        <img alt="poster" draggable={false} loading="lazy" />
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

About23Page.displayName = "About23Page";

export default About23Page;
