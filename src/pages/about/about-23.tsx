import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import classes from "./about-22.module.scss";
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
    <main className={classes.Layout}>
      <div className={classes.PosterContainer}>
        <img alt="poster" draggable={false} loading="lazy" />
      </div>
      <div className={classes.ButtonsContainer}>
        <LanguageButtons
          data={languages}
          currentLanguage={language}
          setLanguage={setLanguage}
        />
      </div>
      <div className={classes.AboutContainer}>
        <AnimatePresence>
          <motion.h2
            key={`title-${texts[language].title}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.25 }}
            className={classes.Title}
          >
            {texts[language].title}
          </motion.h2>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            key={`title-${texts[language].text}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.25 }}
            className={classes.TextContainer}
          >
            <p>{texts[language].text}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}

About23Page.displayName = "About23Page";

export default About23Page;
