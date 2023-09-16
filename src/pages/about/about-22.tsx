import { motion } from "framer-motion";
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
        <h2>{texts[language].title}</h2>
        <div className={classes.TextContainer}>
          <p>{texts[language].text}</p>
        </div>
      </div>
    </div>
  );
}

About22Page.displayName = "About22Page";

export default About22Page;
