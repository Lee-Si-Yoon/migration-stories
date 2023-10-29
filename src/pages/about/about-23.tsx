import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import classes from "./about-23.module.scss";
import contentRaw from "./content-23.json";
import languagesRaw from "./languages-23.json";
import type { Content2023, Languages } from "./model";
import poster from "../../imgs/poster/poster-23.webp";
import LanguageButtons from "../../views/about/language-buttons";

const texts = JSON.parse(JSON.stringify(contentRaw)) as Content2023;
const languages = JSON.parse(JSON.stringify(languagesRaw)) as Languages;
function About23Page() {
  const [language, setLanguage] = React.useState<string>(
    languages.languages[0]
  );

  return (
    <main className={classes.Layout}>
      <div className={classes.PosterContainer}>
        <img alt="poster" src={poster} draggable={false} loading="lazy" />
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
          <motion.h3
            key={`title-${texts[language].subtitle1.slice(0, 5)}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.25 }}
            className={classes.SubTitle}
          >
            {texts[language].subtitle1}
          </motion.h3>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            key={`title-${texts[language].text1.slice(0, 5)}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.25 }}
            className={classes.TextContainer}
          >
            <p>{texts[language].text1}</p>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.hr
            key={`divider-${texts[language].subtitle2.slice(0, 5)}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.25 }}
            className={classes.Divider}
          />
          <motion.h3
            key={`title-${texts[language].subtitle2.slice(0, 5)}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.25 }}
            className={classes.SubTitle}
          >
            {texts[language].subtitle2}
          </motion.h3>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            key={`title-${texts[language].text2.slice(0, 5)}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.25 }}
            className={classes.TextContainer}
          >
            <p>{texts[language].text2}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}

About23Page.displayName = "About23Page";

export default About23Page;
